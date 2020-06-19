var webpack          = require('webpack');
const path           = require('path');

module.exports = {
    mode: 'development',
    output     : {
        path   : path.resolve(__dirname, 'public', 'js')
    },
    entry      : {
        'app' : './src/js/app.js',
        'tasks' : './src/js/tasks.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]

    },
    resolve: {
        alias:{
            'dropdown': path.resolve(__dirname, 'src', 'js', 'widgets', 'dropdown.js'),
            'navbar': path.resolve(__dirname, 'src', 'js', 'widgets', 'navbar.js'),
            'causelist': path.resolve(__dirname, 'src', 'js', 'widgets', 'causelist.js'),
            'quickview': path.resolve(__dirname, 'src', 'js', 'widgets', 'quickview.js'),
            'extension': path.resolve(__dirname, 'src', 'js', 'widgets', 'extension.js'),
            'quicknote': path.resolve(__dirname, 'src', 'js', 'widgets', 'quicknote.js'),
            'footer': path.resolve(__dirname, 'src', 'js', 'widgets', 'footer.js'),
            'topbanner': path.resolve(__dirname, 'src', 'js', 'widgets', 'topbanner.js'),

            'accordion': path.resolve(__dirname, 'src', 'js', 'widgets', 'accordion.js'),
            'tictactoe': path.resolve(__dirname, 'src', 'js', 'widgets', 'tictactoe.js'),
            'sudoku': path.resolve(__dirname, 'src', 'js', 'widgets', 'sudoku.js'),
        }
    }
};