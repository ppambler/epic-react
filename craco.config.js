const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  babel: {
    //用来支持装饰器
    plugins: [
      // AntDesign 按需加载
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true,
        },
        "antd",
      ],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, "antd.customize.less"),
      },
    },
  ],
};
