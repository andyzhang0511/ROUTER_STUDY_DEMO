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
          name: "sanjiOne",
          path: "/movie/nowPlaying/sanjiOne/",//query的写法
          component: () => import("@/components/sanjiOne")
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
        }
      ]
    },
    {
      name: "comingSoon",
      path: "/movie/comingSoon/:id",//params的写法
      component: () => import("@/components/comingSoon")
    },
    {
      path: "/movie",
      redirect: "/movie/nowPlaying"
    }
  ]
};
