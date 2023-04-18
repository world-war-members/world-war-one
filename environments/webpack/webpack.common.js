const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	entry: [path.resolve(__dirname, "../../src/main.tsx")],
	devtool: "cheap-module-source-map",
	output: {
		clean: true,
		assetModuleFilename: "static/[hash][ext][query]",
		filename: "[name].[chunkhash].js",
		chunkFilename: "[name].[chunkhash].chunk.js",
		publicPath: "/"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: require("./webpack.rules"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			favicon: "./src/favicon.ico",
			inject: true
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[chunkhash].css",
			chunkFilename: "[name].[chunkhash].chunk.css"
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: "static",
			openAnalyzer: false,
			generateStatsFile: false
		})
	]
};