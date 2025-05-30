const { defineConfig } = require('@rspack/cli');
const ReactRefreshPlugin = require('@rspack/plugin-react-refresh');

module.exports = defineConfig({
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                  development: true,
                  refresh: true,
                },
              },
            },
          },
        },
      },
    ],
  },
  plugins: [new ReactRefreshPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});