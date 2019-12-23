export default {
  name: "movie",
  path: "/movie",
  component: () => import("@/views/movie"),//路由懒加载简单来说就是延迟加载或按需加载，即在需要的时候的时候进行加载。
  children: [
    {
      name: "nowPlaying",
      path: "/movie/nowPlaying",
      component: () => import("@/components/nowPlaying"),//路由懒加载，为给客户更好的客户体验，首屏组件加载速度更快一些，解决白屏问题。
      children: [
        {
          // 命名视图的使用
          name: "sanjiOne",
          path: "/movie/nowPlaying/sanjiOne/", //query的写法
          components: {
            default: () => import("@/components/sanjiOne"),
            son: () => import("@/components/sanjiThree")
          }
        },
        {
          name: "sanjiTwo",
          path: "/movie/nowPlaying/sanjiTwo",
          component: () => import("@/components/sanjiTwo")//常用的懒加载方式有两种：即使用vue异步组件 和 ES中的import
        },
        {
          name: "sanjiThree",
          path: "/movie/nowPlaying/sanjiThree",
          component: () => import("@/components/sanjiThree")
        },
        // 路由重定向，从二级路由/movie/nowPlaying重定到二级路由/movie/nowPlaying/sanjiOne
        {
          path: "/movie/nowPlaying",
          redirect: "/movie/nowPlaying/sanjiOne"
        }
      ]
    },
    // 命名路由
    {
      name: "comingSoon",
      path: "/movie/comingSoon/:id", //params的写法
      component: () => import("@/components/comingSoon")
    },
    // 路由重定向，从一级路由/moive重定到二级路由/movie/nowPlaying
    {
      path: "/movie",
      redirect: "/movie/nowPlaying"
    }
  ]
};
