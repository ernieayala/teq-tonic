var teq = require("./index");

module.exports = function(eyeglass, sass) {
	return {
		sassDir: teq.includePaths[0]
	};
};
