// MODULE DETAILS
// :: NAME - Help Execution
// :: DESC - Displays CasperBot Command Index
// :: AUTHOR - sammyvsparks
// :: FUNCTIONS: execute()

var Config = require('../BootStrap/config.json');

const commands = [
	"**Command List:** \n" +
	" `" + Config.prefix + "help` : Shows Help Index.\n" +
	" `" + Config.prefix + "ping` : Queries Discord API Response."
];

module.exports = {

  execute: function(message) {
      var isDM = message.channel.type === "dm" || message.channel.type === "group";

	  if(!isDM) {
		  message.channel.sendMessage("Sending Commands... Please wait!");
	  }
	  message.author.sendMessage(commands);
  }

}
