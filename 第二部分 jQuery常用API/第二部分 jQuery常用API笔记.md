## jQuery基础选择器
$("选择器") ,里面选择器直接写css选择器即可，但是要加引号
名称        用法       描述
ID选择器    $("#id")  获取指定ID的元素
全选择器     $("*")   匹配所有的元素
类选择器      $(".class")  获取同一类class的元素
标签选择器    $("div")   获取同一类标签的所有元素
并集选择器    $("div,p,li")   选取多个元素
交集选择器   $("li.current")   交集元素

### jQuery层级选择器
子代选择器  $("ul>li"); 使用>号，获取亲儿子层级的元素
后代选择器  $("ul li"); 使用空格，获取ul以下的所有li元素，包括孙子层的元素。

### 筛选选择器 
语法       用法             描述
:first    $('li:first')    获取第一个li元素
:last     $('li:last')     获取最后一个li元素
:eq(index) $('li:eq(2)')   获取到的li元素中，选取索引号是2的元素，索引号从0开始
:odd       $('li:odd')     获取到的li元素中，选取索引号是奇数的元素。
:even       $('li:even')   获取到的li元素中，选取索引号是偶数的元素。


### jQuery筛选方法
语法                    用法              说明
parent()             $('li').parent()  查找父级
children(selector)   $('ul').children('li')  相当于 $('ul>li'),最近一级，亲儿子。
find(selector)       $('ul').find('li');     相当于 $('ul li'),后代选择器。
siblings(selector)   $('.first').siblings('li');   查找兄弟节点，不包括自己本身
nextAll()            $('.first').nextAll()         查找当前元素之后的所有同辈元素
prevAll()           $('.last').prevtAll()         查找当前元素之前的所有同辈元素
hasClass(class)      $('div).hasClass("protected") 检查当前的元素是否含有某个特定的类，如果有，则返回true。
eq(index)            $('li').eq(2);                相当于$('li:eq(2)')
```js
    // 选择第n个元素
    // （1）可以利用选择器的方式选择
    $("ul li:eq(3)").css('color','red');

    // (2) 我可以利用选择方法的方式选择，更推荐这种写法
    var index=1;
    $("ul li").eq(index).css('color','blue');

```

### 复选框的选择器 :checked
选择器 $('.jcheckbox:checked')返回有几个复选框被选中

## 隐式迭代
隐式迭代就是把匹配的所有元素在内部就自动进行遍历循环，给每一个元素添加css这个方法，而不用我们再进行循环遍历。
```js
    // 1.获取四个div元素
    console.log($("div"));

    // 2. 给四个div元素设置背景颜色为粉色 
    // 3. 隐式迭代就是把匹配的所有元素内部进行遍历循环，给每一个元素添加css这个方法，而不用我们再进行循环遍历。
    $("div").css("background","pink");


```
 
## jQuery的排他思想
```js
    // 1.隐式迭代，给所有的按钮都绑定了点击事件
    $('button').click(function(){
        //2.当前元素的背景颜色变化
        $(this).css('background','pink');
        //3.其余的兄弟去掉背景颜色
        $(this).siblings('button').css('background','');
    })

```

## 获取当前元素的索引号
```js
    // 获得当前小li的索引号
    var index=$(this).index();
```

## 链式编程
链式编程是为了节省代码量，看起来更优雅
```js
// 修改我的样式再修改我的兄弟的样式
$(this).css('background','pink').siblings('button').css('background','');
//修改我的兄弟的爸爸的样式
$(this).siblings('button').parent().css('background','')
```

## jQuery修改样式
### 普通方法修改样式
```js
    //获取属性值
    console.log($('div').css('width'));

    //设置属性值，必须使用引号，如果值是数字，可以不用使用单位和引号
    // 属性名和属性值用逗号分隔
    $('div').css('width',150);

    //设置多组属性值，参数可以是对象的形式
    // 属性名和属性值用冒号分隔
    // 属性名可以不加引号
    $('div').css({color:'white','font-size':30});
```

### 设置类样式方法
```js
    // 1.添加类 addClass()
    $('div').click(function(){
        // $(this).addClass("current");
    })

    // 2.删除类 removeClass
    $('div').click(function(){
        // $(this).removeClass("current");
    });
    
    // 3.切换类
    $('div').click(function(){
        $(this).toggleClass("current");
    });

```

## 显示函数show() 隐藏函数hide() 切换函数toggle()
show([speed,[easing],[fn]])
hide([speed,[easing],[fn]])
toggle([speed,[easing],[fn]])
参数都可以省略，无动画直接显示；
speed:三种预定速度之一的字符串"slow","normal","fast",或者动画时长的毫秒数。
```js
$('div').hide(7000); // 毫秒数不加引号
$('div').hide('slow'); // 加引号
 $('div').toggle(1000);
```
easing：用来指定切换效果，默认是swing，可用参数是linear
fn,回调函数，在动画完成时执行的函数，每个元素执行一次。

一般情况下，不加参数，直接显示和隐藏即可。

## 滑动切换效果 slideDown() slideUp() slideToggle()
slideDown([speed,[easing],[fn]])
slideUp([speed,[easing],[fn]])
slideToggle([speed,[easing],[fn]])
参数和用法和show()函数一样

### 事件切换
hover([over,]out)
(1) over:鼠标移动到元素上要触发的函数（相当于mouseenter）;
(2) out:鼠标移除元素要触发的函数(相当于mouseleave)
```js
    //hover([over,]out)第一个函数是鼠标经过的函数，第二个是离开
    $('.nav>li').hover(function(){
        $(this).children('ul').slideDown(900);
    },function(){
        $(this).children('ul').slideUp(200);
    })
    // 如果只有一个函数，则鼠标经过和离开都会触发
    $('.nav>li').hover(function(){
        $(this).children('ul').slideToggle();
    })
```

## 动画队列的停止stop()
动画效果一旦触发就会执行，如果多次触发，就造成多个动画排队执行。
使用stop()方法来停止
将stop()写在动画函数的前面，相当于停止结束上一次的动画。
```js
    $('.nav>li').hover(function(){
        $(this).children('ul').stop().slideToggle();
    })
```

## 淡入淡出效果
淡入效果 fadeIn([speed],[easing],[fn])
淡出效果 fadeOut([speed],[easing],[fn])
淡入弹出切换 fadeToggle([speed,[easing],[fn]])
修改透明度 fadeTo([[speed],opacity,[easing],[fn]])
参数和用法和show()函数一样

```js
// 修改透明度 fadeTo函数
$("p").fadeTo("slow", 0.66);
//用600毫秒缓慢的将段落的透明度调整到0.66，大约2/3的可见度

$("p").fadeTo("fast", 0.25, function(){
   alert("Animation Done.");
 });
 //用200毫秒快速将段落的透明度调整到0.25，大约1/4的可见度，之后弹出一个对话框
// 速度和透明度两个参数必须写
```

## 自定义动画animate
animate(params,[speed],[easing],[fn])
用于创建自定义动画的函数。
这个函数的关键在于指定动画形式及结果样式属性对象。这个对象中每个属性都表示一个可以变化的样式属性（如“height”、“top”或“opacity”）。注意：所有指定的属性必须用骆驼形式，比如用marginLeft代替margin-left.
params:一组包含作为动画属性和终值的样式属性和及其值的集合
params想要更改的样式属性，以对象的形式传递，必须写。
speed:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
easing:要使用的擦除效果的名称(需要插件支持).默认jQuery提供"linear" 和 "swing".
fn:在动画完成时执行的函数，每个元素执行一次。
```html
<button id="go"> Run</button>
<div id="block">Hello!</div>
```
```js
// 在一个动画中同时应用三种类型的效果
$("#go").click(function(){
  $("#block").animate({ 
    width: "90%",
    height: "100%", 
    fontSize: "10em", 
    borderWidth: 10
  }, 1000 );
});
```

## jQuery属性操作
### 5.1 设置或获取元素固有属性值prop()
所谓元素固有属性就是元素本身自带的属性，例如<a>元素里面的href，
比如<input>元素里面的type。
```js
    // 1.element.prop('属性名') 获取属性值
    console.log($('a').prop('href'));
    console.log($('a').prop('title'));
    // 2.element.prop('属性名','属性值') 设置属性值
    $('a').prop('title','we are ok');
```

### 设置或获取自定义属性 attr()

```js
    // 获取自定义属性
    console.log($('div').attr('index'));
    // 设置自定义属性
    $('div').attr('index',789);

```

## jQuery内容文本值
1. 获取和设置元素内容 html()
相当于原生的innerHTML
```js
    // 1.获取和设置元素内容 html()
    console.log($('div').html());  //获取元素的内容
    $('div').html('123');  //设置元素内容
```

2. 获取和设置元素文本的内容 text()
相当于原生的innertext
```js
    // 2.获取和设置元素文本的内容 text()
    console.log($('div').text());
    $('div').text(123456);
```
3. 获取和设置表单值 val()
相当于 value值
```html
    <div>
        <span>我是内容</span>
    </div>
    <input type="text" value="请输入内容">
    <script>
        // 1.获取和设置元素内容 html()
        // console.log($('div').html());
        // $('div').html('123');

        // 2.获取和设置元素文本的内容 text()
        console.log($('div').text());
        $('div').text(123456);

        // 3.获取和设置表单值 val()
        console.log($('input').val());
        $('input').val('qqq');
    </script>

```

## parents('选择器')
parents('选择器') 可以返回指定的祖先元素。
```js
    console.log($('.four').parents());
    console.log($('.four').parents('.one'));
```

## each() 和 $.each() 方法遍历元素
```js
// 1.each() 方法遍历元素
    var arr=['red','green','blue'];
    var sum=0;
    $('div').each(function(i,domEle123){
        // 回调函数第一个参数一定是索引号，索引号名称可以自己取
        console.log(i);

        // 回调函数第二个参数一定是DOM对象，名称可以自己取
        console.log(domEle123);
        $(domEle123).css('color',arr[i]);

        sum+=parseInt($(domEle123).text());
    
    })
    console.log(sum);


    // 2. $.each() 方法遍历元素 主要用于遍历数据，处理数据
    $.each($('div'),function(i,domEle123){
        console.log('$.each',i);
    })
    //可以遍历数组
    $.each(arr,function(i,domEle){
        console.log(i);
        console.log(domEle);
    })
    //可以遍历对象
    $.each({name:'wang',age:23},function(i,domEle){
        console.log(i);
        console.log(domEle);
    })

```

## jQuery元素操作
1. 创建元素
2. 添加元素 (1)内部添加 (2)外部添加
3. 删除元素
```js
    //1.创建元素
    var li=$('<li>我是后面创建的Li</li>');

    //2.添加元素
    //(1)内部添加
    // 放到ul内容的最后面
     $('ul').append(li);
    //放到ul内容的最前面
    $('ul').prepend(li);

    //(2)外部添加
    var div=$('<div>我是后面创建的div</div>');
    $('.test').after(div);
    $('.test').before(div);

    //3. 删除元素
   // ele.remove() 删除匹配的元素本身
    li.remove();
    $('ul').remove();
    //ele.empty() 清空匹配元素的所有子节点
     $('ul').empty();
    // ele.html('') 清空匹配元素的所有子节点
    $('ul').html('');
```

## jQuery尺寸和位置
### jQuery尺寸
- 1. width()/height()  取得匹配元素的宽度和高度值，只算width/height
- 2. innerWidth()/innerHeight()  取得匹配元素的宽度和高度值，包含padding
- 3. outerWidth()/outerHeight()  取得匹配元素的宽度和高度值，包含padding和border
- 4. outerWidth(true)/outerHeight(true)  取得匹配元素的宽度和高度值，包含padding和border和margin
```js
    //1. width()/height()  取得匹配元素的宽度和高度值，只算width/height
    console.log($('div').width());
    // width()和height()加入参数，就可以设置了
    // $('div').width(300);

    // 2. innerWidth()/innerHeight()  取得匹配元素的宽度和高度值，包含padding
    console.log($('div').innerWidth());
    console.log($('div').innerHeight());
    //innerWidth()/innerHeight()加入参数, 也可以设置了
    // $('div').innerWidth(500);

    // 3. outerWidth()/outerHeight()  取得匹配元素的宽度和高度值，包含padding和border
    console.log($('div').outerHeight());
    // outerWidth()/outerHeight()加入参数, 也可以设置了
    $('div').outerHeight(500)

    // 4. outerWidth(true)/outerHeight(true)  取得匹配元素的宽度和高度值，包含padding和border和margin
    console.log($('div').outerWidth(true));
    console.log($('div').outerHeight(true));
```

### jQuery位置
位置主要有三个：offset(),position(),scrollTop()/scrollLeft()
1. offset()设置或获取元素的偏移
```html
    <div class="father">
        <div class="son">
        </div>
    </div>
    <script>
        //获取元素距离文档顶部和左边的距离，和父元素无关
        console.log($('.son').offset());
        console.log($('.son').offset().left);
        console.log($('.son').offset().top);
        // 可以设置元素的偏移
        $('.son').offset({
            top:300,
            left:300
        })    
    </script>
```
2. position()获取元素的偏移
position() 获取元素距离带有定位的父级位置的偏移,如果没有带有定位的父级元素，则以文档为准。
position()只能获取位置信息，不能设置
```js
    // position() 获取元素距离带有定位的父级位置的偏移
    console.log($('.son').position());
    console.log($('.son').position().left);
    console.log($('.son').position().top);
    // position()只能获取位置信息，不能设置
```

3. scrollTop()/scrollLeft
使用scrollTop()/scrollLeft设置或获取元素被卷去的头部和左侧
scrollTop()被卷去的头部
scrollLeft()被卷去的左侧
```js
    //scrollTop(100)里面有参数就是表示设置。
    $(document).scrollTop(100);
    // 被卷去的头部scrollTop()
    // scrollLeft()被卷去的左侧
    $(window).scroll(function(){
        // console.log(12);
        var boxTop=$('.container')
        
        console.log($(document).scrollTop());
        
        var boxTop=$('.container').offset().top;
        if($(document).scrollTop()>boxTop){
            $('.back').show();
        }else{
            $('.back').hide();
        }
    })

    

```