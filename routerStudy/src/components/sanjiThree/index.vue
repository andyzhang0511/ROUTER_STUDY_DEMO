<template>
    <div>
        <button @click="pushChange">push执行动态路由跳转</button><br>
        <button @click="queryChange">query执行动态路由跳转</button><br>
        <button @click="replaceChange">replace执行动态路由跳转</button><br>
        <button @click="goBack">go执行动态路由跳转（后退一步）</button>
        <button @click="goForward">go执行动态路由跳转（前进一步）</button>
    </div>
</template>

<script>
export default {
    // 组件内的守卫

    // 进入该组件之前被调用，组件实例还没有被创建，不能使用 this关键字
    // 不过，你可以通过传一个回调给 next来访问组件实例，也就是说可以通过 next 来回调实例化后的组件，用next函数的 vm 参数充当 this
    // beforeRouteEnter: (to, from, next) => {
    //     //此时该组件还没被实例化
    //     // alert(this.info)//弹出框消息为undefined
    //     next(vm => {
    //         //此时该组件被实例化了
    //         alert(vm.info)
    //     })
    // },
    // 离开组件之后调用，可以调用this关键字
    // beforeRouteLeave (to, from, next) {
    //     if (confirm("确定离开吗？") == true) {
    //         next() // 跳转到另一个路由
    //     } else {
    //         next(false)//不跳转
    //     }
    // },
    // 该路由参数更新时执行
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 this

    beforeRouteEUpdata(to,from,next){

    },
    data () {
        return {
            info: '组件内的守卫:beforeRouteEnter进入组件之前'
        }
    },
    methods: {
        // 编程式的导航(编程式)
        pushChange () {
            this.$router.push({ name: 'comingSoon', params: { id: '123' } })
            // push
            // 字符串
            // this.$router.push('/movie/comingSoon/1')

            // 对象
            // this.$router.push({ path: '/movie/comingSoon/123' })

            // 命名的路由(传参的两种方式)
            // 方式一:命名路由搭配params,刷新页面参数会丢失
        },
        queryChange () {
            // 方式二：查询参数搭配query，刷新页面数据不会丢失
            this.$router.push({ path: '/movie/nowPlaying/sanjiOne/', query: { id: '234' } })
        },
        replaceChange () {
            console.log(111)
            // this.$router.replace('/movie/comingSoon/1')
            this.$router.replace({ name: 'comingSoon', params: { id: '123' } })
        },
        // 总结
        // push和replace的区别
        // push会向 history 栈添加一个新的记录，当用户点击浏览器后退按钮时，可以回到之前的 URL
        // replace导航后不会留下history 记录,即使点击返回按钮也不会回到这个页面
        // params：/router1/:id ，/router1/123，/router1/789 ,这里的id叫做params
        // query：/router1?id=123 ,/router1?id=456 ,这里的id叫做query

        goBack () {
            // 后退1步，等同于history.back()
            this.$router.go(-1)
        },
        goForward () {
            // 前进1步，等同于history.forward()
            this.$router.go(1)

            // 前进3步
            // this.$router.go(3)

            // 如果 history 记录不够用，那就默默地失败呗
            // this.$router.go(-100)
            // this.$router.go(100)
        }
    },
}
</script>

<style lang="scss" scoped>
</style>