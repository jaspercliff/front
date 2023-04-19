# css
## 样式选择器

1. 标签选择器（Tag Selector）：通过HTML元素的标签名来选择元素。
例如：`p { color: blue; }` 将会应用蓝色文本颜色到所有的段落元素。
2. ID选择器（ID Selector）：通过元素的ID属性来选择元素。
例如：`#header { font-size: 24px; }` 将会设置ID为“header”的元素的字体大小为24像素。
3. 类选择器（Class Selector）：通过元素的class属性来选择元素。
例如：`.highlight { background-color: yellow; }` 将会给所有的class属性为“highlight”的元素设置黄色背景色。
4. 属性选择器（Attribute Selector）：通过元素的属性来选择元素。
例如：`a[target="_blank"] { color: red; }` 将会将所有的链接元素中带有target="_blank"属性的文本颜色设置为红色。
5. 伪类选择器（Pseudo-class Selector）：通过元素的特殊状态来选择元素。
例如：`a:hover { color: blue; }` 将会将所有鼠标悬停在链接上的文本颜色设置为蓝色。
6. 组合选择器（Combinators）：通过组合不同的选择器来选择元素。
例如： 例如：'div p { 颜色： 绿色`div p { color: green; }` 将会将所有段落元素嵌套在div元素中的文本颜色设置为绿色。

7. 除了上述选择器之外，还有其他类型的选择器，例如子选择器、相邻兄弟选择器、通用选择器等，这些选择器可以用于更精细地控制样式应用的元素。