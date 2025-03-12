class TestPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tap("TestPlugin", (compilation) => {
      debugger
      console.log("TestPlugin emit");
      console.log(compilation);
    });
  }
}

module.exports = TestPlugin;
