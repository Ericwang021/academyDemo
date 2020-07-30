const path = require("path");
const { default: build } = require("next/dist/build");

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	DestDir: build,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: ["@svgr/webpack"],
		});
		return config;
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
};
