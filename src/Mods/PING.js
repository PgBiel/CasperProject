// MODULE DETAILS
// :: NAME - Ping Execution
// :: DESC - Pings CasperBot Response Time
// :: AUTHOR - sammyvsparks
// :: FUNCTIONS: execute()

module.exports = {

  execute: function(message) {
    message.channel.sendMessage("Ping \_\_\_ -waits-").then(msg => {
      msg.edit("123Ping is \__"+(msg.createdTimestamp - message.createdTimestamp)+"ms_\_");
    }).catch(console.error);
  }

}
