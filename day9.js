const listAstronautJobs = (roster) => {
  // Code here!
  let astronautJobs = [];
  for(let i = 0; i < roster.length; i++) {
    astronautJobs.push(roster[i].job);
  }
  return astronautJobs;
}