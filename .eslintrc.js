module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/essential',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: '@typescript-eslint/parser',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        indent: ['error', 4],
    },
}
