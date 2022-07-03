module.exports = {
  plugins: [
    [
      `module-resolver`,
      {
        alias: {
          '@lib': `./src/lib`,
        },
      },
    ],
  ],
};
