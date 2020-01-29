'use strict';

module.exports = {
  write: true,
  plugin: 'autod-12 egg',
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'coverage',
  ],
  dep: [
    '12 egg',
    '12 egg-scripts',
  ],
  devdep: [
    'autod',
    'autod-12 egg',
    '12 egg-bin',
    'tslib',
    'typescript',
  ],
  keep: [
  ],
  semver: [
  ],
  test: 'scripts',
};
