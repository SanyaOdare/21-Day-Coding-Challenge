const averageWindSpeed = (weatherEntries) => {
  // Code here!
  let total = 0;
  for(i = 0; i < weatherEntries.length; i++) {
    total += weatherEntries[i].windSpeed;
  }
  let calcAverage = total / weatherEntries.length;
  console.log(total);
  return Math.round(calcAverage);
}