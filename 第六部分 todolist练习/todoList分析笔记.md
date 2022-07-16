1. 刷新页面不会丢失数据，因此需要用到本地存储localStorage
2. 核心思路：不管按下回车，还是点击复选框，都是从本地存贮中加载到页面中，
这样保证刷新关闭不会丢失数据。
3. 存储的数据格式： var todolist=[{title:'abc,done:false}]
4. 本地存储localStorage里面只能存储字符串格式，因此需要把对象转化为字符串JSON.stringfy(data)
5. 获取本地存储数据，需要把里面的字符串转换为对象格式 JSON.parse() 我们才能使用里面的数据。