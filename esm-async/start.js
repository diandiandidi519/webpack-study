const webpack = require("webpack");

webpack({
  entry: "./src/index.js",
  mode: "none",
  infrastructureLogging: {
    debug: true,
    level: "log",
  },
}).run((err, stats) => {
  // 如果运行时报错输出报错
  if (err) {
    // console.error(err);
  } else {
    // stats webpack内置的编译信息对象
    // console.log(stats);
  }
});
