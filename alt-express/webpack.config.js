module.exports = {
    entry: "./app/app.js",
    output: {
        path: "lib",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['jsx', 'babel'], // <-- changed line
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loaders: ['babel'], // <-- changed line
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
