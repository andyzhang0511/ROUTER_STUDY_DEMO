<template>
    <div>
        <h3 style="color:red">路由组件传参用props</h3>
        <h1>{{school}}---{{range}}</h1>
        <!-- <h1>{{name}}</h1> -->
        <!-- <h1>{{testId}}</h1> -->
        {{num}}
    </div>
</template>

<script>
export default {
    name: "cinemaOne",
    // 路由组件传参(布尔)
    // props:['testId'],

    // 路由组件传参(对象)
    // props:['name'],

    // 路由组件传参(函数)
    props:['school','range'],

    data () {
        return {
            num: '0'
        }
    },
    mounted() {
        this.num = this.$route.params.testId //123
        console.log(this.num)
    },
}
</script>

<style lang="scss" scoped>
</style>