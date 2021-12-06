
// Add your parseMessage function here if you want!

const parseTranscripts = (messages) => {
  // Code here!
  let msg = [];
  for (let i = 0; i < messages.length; i++){
    msg.push(messages[i].origin+ ": " +messages[i].message);
  }
  console.log(messages.message);
  return msg;
}