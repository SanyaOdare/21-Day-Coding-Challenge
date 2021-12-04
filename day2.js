const astronaut = {
  firstName: "Yuri",
  lastName: "Gagarin",
  nickname: "First!",
  prefix: "Cosmonaut"
};

const generateAstronautTag = (astronaut) => {
// Code here!
return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`;
console.log(generateAstronautTag);
// Remember to return a value!
};

generateAstronautTag(astronaut);