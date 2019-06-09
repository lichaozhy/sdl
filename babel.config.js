module.exports = function (api) {
	api.cache(false);

	return {
		presets: [
			['@babel/preset-env', {
				loose: true,
				targets: {
					browsers: ['ie 6-8']
				}
			}]
		],
	};
};