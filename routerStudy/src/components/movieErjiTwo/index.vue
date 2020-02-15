<template>
    <div>
        <p> 路由传递参数和传统传递参数是一样的，命名路由类似表单提交而查询就是url传递，在vue项目中基本上掌握了这两种传递参数就能应付大部分应用了，最后总结为以下:</p>
        <p> 1.命名路由搭配params，刷新页面参数会丢失</p>
        <p>2.查询参数搭配query，刷新页面数据不会丢失</p>
        <p>3.接受参数使用this.$router后面就是搭配路由的名称就能获取到参数的值</p>
        <p style="color:red">当前子路由的id值是:  {{b}}</p>
        <!-- <p>{{this.$route.query.id}}</p> -->
    </div>
</template>
<script>
export default {
    data () {
        return {
            b: ''
        }
    },
    created () {
        console.log(this.$route)// 当前子页面路由信息
        // console.log(this.$router)// 全局路由信息

        let a = this
        a.getParams()
    },
    // 复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象：
    watch: {
        '$route': 'getParams'
    },
    methods: {
        getParams () {
            this.b = this.$route.params.id
        }
    },

}
</script>

<style lang="scss" scoped>
</style>