import { defineConfig } from 'cypress';
import { devServer } from 'cypress-rspack-dev-server';

export default defineConfig({
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: 'react',
        rspackConfig: require('./rspack.config.js'),
      });
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },
});