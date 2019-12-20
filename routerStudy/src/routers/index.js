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
// 全局前置守卫
//     to : 将要进入的目标路由对象
//   from : 即将离开的目标路由对象
//   next : 执行跳转的下一步钩子
router.beforeEach((to, from, next) => {
  //   console.log(to);
  if (to.path == "/movie/nowPlaying/sanjiThree"||to.path == "/movie/nowPlaying/sanjiTwo") {
    next();
  } else {
    alert("还没登录请先登录！");
    next("/movie/nowPlaying/sanjiThree");
  }
});

export default router;
