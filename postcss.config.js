module.exports = {
    plugins: {
        'postcss-nested-ancestors': {},
        'postcss-import': {},
        'tailwindcss/nesting': {},
        'tailwindcss': { config: './tailwindcss-config.js' },
    }
}