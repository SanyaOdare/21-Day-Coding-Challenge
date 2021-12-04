const gauge = {
  current: 0.4,
  min: 0.1,
  max: 0.9
} 


const checkGaugeStatus = (gauge) => {
  // Code here!
  if(gauge.current <= gauge.min || gauge.current <= gauge.max ) {
    return true;
  } else {
    return false;
  }
  // Remember to return a value!
  console.log(checkGaugeStatus);
  return gauge;
}