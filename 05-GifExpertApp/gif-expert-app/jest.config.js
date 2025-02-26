export default {
    testEnvironment: 'jsdom',
    setupFiles: ['./jest.setup.js'],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    }  
}