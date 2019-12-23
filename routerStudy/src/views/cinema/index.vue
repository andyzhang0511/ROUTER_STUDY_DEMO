<template>
    <div id="main">
        <Header></Header>
        <div class="movie_menu">
            <div class="hot_swtich">
                <!-- 声明式： -->
                <router-link tag="div" to=/cinema/cinemaOne/123 class="hot_item">二级路由1</router-link>
                <router-link tag="div" to=/cinema/cinemaTwo class="hot_item">二级路由2(过渡特效)</router-link>
            </div>
        </div>
        <!-- 二级路由渲染 -->
            <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/head"
import Footer from "@/components/foot"
export default {
    name: "cinema",
    components: {
        Header,
        Footer
    },
    watch: {
       
    },
    data () {
        return {
        }
    },
    methods: {

    },

}
</script>

<style lang="scss" scoped>
.movie_menu .hot_item {
    font-size: 15px;
    color: #666;
    width: 200px;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
}
.movie_menu .hot_item.active {
    color: #3600f8;
    border-bottom: 2px #3600f8 solid;
}
.movie_menu .hot_item.router-link-active {
    color: #3600f8;
    border-bottom: 2px #3600f8 solid;
}
.movie_menu .hot_swtich {
    display: flex;
    height: 100%;
    width: 100%;
    line-height: 45px;
}

</style>