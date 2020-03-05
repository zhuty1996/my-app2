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

