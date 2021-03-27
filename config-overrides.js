/* config-overrides.js */

module.exports = {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-optional-chaining'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  },
}
