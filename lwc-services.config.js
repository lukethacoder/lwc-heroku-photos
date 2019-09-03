module.exports = {
    resources: [{ from: 'src/resources', to: 'dist/resources' }],
    devServer: {
        port: 3001,
        host: 'localhost',
        open: false,
        stats: 'errors-only',
        noInfo: true,
        contentBase: './src/modules',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        }
    }
};
