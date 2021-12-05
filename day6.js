const roster = [];
const astronaut = {
  firstName: "Chris",
  lastName: "Hadfield",
  nickname: "Space Oddity",
  prefix: "Astronaut"
}


const addAstronautToRoster = (roster, astronaut) => {
  // Code here!
  console.log(roster);
  roster.push(astronaut);
  return roster;
}
addAstronautToRoster(roster);