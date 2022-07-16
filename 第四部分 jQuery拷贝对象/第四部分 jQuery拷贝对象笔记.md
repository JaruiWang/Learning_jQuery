## extend对象拷贝
如果想把某个对象拷贝给另一个对象使用，此时可以使用$.extend()方法
- $.extend([deep],target,object1);
deep:如果是true就是深拷贝，false就是浅拷贝；
target:要拷贝的目标对象；
object1：代拷贝的第一个对象。
```js
    var targetObj={};
    var obj={
        id:1,
        name:'andy'
    }

    $.extend(targetObj,obj);
    console.log(targetObj);

```
## 多库共存
jQuery使用$符号作为标识符，随着jQuery的流行，其他js库也会用这样的$作为标识符，这样一起使用会引起冲突。
多库共存就是需要一个解决方案，让jQuery和其他js库不存在冲突，可以同时存在。
解决方案：
1. 如果$符号冲突，我们就使用jQuery，例如jQuery.each();

2. 让jQuery释放$ 的控制权，让用户自己决定
var suibian=$.noConflict();
suibian就可以代替$来使用了。
```js
    // function $(ele){
    //     return document.querySelector(ele);
    // }
    console.log($('div'));
    jQuery.each();

    var suibian=$.noConflict();
    console.log(suibian('span'));
```
