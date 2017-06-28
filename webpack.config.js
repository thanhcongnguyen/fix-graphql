var path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader:'babel-loader',
                query:{
                    presets:['react', 'es2015', 'stage-0']// cai dat de doc dc syntax JSX trong ReactJS, syntax es2015
                },
                test:/\.js?$/,
                exclude: [/node_modules/, /bower_components/] //doc file js ngoai tru file js trong thu muc node_modules
            }
        ]
    }
}