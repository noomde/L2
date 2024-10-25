export default {
    testEnvironment: 'node',
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    moduleFileExtensions: ["js", "json"],
    transformIgnorePatterns: ["/node_modules/"],
}