module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "react-native-reanimated/plugin"
        ],
        env: {
            test: {
				presets: [
					"babel-preset-expo",
					"@babel/preset-env",
					"@babel/preset-react",
					"@babel/preset-flow"
				  ],
                plugins: [
                    "@babel/plugin-transform-modules-commonjs",
                    "react-native-reanimated/plugin",
                    ["@babel/plugin-transform-class-properties", { "loose": true }],
                    ["@babel/plugin-transform-private-methods", { "loose": true }],
                    ["@babel/plugin-transform-private-property-in-object", { "loose": true }]
                ]
            }
        }
    };
};
