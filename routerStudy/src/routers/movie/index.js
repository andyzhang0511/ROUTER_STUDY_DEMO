export default {
  name: "movie",
  path: "/movie",
  component: () => import("@/views/movie"),
  children: [
    {
      name: "nowPlaying",
      path: "/movie/nowPlaying",
      component: () => import("@/components/nowPlaying"),
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
          component: () => import("@/components/sanjiTwo")
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
