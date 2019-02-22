import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'; //ternary expression: if true, then....else
  } else {
    return lat < 0 ? 'Summer' : 'Winter';
  }
}

const SeasonDisplay = (props) => {
 const season = getSeason(props.lat, new Date().getMonth());
 const icon = season === 'Winter' ? 'snowflake' : 'sun';
  return (
  <div>
    <i className={`${icon} icon`} />
    <h1>{season === 'Winter' ? 'Winter is Coming!' : 'Summer is upon us'}</h1>
    <i className={`${icon} icon`} />
  </div>
  );
};

export default SeasonDisplay;