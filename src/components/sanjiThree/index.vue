<template>
    <div>
        <button @click="pushChange">push执行动态路由跳转</button>
        <button @click="queryChange">query执行动态路由跳转</button>
        <button @click="replaceChange">replace执行动态路由跳转</button>

    </div>
</template>

<script>
export default {
    data () {
        return {

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
        }
        // 总结
        // push和replace的区别
        // push会向 history 栈添加一个新的记录，当用户点击浏览器后退按钮时，可以回到之前的 URL
        // replace导航后不会留下history 记录,即使点击返回按钮也不会回到这个页面
        // params：/router1/:id ，/router1/123，/router1/789 ,这里的id叫做params
        // query：/router1?id=123 ,/router1?id=456 ,这里的id叫做query
    },
}
</script>

<style lang="scss" scoped>
</style>