/**
 * @name discordExperiments
 * @description Enables the experiments tab in discord's settings.
 * @author Guacaplushy
 * @version 1.0.0
 * @website https://github.com/plooshi/BDExperiments
 * @source https://raw.githubusercontent.com/plooshi/BDExperiments/master/experiments.plugin.js
 * @updateUrl https://raw.githubusercontent.com/plooshi/BDExperiments/master/experiments.plugin.js
*/

module.exports = class {
	getName() { return "Experiments"; }
 
	start() {
		var cache;
		webpackChunkdiscord_app.push([["wp_isdev_patch"], {}, r => cache = Object.values(r.c)]);
		var userStore = cache.find(m => m?.exports?.default?.getCurrentUser).exports.default;
		var actions = userStore._dispatcher._actionHandlers._orderedActionHandlers["CONNECTION_OPEN"];
		var user = userStore.getCurrentUser();
		actions.find(n => n.name === "ExperimentStore").actionHandler({
			type: "CONNECTION_OPEN", 
			user: { flags: user.flags |= 1 }, 
			experiments: [],
		});
		actions.find(n => n.name === "DeveloperExperimentStore").actionHandler();
		webpackChunkdiscord_app.pop(); 
	  user.flags &= ~1;
	}
 
  stop() {		
		// doesn't work
	}
};
