const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');



module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css')
   
    return {
        entry: './public/src/app.js',
        output:{
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /nodu_modules/
            }, {
                test: /\.s?css$/,
                exclude: /nodu_modules/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }

                        }
                        
                        
                    ]
                })
            }]
        },
        plugins: [CSSExtract],

       
        devtool:  isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
        
    };
    
}

