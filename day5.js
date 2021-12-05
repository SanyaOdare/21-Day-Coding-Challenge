const astronaut = {
  firstName: "Chris",
  lastName: "Hadfield",
  nickname: "Space Oddity",
  prefix: "Astronaut"
}

const addJobToAstronaut = (astronaut, job) => {
  // Code here!
  astronaut.job = job;
  console.log(astronaut.job);
  return astronaut;
  // Remember to return a valujob
}

addJobToAstronaut(astronaut);