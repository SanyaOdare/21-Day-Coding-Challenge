const toggle = {
  name: "toggleA",
  isOn: false
} 

const switchToggle = (toggle) => {
  // Code here!
  console.log(toggle.isOn);
  toggle.isOn = !toggle.isOn;
  console.log(toggle.isOn);
    return toggle;
  // Remember to return a value!
}
switchToggle(toggle);