const Identity = "CasperBot"; // Bot... Idenity... Self Explainitory?

// Major Modules (DO NOT LOAD COMMANDS OR PLUGINS HERE)
const BootStrapper = require('./BootStrap/Booter.js'); // BootLoader

// Discord Modules
const Library = require('discord.js'); // Discord... Duh...
const Instance = new Library.Client(); // DiscordBot Client

// Setup
try {
  BootStrapper.set(Instance);
  BootStrapper.setReady(Instance);
  BootStrapper.setMessage(Instance);
} catch (exception) {
  console.error("Exception Thrown: " + exception.message);
}
