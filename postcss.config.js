module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-normalize')(/* pluginOptions */),
        require('postcss-preset-env')({stage: 0, autoprefixer: { grid: true}}),
        require('cssnano')({
            preset: 'default',
        }),
    ]
}