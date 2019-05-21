module.exports = {
  preset: 'react-native',
  snapshotSerializers: [
    "./node_modules/enzyme-to-json/serializer"
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!native-base)/"
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ["./test.setup.js"] 
}
