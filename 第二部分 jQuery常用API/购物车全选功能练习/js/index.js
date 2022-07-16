$(function(){
    // 1.全选 全不选功能模块
    //  就是把全选按钮（checkall）的状态赋值给三个小的按钮（jcheckbox）就可以了
    
    $('.checkall').change(function(){
        // console.log($(this).prop('checked'))
        $('.jcheckbox').prop('checked',$(this).prop('checked'));
        $('.checkall').prop('checked',$(this).prop('checked'));

         // 8. 选中的商品要修改背景颜色
        if($(this).prop('checked')){
            $('.cart-item').addClass('check-cart-item');
        }else{
            $('.cart-item').removeClass('check-cart-item');
        }

    });

    // 2.如果小复选框被选中的个数等于3，就应该把全选按钮选上
    $('.jcheckbox').change(function(){

        // console.log($('.jcheckbox:checked'));
        // 选择器 $('.jcheckbox:checked')返回有几个复选框被选中
        if($('.jcheckbox:checked').length==$('.jcheckbox').length){
            $('.checkall').prop('checked',true);
        } else{
            $('.checkall').prop('checked',false);
        }

         // 8. 选中的商品要修改背景颜色
         if($(this).prop('checked')){
            $(this).parents('.cart-item').addClass('check-cart-item');
        }else{
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }

    })

    // 3. 增减商品数量模块，首先声明一个变量，当我们点击+号（decrement），就让这个值++,再赋值给input（class="itxt"）
    $('.increment').click(function(){
        var n=$(this).siblings('.itxt').val();
        console.log(n);
        n++;
        $(this).siblings('.itxt').val(n);

        // 5.修改商品小计
        // 核心思路：每次点击+号 或者 -号，根据文本框的值乘以 当前商品的价格 就是小计
        // 修改当前商品的价格，要把￥符号去掉，要使用截取字符串。
        var p=$(this).parents('.p-num').siblings(".p-price").html();      
        p=p.substr(1);
        var sum_num=p*n;
        $(this).parents('.p-num').siblings(".p-sum").html('￥'+sum_num.toFixed(2));
        getSum();
    })
    // 4.减号，同理（class="decrement"）
    $('.decrement').click(function(){
        var n=$(this).siblings('.itxt').val();
        console.log(n);
        n--;
        if(n<1){
            n=1;
        }
        $(this).siblings('.itxt').val(n);
        // 修改商品小计
        // 核心思路：每次点击+号 或者 -号，根据文本框的值乘以 当前商品的价格 就是小计
        // 修改当前商品的价格，要把￥符号去掉，要使用截取字符串。
        var p=$(this).parents('.p-num').siblings(".p-price").html();      
        p=p.substr(1);
        var sum_num=(p*n).toFixed(2);
        $(this).parents('.p-num').siblings(".p-sum").html('￥'+sum_num);
        getSum();
    })

    // 5. 用户修改文本框里面的值 重新计算 小计模块
    $('.itxt').change(function(){
        // 先得到文本框的里面的值 乘以 当前商品的单价
        // 5.修改商品小计
        var n=$(this).val();
        var p=$(this).parents('.p-num').siblings(".p-price").html();      
        p=p.substr(1);
        var sum_num=(p*n).toFixed(2);
        $(this).parents('.p-num').siblings(".p-sum").html('￥'+sum_num);
        getSum();
    })

    // 6.计算总计和总额模块
    function getSum(){
        var count=0; // 计算总件数
        var money=0; // 计算总价钱
        $('.itxt').each(function(i,ele){
            count+=parseInt($(ele).val());
            
        })
        $('.amount-sum em').text(count);

        $('.p-sum').each(function(i,ele){
            console.log($(ele).text());
            money+= parseFloat($(ele).text().substr(1));
        })
        $('.price-sum em').text('￥'+money.toFixed(2));
        console.log('￥'+money.toFixed(2));
       
    }
    getSum();

    // 7. 删除商品的操作
    // （1）清空购物车  删除所有的商品
    $('.clear-all').click(function(){
        $('.cart-item').remove();
        getSum();

    })

    // （2）删除选中的商品
    $('.remove-batch').click(function(){
        $('.jcheckbox:checked').parents('.cart-item').remove();
        getSum();
    })

    // (3)删除的是当前的商品
    $('.p-action').click(function(){
        $(this).parents('.cart-item').remove();
        getSum();

    }) 


   





})