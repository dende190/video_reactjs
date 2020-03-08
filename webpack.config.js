const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js', //Entrada del proyecto
	output: { //Guardar archivos resultantes al hacer la compilacion
		path: path.resolve(__dirname, 'dist'), //Ubicacion dle dir donde se guardaran los archivos
		filename: 'bundle.js', //Nombre del archivo principal
	},
	resolve: { //Resolver las extensiones que se usaran en el proyecto
		extensions: ['.js', '.jsx']
	},
	module: { //Reglas necesarias para nuestro proyecto
		rules: [
			{ //Identificacion de los archivos JS y JSX
				test: /\.(js|jsx)$/,
				exclude: /node_modules/, //Excluir esta carpeta
				use: { //Usar el load de babel
					loader: "babel-loader"	
				}
			},
			{ //Identificacion de los archivos HTML
				test: /\.html$/,
				use: [
					{ //Usar el load de babel
						loader: "html-loader"	
					}
				]
			},
			{ //Identificacion de los archivos CSS
				test: /\.(s*)css$/,
				use: [
					{ //Usar el load de babel
						loader: MiniCssExtractPlugin.loader

					},
					"css-loader",
					"sass-loader"
				]
			},
			{ //Identificacion de los archivos MEDIA
				test: /\.(png|gif|jpg)$/,
				use: [
					{
						'loader': 'file-loader',
						options: { //Como se guardaran los archivos MEDIA
							name: 'assets/[hash].[ext]' //[hash] = variable, su nombre sera un hassh [ext] = variable que trae la extension del MEDIA
						}
					}
				]
			}
		]
	},
	plugins: [ //Anadir los plugins que se necesiten
		new HtmlWebPackPlugin({
			template: "./public/index.html", //Donde esta ubicado nuestro template
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "assets/[name].css", // [name] = varialbe
		})
	]
}