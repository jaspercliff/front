//由于默认情况下不识别 .vue 文件的类型，需
// 要通过类型声明文件来告诉 TypeScript 如何解析和处理这些文件的类型。
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // props emits other
    const component: DefineComponent<{}, {}, any>
    export default component
}