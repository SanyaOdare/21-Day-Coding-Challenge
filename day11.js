const bookFreePlatform = (platformList, missionDate) => {
  // Code here!
  for (let i = 0; i < platformList.length; i++) {
    if (typeof platformList[i].bookDate === "undefined") {
      platformList[i].bookDate = missionDate;
      console.log(i);
      i = platformList.length;
    }
  }
  // update date properties
  return platformList;
}