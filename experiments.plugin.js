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
		let wpRequire;
		window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);
		let mod = Object.values(wpRequire.c).find(x => typeof x?.exports?.Z?.isDeveloper !== "undefined");
		let usermod = Object.values(wpRequire.c).find(x => x?.exports?.default?.getUsers)
		let nodes = Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes)
		try {
		    nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user: {flags: 1}})
		} catch (e) {}
		let oldGetUser = usermod.exports.default.__proto__.getCurrentUser;
		usermod.exports.default.__proto__.getCurrentUser = () => ({hasFlag: () => true})
		nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]()
		usermod.exports.default.__proto__.getCurrentUser = oldGetUser
	}
 
 	stop() {}
};
