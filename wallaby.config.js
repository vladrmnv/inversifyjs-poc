module.exports = function() {
  return {
    files: ['**/*.ts', '!coverage', '!**/*.test.ts'],
    tests: ['**/tests/**/*.test.ts'],
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    bootstrap: function(w) {
      require('reflect-metadata');
      const mocha = w.testFramework;
      mocha.slow(10);
      mocha.timeout(50);
      console.log(w.testFramework);
    }
  };
};
