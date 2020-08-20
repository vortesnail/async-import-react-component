const isRollupBundle = process.env.ROLLUP_ENV === 'bundle'

module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      !isRollupBundle && [
        '@babel/plugin-transform-runtime',
        {
          corejs: {
            version: 3,
            proposals: true,
          },
          useESModules: true,
        },
      ],
      isRollupBundle && '@babel/plugin-proposal-class-properties',
    ].filter(Boolean),
  }
}
