<template>
    <div id="main">
        <div class="movie_body">
            <div class="movie_menu">
                <div class="hot_swtich">
                    <router-link tag="div" to=/mine/mineErjiOne/mineSanjiOne class="hot_item">三级路由1</router-link>
                    <router-link tag="div" to=/mine/mineErjiOne/mineSanjiTwo class="hot_item">三级路由2</router-link>
                    <router-link tag="div" to=/mine/mineErjiOne/mineSanjiThree class="hot_item">三级路由3</router-link>
                </div>
            </div>
            <!-- 三级路由 -->
            <div style="margin-top:20px">
                <transition :name="transitionName">
                    <router-view />
                </transition>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "mineErjiOne",
    data () {
        return {
            transitionName: ''
        }
    },
    methods: {

    },
    computed: {

    },
    watch: {
        "$route" (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = to.path.split('/').length
            console.log(toDepth)
            console.log(fromDepth)
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}
</script>

<style lang="scss" scoped>
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
/* 动画 */
.slide-left-enter-active,
.slide-left-leave-active {
    transition: opacity 0.5s;
}
.slide-left-enter,
.slide-left-leave-to {
    opacity: 0;
}

.slide-right-enter-active {
    transition: opacity 2s;
}
.slide-right-leave-active {
    opacity: 0;
}
</style>