// webpack.config.js

// Import the HtmlWebpackPlugin plugin which will help handle HTML files.
const path = require('path');  // Node.js module to work with file and directory paths.
const HtmlWebpackPlugin = require('html-webpack-plugin');  // Plugin to generate an HTML file in the dist directory.

// Export the configuration object for Webpack.
module.exports = {
    // Define the entry point for the dependency graph.
    entry: './src/index.js',  // Starting point for Webpack to build the dependency graph.
    
    // Specify the output options.
    output: {
        filename: 'bundle.js',  // Name of the output file.
        path: path.resolve(__dirname, 'dist'),  // Directory for the output file.
    },
    
    // Define rules for how different types of modules will be treated.
    module: {
        rules: [
            {
                test: /\.css$/i,  // Regex to test for .css files.
                use: ['style-loader', 'css-loader'],  // Loaders to handle CSS files.
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Regex to test for image files.
                type: 'asset/resource',  // Handle image files as separate assets.
            },
        ],
    },
    
    // Add plugins to extend Webpack's capabilities.
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',  // Path to the HTML template file.
        }),
    ],
    
    // Set the mode to development for better debugging.
    mode: 'development',  // Mode set to development to include useful tools for debugging.
    
    // Generate source maps for easier debugging.
    devtool: 'inline-source-map',  // Inline source maps to track errors in original files.
    
    // Configure the development server.
    devServer: {
        static: './dist',  // Directory to serve static files from.
        watchFiles: ['src/**/*.html'],  // Watch HTML files for changes to reload automatically.
    },
};
