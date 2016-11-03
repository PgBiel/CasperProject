// MODULE DETAILS
// :: NAME - Reload Execution
// :: DESC - Reloads CasperBot Modueles
// :: AUTHOR - sammyvsparks
// :: FUNCTIONS: execute()

// Removes Module
function removeModule(module){
    delete require.cache[require.resolve(module)]
    return require(module)
}

module.exports = {

  execute: function(module_path) {
	  removeModule(module_path);
	  return require(module_path);
  }

}
