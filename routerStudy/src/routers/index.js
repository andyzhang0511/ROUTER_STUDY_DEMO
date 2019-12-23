// 创建路由并引入组件
import Vue from "vue";
import Router from "vue-router";

import movie from "./movie";
import cinema from "./cinema";
import mine from "./mine";

Vue.use(Router);

// 创建路由对象，对象里面的属性可以对路由进行设置
// export default new Router({
//   mode: "history",
//   routes: [
//     movie,
//     cinema,
//     mine,
//     {
//       path: "/*",
//       redirect: "/movie"
//     }
//   ],

// });

const router = new Router({
  mode: "history",
  routes: [
    movie,
    cinema,
    mine,
    {
      path: "/*",
      redirect: "/movie"
    }
  ]
});
// 路由守卫常用于路由跳转判断是否需要登录等，如果需要就跳转到登录页面

// 1.全局前置守卫
//     to : 记录着将要进入的目标路由对象的详细
//   from : 记录着即将离开的目标路由对象的信息
//   next : 表示执行下一步

// 没有路由元信息的全局前置守卫
// router.beforeEach((to, from, next) => {
//   console.log(to.matched);
//   if (to.path == "/movie/nowPlaying/sanjiOne") {
//     alert("beforeEach最先被调用");
//     next();
//     // next("/movie/nowPlaying/sanjiTwo"); //不仅可以写成字符串还可以是一个对象
//   } else {
//     // alert("还没登录请先登录！");
//     next();
//   }
// });

// 有路由元信息的全局前置守卫
// router.beforeEach((to, from, next) => {
//   if (
//     to.matched.some(item => {
//       return item.meta.login_require;
//     })
//   ) {
//     next("/movie/nowPlaying/sanjiTwo");
//   } else {
//     next();
//   }
// });

// 2.全局解析守卫（beforeEach调用之后被调用）
// 和全局前置守卫类似，区别是在跳转被确认之前，同时在所有组件内守卫和异步路由组件都被解析之后，解析守卫才调用。
// router.beforeResolve((to, from, next) => {
//   alert("beforeEach调用之后再调用beforeResolve");
//   next();
// });

// 3.全局后置钩子(不会接收next函数也不会改变导航本身)
// router.afterEach((to, from, next) => {
//   //   console.log("全局后置钩子");
// });

export default router;
