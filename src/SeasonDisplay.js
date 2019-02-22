import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Summer is here!',
    iconName: 'sun'
  },
  winter: {
    text: 'Winter is Coming!',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'; //ternary expression: if true, then....else
  } else {
    return lat < 0 ? 'summer' : 'winter';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
//  const icon = season === 'Winter' ? 'snowflake' : 'sun';
  const {text, iconName} = seasonConfig[season]; //returns {text, iconName} corresponding to season
    return (
    <div>
      <i className={`${iconName} icon`} />
        <h1>Season: {text}</h1>
          {/* <h1>{season === 'Winter' ? 'Winter is Coming!' : 'Summer is upon us'}</h1> */}
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;