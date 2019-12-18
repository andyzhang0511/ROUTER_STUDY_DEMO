<template>
    <div id="main">
        <div class="movie_body">
            <div class="movie_menu">
                <div class="hot_swtich">
                <router-link tag="div" to=/movie/nowPlaying/sanjiOne class="hot_item">三级路由1</router-link>
                <router-link tag="div" to=/movie/nowPlaying/sanjiTwo class="hot_item">三级路由2</router-link>
                <router-link tag="div" to=/movie/nowPlaying/sanjiThree class="hot_item">三级路由3</router-link>
                </div>
            </div>
            <!-- 三级路由渲染 -->
            <router-view />

        </div>
    </div>
</template>

<script>
export default {
    name: "nowPlaying",
    data () {
        return {

        }
    }
}
</script>

<style lang="" scoped>
#content .movie_body {
    flex: 1;
    overflow: auto;
}
.movie_menu .hot_item {
    font-size: 15px;
    color: #666;
    width: 80px;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
}
.movie_menu .hot_item.active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item.router-link-active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
    display: flex;
    height: 100%;
    line-height: 45px;
}
</style>