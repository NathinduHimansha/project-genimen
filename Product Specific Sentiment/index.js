const axios = require("axios");
const cheerio = require("cheerio");
const fs = require ("fs")
const json2csv= require("json2csv").Parser;
//performing a GET request
axios
  .get("https://www.ideabeam.com/mobile/samsung-galaxy-m31-128gb-price.html#gsc.tab=0&gsc.q=Samsung%20Galaxy%20M31%20128GB&gsc.sort=")
  .then((response) => {
    //handling the success
    const html = response.data;

    //loading response data into a Cheerio instance
    const $ = cheerio.load(html);
    let mobileData =[]

    //selecting the elements with the data

    const title= $('div[class="span9"] >h2').text().trim();
    const lowprice= $('span[class="lowprice"]').text();
    const highprice= $('span[class="highprice"]').text();
    const specs= $('table[class="table table-bordered table-striped"]').text().trim();
    //outputting the scraped data
    
    mobileData.push({
        title:title,
        lowprice:lowprice,
        highprice:highprice,
        specs:specs,
    });
    console.log(mobileData)
    const j2cp =new json2csv()
    const csv =j2cp.parse(mobileData)

    fs.writeFileSync("./mobile1.csv",csv, "utf-8");
  })
  //handling error
  .catch((error) => {
    console.log(error);
  });