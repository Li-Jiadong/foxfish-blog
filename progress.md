# blog开发进度

## 构想：

主题：东方project

作用：用于写开发日记，记笔记等等

布局：使用bootstrap（暂时使用联网版）进行布局，实现pc端以及移动端（平板暂时不考虑）



1月21日：完成布局，头图

liststyle 调整列表属性

#66ccff 天依蓝

```
document.body.clientWidth ==> BODY对象宽度  
document.body.clientHeight ==> BODY对象高度  
document.documentElement.clientWidth ==> 可见区域宽度  
document.documentElement.clientHeight ==> 可见区域高度  
  
网页可见区域宽： document.body.clientWidth  
网页可见区域高： document.body.clientHeight  
网页可见区域宽： document.body.offsetWidth (包括边线的宽)  
网页可见区域高： document.body.offsetHeight (包括边线的高)  
网页正文全文宽： document.body.scrollWidth  
网页正文全文高： document.body.scrollHeight  
网页被卷去的高： document.body.scrollTop  
网页被卷去的左： document.body.scrollLeft  
网页正文部分上： window.screenTop  
网页正文部分左： window.screenLeft  
屏幕分辨率的高： window.screen.height  
屏幕分辨率的宽： window.screen.width  
屏幕可用工作区高度： window.screen.availHeight  
屏幕可用工作区宽度： window.screen.availWidth  
```

overflow 可取消滑块

## JavaScript 计时事件

通过使用 JavaScript，我们有能力做到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件。

在 JavaScritp 中使用计时事件是很容易的，两个关键方法是:

- setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
- setTimeout() - 在指定的毫秒数后执行指定代码。

**注意:** setInterval() 和 setTimeout() 是 HTML DOM Window对象的两个方法。