/* eslint-env node */
module.exports = {
    root: true,
    "extends": [
        "plugin:vue/vue3-essential"
    ],
    rules: {
        "quotes": [1, "double"],
        "indent": [1, 4],
        "semi": [1, "always"],
        "vue/html-indent": [1, 4],
        "vue/script-indent": [1, 4],
    },
    parserOptions: {
        ecmaVersion: "latest"
    }
};
