import React from 'react';

const NetPolarity = (props) => {
	let {polarity} = props;
	const color = polarity > 0 ? "var(--pos-green)" : "var(--neg-red)"
	polarity = polarity > 0 ? "+" + polarity : polarity

	return (
		<div>
			<h2 className="heading2  polarity-score -no-margin -bold" style={{color: color}}>{polarity}</h2>
		</div>
	);
};

export default NetPolarity;
