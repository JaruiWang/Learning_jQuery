## 学习目标
- 能够说出4种常见的注册事件
- 能够说出on绑定事件的优势
- 能够说出jQuery事件委派的优点以及方式
- 能够说出绑定事件与解绑事件

## 用on绑定1个或多个事件
```js
    // 单一事件的注册
    $('div').click(function(){
        $(this).css('background','red');
    })
    $('div').mouseenter(function(){
        $(this).css('background','skyblue');
    })

    // 用on注册1个事件
    $('div').on('click',function(){
    alert(11);
    })
    
    // 用on注册多个事件
    $('div').on({
        mouseenter:function(){
            $(this).css('background','red');
        },
        click:function(){
            $(this).css('background','purple');
        },
        mouseleave:function(){
            $(this).css('background','blue');
        }
    })

    //多个事件调用相同的函数
    $('div').on('mouseenter mouseleave',function(){
        $(this).toggleClass('current');
    })
```

### on()方法优势2
可以做事件委派操作，事件委派的定义就是，把原来的加给子元素身上的事件绑定在父元素身上，就是把事件委托给父元素。
```js
    // (2)on可以实现事件委派
    // 事件绑定的是父元素ul，点击的是子元素li
    $('ul').on('click','li',function(){
        alert(11);
    })

    // (3) on可以给未来动态创建的元素绑定事件
    //用传统的$('ol li').click()无法给动态创建的元素绑定事件
    // $('ol li').click(function(){
    //     alert(234567);
    // })
    $('ol').on('click','li',function(){
        alert(23);
    })
    var li=$('<li>我是后来创建的</li>');
    $('ol').append(li);

```

## off()解绑事件
off()解绑事件
```js
    //(1)解绑了div身上的所有事件
    $('div').off(); 
    //(2)只是解绑div身上的click事件
    $('div').off('click'); 
    //(3)解绑事件委托
    $('ul').off('click','li');
```

## one()绑定只能触发一次的事件
one()绑定只能触发一次的事件
```js
    // 2. one() 绑定只能触发一次的事件
    $('p').one('click',function(){
        alert(12);
    })
```

## 自动触发事件
通过代码中直接调用来触发事件。
```js
    $('div').on('click',function(){
        alert(11);
    })

    $('input').on('focus',function(){
        $(this).val("你好吗");
    })
    // 自动触发事件
    // 1. 元素.事件()
    $('div').click();

    // 2.元素.trigger('事件')
    $('div').trigger('click');
    $('input').trigger('focus');

    // 3.元素.triggerHandler('事件')不会触发元素的默认行为
    $('input').triggerHandler('focus');
```