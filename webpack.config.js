module.exports = {
  resolve: {
    fallback: {
      zlib: false,
      os: false,
      crypto: false,
      http: false,
      querystring: false,
      buffer: false,
      fs: false,
    },
  },
  resolve: {
    fallback: {
      async_hooks: false,
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
};
