// main.js 是 Vue.js 应用程序的入口文件。
// 在这个文件中，你可以创建一个 Vue 实例，
// 并加载其他的插件或组件。在 main.js 中，
// 你可以执行一些初始化的操作，比如设置路由、
// 设置全局的 CSS 样式或者添加全局的自定义指令等等。main.js 中的代码会在 Vue 应用程序启动时执行。
// 同时，main.js 也是 webpack 打包时的入口文件，
// webpack 会根据 main.js 的依赖关系构建出整个应用的依赖树，并生成对应的代码 bundle 文件
import App from "./App.Vue";
import {createApp} from "../js/vue.global.js";

const app = createApp(App);
// app.config.errorHandler = (err) => {
//     console.error("an error occurred"+err)
// }
app.mount("#error")