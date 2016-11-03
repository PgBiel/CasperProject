// Modules (Plugins / Commands)

var MODULE_HELP = require('../Mods/HELP.js'); // Help Command
var MODULE_PING = require('../Mods/PING.js'); // Ping Command

// Variables
var ConfigBooter = require('./config.json'); // Config Module
var IdentParser = require('./Sys_Mods/id.js'); // Reload Module
var BotInst = null; // Saved Bot Instance

module.exports = {
  set: function(BotPass) { // RECOMMEND: No edit
    BotInst = BotPass;
    BotInst.login(ConfigBooter.token);
  },

  setMessage: function() { // RECOMMEND: edit
    BotInst.on("message", msg => {
	  try {
		  let command = msg.content.split(" ")[0].slice(ConfigBooter.prefix.length);
		  let params = msg.content.split(" ").slice(1);
		  
		  // Help
		  if(command == "help") {
			  MODULE_HELP.execute(msg);
		  }
		  
		  // Ping
		  if(command == "ping") {
			  MODULE_PING.execute(msg);
		  }
		  
	  } catch(error) { console.error(error.message); }
    });
  },

  setReady: function() { // RECOMMEND: optional edit
    BotInst.on("ready", () => {
      BotInst.user.setGame("Try " + ConfigBooter.prefix + "help :D");
      console.log('[Sys] Online! Bootup Complete.');
    });
  }

}
