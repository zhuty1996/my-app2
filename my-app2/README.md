**\*\*基于antd v4版本\*\***
## 1.在 create-react-app 中使用antd  
按需打包，优化打包大小官网步骤：https://ant.design/docs/react/use-with-create-react-app-cn  
自定义主题官网教程：https://ant.design/docs/react/customize-theme-cn
## 2.引入路由  
npm i react-router-dom  
页面设计思路 一级路由：登录页面 login.js 和主界面 admin.js（非home界面）
## 3.重置样式，登录页面  
图片在页面上的的引入：import xxx from xxx `<img src={xxx}/> `   
引入antd的Form组件官方教程：https://ant.design/components/form-cn/
## 4.高阶函数和高阶组件  
1. 高阶函数  
    1). 一类特别的函数  
        a. 接受函数类型的参数  
        b. 返回值是函数  
    2). 常见  
        a. setTimeout()/setInterval()
        b. Promise(): Promise( () => {})  then(value => {}, reason => {})  
        c. 数组遍历相关的方法： forEach()/filter()/map()/reduce()/find()/findIndex()  
        d. 函数对象的bind()  
    3). 高阶函数更新动态，更加具有扩展性
2. 高阶组件  
    1). 本质就是一个函数  
    2). 接收一个组件（被包装组件），返回一个新的组件（包装组件），包装组件会向被包装组件传入特定属性  
    3). 作用：扩展组件的功能  
    4). 高阶组件也是一个高阶函数：接收一个组件函数，返回是一个新的组件函数  
## 5.表单验证  
声明式验证： 直接使用别人定义好的规则进行验证。表单校验规则：https://ant.design/components/form-cn/#Rule  
自定义验证： validator自定义校验，接收 Promise 作为返回值。(rule, value) => Promise
## 6.动态显示导航栏  
1. 使用map()和递归调用
2. 使用reduce()和递归调用  
递归调用：在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。https://segmentfault.com/a/1190000015813977?utm_source=tag-newest  
reduce()：reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。https://www.jianshu.com/p/e375ba1cfc47  
## 7.WithRouter高阶组件
包装**非路由组件**，返回一个新的组件。新的组件向非路由组件传递3个属性：  
1. history: push()/replace()/back()
2. location: pathname属性
3. match: params属性
## 8.export和export default
export：import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。  
如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。  
详情： https://www.cnblogs.com/fanyanzhao/p/10298543.html
## 9.var、const和let  
let 声明的变量只在 let 命令所在的代码块内有效。  
const 声明一个只读的常量，一旦声明，常量的值就不能改变。  
https://www.runoob.com/js/js-let-const.html  
## 10.forEach和map  
foreach：该方法不会改变原来的数组，只是将数组中的每一项作为callback的参数执行一次  
```
let a = ['a', 'b', 'c'];
a.forEach((item) => {
    console.log(item);
});

// a
// b
// c
```  
map：map()方法创建一个新的数组，其结果是该数组中的每个元素都调用一次callback后返回的结果，同样，该方法不改变原有的数组
```
let arr = [3, 5, 2, 2, 5, 5];
let b = arr.map((item) => { return item+5;});

console.log(b);   // [8, 10, 7, 7, 10, 10]
console.log(arr);  // [3, 5, 2, 2, 5, 5]
```
## 11.React-Router
```
<Switch>
    <Route path='/product' exact component={Home} />  //exact：精确匹配
    <Route path='/product/detail' component={Detail}/>
    <Route path='/product/addupdate' component={AddUpdate}/>
    <Redirect to='/product'/> //Redirect：重定向，如果上面的路由都不匹配时，跳转到'/product'页面。必须放在Switch里面的最后一行
</Switch>
```
## 12.分页
1. 前台分页  
    请求获取数据：一次获取所有数据，翻页不需要再发请求  
    请求接口：不需要指定页码和每页数量  
    响应数据： 所有数据的数组
2. 后台分页  
    请求获取数据：每次只获取当前页数据，翻页时要发请求  
    请求接口：需要指定页码（pageNum）和每页数量（pageSize）  
    响应数据： 当前页数据的数组 + 总记录数（total）
3. 如何选择  
    基本根据数据多少来选择
## 13.子组件向父组件传递
https://www.cnblogs.com/jpwz/p/12411804.html
## 14.indexOf()
indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。`array.indexOf(item,start)`   
**item**: 必须。查找的元素。  
**start**: 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。  
返回值:元素在数组中的位置,如果没与搜索到则返回 -1