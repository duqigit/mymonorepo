import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'antd',
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'component', dir: 'packages/ginza-button/src' },
      { type: 'component', dir: 'packages/ginza-modal/src' },
    ],
  },
  alias: {
    '@ginza/button': '/Users/duqi/Desktop/project/mymonorepo/packages/ginza-button/src',
    '@ginza/modal': '/Users/duqi/Desktop/project/mymonorepo/packages/ginza-modal/src',
  },
});
