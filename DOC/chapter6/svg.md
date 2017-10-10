<style>
h2 {
    color: #800000;
}

</style>


# svg.js

[avg.js文档](http://svgjs.com/)

## SVG.get() 根据id获取元素
```js
var draw = SVG('svg1').size(300, 300);
var circle = draw.circle(50);
circle.fill('red').move(10, 10);
//添加类
circle.addClass('circle');
//设置ID
circle.id('circle');
//SVG.get() 获取Element对象
var circle2 = SVG.get('circle');
console.info(circle2);
circle2.stroke({
    color: 'blue',
    width: 2
});
```

## SVG.select（）/element.select()  根据CSS选择器获取

```js
var draw = SVG('svg1').size(300, 300);
//SVG.select() 根据类名获取元素
//element.select()
var ellipse = draw.ellipse(100, 50);
ellipse.fill('blue');
ellipse.addClass('my-class'); // 添加class
var rect = draw.rect(100, 100);
rect.move(100, 100);
rect.addClass('my-class');
//var elements = SVG.select('.my-class'); // 获取对象
var elements = SVG.select('rect.my-class');
elements.fill('#f06');

var group1 = draw.group();
var txt1 = draw.text(function (add) {
    add.tspan('第一行').addClass('words').newLine();
    add.tspan('第二行').addClass('words').newLine();
});
txt1.move(50, 50);
group1.add(txt1);
//这个方法可以使用
group1.select('.words').fill('green');
//这个方法好像已经不可以使用了
//SVG.select('.words', group1).fill('green');
```

## SVG 节点对象获取

```js
var draw = SVG('svg1').size(300, 300);
//Circular references基础节点获取，
var ellipse = draw.ellipse(100, 80);
ellipse.fill('#06f');
//element.node 获取SVGElement
console.info(ellipse.node); //<ellipse id="SvgjsEllipse1008" rx="40" ry="50" cx="90" cy="100" fill="#0066ff"></ellipse>
//element.native() 获取element.node
var node = ellipse.native();
console.info(node);
//node.instance 获取SVG.Element
var elli2 = node.instance;
elli2.size(80, 100).move(50, 50);

console.log(ellipse.node.nodeName) // 节点名称　ellipse
```

## SVG 根节点下的子节点获取

```js
var draw = SVG('svg1').size(300, 300);
//SVG根节点下的子节点操作 Child references
//draw.children() 获取所有子节点
var ellipse = draw.ellipse(200, 150).move(50, 50).fill('#f06');
var rect = draw.rect(50, 50);
var children = draw.children();
//draw.clear() 清空子节点
draw.clear();
//draw.each() 遍历子节点
draw.each(function (i, children) {
    console.info(i); //当前索引
    console.info(children) //当前children引用
    this.fill('green');
});
//draw.first()/draw.last() 获取第一个和最后一个
draw.first().stroke({ width: 2 });
draw.last().fill('green');
//draw.get() //获取指定索引的节点对象
var second = draw.get(1).stroke({ width: 2, color: 'yellow' })
//draw.index() //获取指定对象的索引 defs元素
var index = draw.index(second);
console.info(index); //1 ,特别说明，第一个元素是
//draw.has() //判断是否含有指定对象的元素
console.info(draw.has(second)); //true
```

## SVG 子节点获取根节点

```js
var draw = SVG('svg1').size(300, 300);
//SVG子节点获取父节点引用 Parent references
//element.doc() 获取draw SVG根节点
var nested = draw.nested().addClass('test');
var group = nested.group();
var rect = draw.rect(100, 100).fill('#f09');
group.add(rect);
var doc = rect.doc().ellipse(50, 100).move(50, 50);
//element.parent() 获取父节点或筛选父节点
rect.parent()           //-> returns group
rect.parent(SVG.Doc)    //-> returns draw
rect.parent(SVG.Nested) //-> returns nested
rect.parent(SVG.G)      //-> returns group
rect.parent('.test')    //-> returns nested
//element.parents() 获取父节点数据或者筛选父节点，返回group数组
var group1 = draw.group().addClass('test')
    , group2 = group1.group()
    , rect = group2.rect(100, 100)

rect.parents()        // returns [group1, group2, draw]
rect.parents('.test') // returns [group1]
rect.parents(SVG.G)   // returns [group1, group2]
```

## SVG 属性引用获取

```js
//SVG URI references
//如果一个元素是通过属性链接到另一个元素，链接元素的实例可以拿来与reference()方法。
use.reference('href') //-> returns used element instance
// or
rect.reference('fill') //-> returns gradient or pattern instance for example
// or
circle.reference('clip-path') //-> returns clip instance
```