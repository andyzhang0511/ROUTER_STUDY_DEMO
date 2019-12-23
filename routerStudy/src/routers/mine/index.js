export default {
  name: "mine",
  path: "/mine",
  component: () => import("@/views/mine"),
  children: [
    {
      name: "mineErjiOne",
      path: "/mine/mineErjiOne",
      component: () => import("@/components/mineErjiOne"),
      meta: {
        login_require: false
      },
      children: [
        {
          name: "mine-SanjiOne",
          path: "/mine/mineErjiOne/mineSanjiOne",
          component: () => import("@/components/mineSanjiOne")
        },
        {
          name: "mine-SanjiTwo",
          path: "/mine/mineErjiOne/mineSanjiTwo",
          component: () => import("@/components/mineSanjiTwo")
        },
        {
          name: "mine-SanjiThree",
          path: "/mine/mineErjiOne/mineSanjiThree",
          component: () => import("@/components/mineSanjiThree")
        },
        {
          path: "/mine/mineErjiOne",
          redirect: "/mine/mineErjiOne/mineSanjiOne"
        }
      ]
    },
    {
      name: "mineErjiTwo",
      path: "/mine/mineErjiTwo",
      component: () => import("@/components/mineErjiTwo"),
      meta: {
        login_require: true
      }
    },
    {
      path: "/mine",
      redirect: "/mine/mineErjiOne"
    }
  ]
};
