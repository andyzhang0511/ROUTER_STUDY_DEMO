export default {
  name: "cinema",
  path: "/cinema",
  component: () => import("@/views/cinema"),

  children: [
    {
      name: "cinemaOne",
      path: "/cinema/cinemaOne/:testId",
      component: () => import("@/components/cinemaOne"),
      // 路由组件传参用props(布尔)
      //   props:true

      // 路由组件传参用props(对象)
      //   props: {
      //     name: "111111"
      //   }

      // 路由组件传参用props(函数)
      props: () => ({ school: "Hust", range: 1 })
    },
    {
      name: "cinemaTwo",
      path: "/cinema/cinemaTwo",
      component: () => import("@/components/cinemaTwo"),
    //   路由独享守卫
    //   beforeEnter: (to, from, next) => {
    //     console.log(to);
    //     // alert(111);
    //     // next()
    //   }
    },
    {
      path: "/cinema",
      redirect: "/cinema/cinemaTwo"
    }
  ]
};
