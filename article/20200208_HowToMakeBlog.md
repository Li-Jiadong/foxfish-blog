# 如何建立个人博客

<span>2020/02/08</span>

## 1. 需要准备的工具

- 一台电脑（能亮即可）
- 顺手的键盘鼠标
- 听着舒适的音乐
- 水、咖啡、绿茶均可
- 一个浏览器（chrome或Firefox）
- 一个代码编辑器（vscode等等）
- 一个本地服务器用于测试（wampserver就很不错，包含了PHP以及MySQL）
- 一个markdown文本编辑器（Typora就很不错）
- 一堆可能用到的框架源码（bootstrap vue vant等等） 

## 2. 需要学习的知识

1. HTML 不然网页怎么写？
2. CSS  不然网页太死板
3. JavaScript 不然没法写通信，没法写网页特效
4. Bootstrap 用于支持移动端，你一定不想在手机上打开电脑页面
5. Vue 一个不错的框架，数据导入非常方便，比原生js方便多了
6. json 或xml 用于通信的数据格式，推荐json
7. ajax 基于JavaScript，用于数据通信
8. PHP 后端脚本语言，用于处理前段发送的数据
9. markdown标记语言，写笔记写博客很有帮助
10. 杂七杂八的多媒体技术，如图片，视频压缩，你一定不想看到一个视频或图片加载半天 

 \*选学 vant 基于Vue的移动端组件集合，可以让你的页面更漂亮  

  推荐一个学习网站 [菜鸟教程](https://www.runoob.com)

 胡扯结束了，那就正式开始了(～￣▽￣)～

## 3.HTML CSS部分

这个部分重在吧一些基础的标签熟练运用就行，还有CSS的基本语法，一些标签的属性等  

学习内容不难，但推荐多熟悉网页的写法，尝试模仿一下一些著名网站的格式，用纯html和CSS写出来。这个过程是非常繁琐的，尤其是还没用到像BootStrap这类方便的框架。  

小贴士：可以在chrome或Firefox浏览器中使用F12审查元素，可以看到页面中元素的属性等等（当然初学者可能觉得眼花缭乱，习惯就好）  

## 4.BootStrap部分

学js之前可以先学BootStrap，它基于css和js，但几乎用不到js的内容，可放心食用。学习内容中网格系统是重中之重，一定要理解并熟练应用，学会之后你会发现排版变得容易起来  

bootstrap需要用到三个外部文件，可以用如下方式引入  


```html
<!-- 新 Bootstrap 核心 CSS 文件 --> 
<link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>  
<!-- 最新的 Bootstrap 核心 JavaScript 文件 --> 
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
```

也别忘了适配移动端的元素放大，加入以下代码  

```html
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
```

## 4.JavaScript部分  

这部分可能是比较困难的部分，但这是我个人最喜欢的部分，这部分发挥的空间相当大，可以稿许多骚操作。当然如果你之前学过c/c++等语言，这个语言相信你只要扫一遍文档就会了。  

JavaScript中dom部分最为重要，需要认真学习，这个牵扯到以后的绝大多数操作。

小贴士：浏览器中F12可以查看js代码的报错，对于查错找bug非常有用  

## 5.Vue部分  

Vue基于JavaScript，一定在JavaScript基础大牢固之后学习Vue，Vue的插值功能非常有用，可以非常方便地对页面内容进行更改，而与此相比，JavaScript需要更多的代码来实现，更复杂。这也意味着要学好Vue改变页面内容和属性的方式。  

Vue的导入可用以下代码  

```html
<script src="https://cdn.staticfile.org/vue/2.4.2/vue.min.js"></script>
```

## 6.Ajax，json与xml部分  

这部分主要是通信，既客户端与服务器进行通信。ajax是一种通信的方法，基于http协议。而json与xml是通信过程中传输的文件格式，两种格式都可以表示数据的组成结构，而且占用空间较少，利于传输。二者相比，json占用的空间相对更少，故推荐优先学习json，而且原生JavaScript支持json文件的解析  

尔后是ajax，ajax内容较少，在有JavaScript基础的情况下只要简单了解一下http协议以及ajax的一些方法就能很好地掌握ajax，另外，ajax需要服务器才能工作，这就意味着需要在本地搭建一个服务器来模拟并测试ajax的信息传输。这里可以下载并安装wampserver，或利用node.js编写有文件传输功能的建议服务器（由于一些操作需要读文件，而js由于安全问题不能直接读文件，需要向服务器请求，这就需要自己写的服务器有读文件的能力），当然还可以用线上的easymock来测试传输代码，亦可以通过easymock制作简单的json数据，知识easymock经常断线，这时就需要mock.js  

总之，以上的服务器方案选择一个自己喜欢的就好，当然推荐学习node.js或mock.js熟悉服务器的工作原理。  

## 7.PHP部分  

由于个人主要学习前端较多，对PHP不甚了解，但仅仅搭建个人博客来说只学习一下基本语法以及数值通过url传递的方式就已经够用，得到传入数值后剩下部分用js实现就好，相当于php仅仅作为一个传值工具。但是我们为什么要向html页面传值呢？我们的博客一定不止一个页面，而且博客还要进行不断更新，扩展内容。假如我们每次发表新博客是都需要写一个html文件岂不太麻烦，而且需要手动设置地址。那为什么不吧博客写到一个文件里，打开一个页面时让它去读入文件的内容再进行显示不就行了吗？可是html怎么知道你需要的是哪一个文件，这就需要点击\<a\>标签时url中要加入需要打开的文件的代号或地址，从而得到准确的文件，可谓一劳永逸。  

浏览器不带有PHP的解释工具，PHP解释器需要在服务器上安装并通过服务器执行，而上个部分提到的wampserver带有php解释器，淡然也可以自己手动安装php支持。  

## 8.markdown部分  

上一个部分提到将博客写到一个特定的文件内，让html得到文件并进行解析，显示。这种文件格式要能包含不同级别的标题，段落，代码行，表格，图片甚至视频音频等内容，markdown就是一个不错的文件格式，而且有js解析工具。当然也可以自己利用json搞一个数据格式，自己定义一些更高级的表达形式。  

## 9.动手部分  

终于到这个部分了！  

