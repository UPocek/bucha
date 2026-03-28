import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import globals from 'globals';

export default [
    ...nextCoreWebVitals,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/no-multi-comp': 'warn',
            'react/jsx-pascal-case': 'warn',
            'react/jsx-closing-bracket-location': 'warn',
            'react/jsx-closing-tag-location': 'warn',
            'react/jsx-tag-spacing': 'warn',
            'react/jsx-curly-spacing': 'warn',
            'react/jsx-wrap-multilines': 'warn',
            'react/self-closing-comp': 'warn',
            'no-unused-vars': [
                'warn',
                {
                    varsIgnorePattern: '_.*',
                    argsIgnorePattern: '^_',
                },
            ],
            'jsx-quotes': ['warn', 'prefer-double'],
            'no-multi-spaces': 'warn',
        },
    },
];
