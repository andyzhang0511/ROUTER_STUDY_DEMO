// 创建路由并引入组件
import Vue from "vue"
import Router from "vue-router"

import movie from "./movie"
import cinema from "./cinema"
import mine from "./mine"

Vue.use(Router);

// 创建路由对象，对象里面的属性可以对路由进行设置
export default new Router({
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
``