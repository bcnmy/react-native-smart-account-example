/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  resolver: {
    extraNodeModules: {
      assert: require.resolve('assert/'),
      stream: require.resolve('stream-browserify'),
      querystring: require.resolve('querystring-es3'),
      net: require.resolve('net'),
      tls: require.resolve('tls'),
      crypto: require.resolve('react-native-crypto'),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
