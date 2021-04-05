import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import map from 'lodash/map';
import startCase from 'lodash/startCase';

const SidebarLink = styled(Link)`
border-left: 6px solid #ff9900;
border-bottom: 2px solid darkorange;
  display: flex;
  color: #000;
  width:500px;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  

  &:hover {
    background:  #632ce4;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
border-left: 6px solid #ff9900;

border-bottom: 1px dotted darkorange;
  background: #fff;
  height: 60px;
  width:470px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;



const SubMenu = ({ item }) => {
  
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const [isMobile,setIsMobile]=useState("");
  const Radio = ({label, id, handleChange, name, form}) => (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        onChange={handleChange}
        value={id}
        checked={form[name] === id}
      />
      <label htmlFor={id}>{label}</label>
      <br />
    </>
  );

  const [form, setFormValue] = useState({
    
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    //console.log({...e.target});
    setFormValue((prevFormValues) => ({
      ...prevFormValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    
    <>
    {map(form, (val, key) => (
        <div key={key}>
          {`${startCase(key)}: `}
          {`${val}`}
        </div>
    ))}
      <SidebarLink onClick={item.subNav && showSubnav} >
        <div>
          <img src={item.icon} style={{width:'55px', height:'55px'}}/>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            
            <DropdownLink  key={index}>
              {item.icon}
              
                <SidebarLabel>{item.title}</SidebarLabel>
                <Radio
                  form={form}
                  name="mobile"
                  value={item.title}
                  id={item.title}
                  onChange={(e)=>{setIsMobile(e.target.value)}}
                  handleChange={handleChange}
                /> 
                {/*<h1>value {map(form, (val, key) => (
        <div key={key}>
          {`${startCase(key)}: `}
          {`${val}`}
        </div>
                ))}</h1>*/}
            </DropdownLink>
        
          );
        })}
    </>
  );
};



export default SubMenu;
