module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true, 
    },
    extends: ['react-app', 'react-app/jest'],
    globals: {
        $: true,
        _: true,
        React: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        }
    },
    plugins: ['react'],
    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        "no-var": "warn",
        "key-spacing": ["off", { "beforeColon": false, "afterColon": true }],
        "no-constant-condition": "off",
        "complexity": [
            "error",
            {
                "max": 20
            }
        ]
    },
    ignorePatterns: ['src/', 'mock/'],
}