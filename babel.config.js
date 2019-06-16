module.exports = function (api) {
	api.cache(false);

	return {
		presets: [
			['@babel/env', {
				loose: true,
				targets: {
					browsers: ['ie 8-11']
				}
			}]
		],
	};
};