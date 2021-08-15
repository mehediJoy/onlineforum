module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://csforumapi.herokuapp.com',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/'}
            }
        }
    }
}