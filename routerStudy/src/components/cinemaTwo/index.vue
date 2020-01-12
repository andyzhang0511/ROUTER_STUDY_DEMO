<template>
    <div>
        vue使用watch监听实现类似百度搜索功能
        <div>
            <input type="text" class="search" placeholder="请输入城市名" v-model.trim='keyword' />
        </div>
        <div class="search-content" v-show="keyword">
            <ul>
                <li v-for="item in cityList" :key="item.id">
                    {{item}}
                </li>
                <li v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "cinemaTwo",
    data () {
        return {
            keyword: '',
            cityList: [],
            timer: null,
            jsonData: [{
                'id': 1,
                'name': '北京'
            },
            {
                'id': 2,
                'name': '上海'
            },
            {
                'id': 3,
                'name': '广州'
            },
            {
                'id': 4,
                'name': '深圳'
            },
            {
                'id': 5,
                'name': '安陆'
            },
            {
                'id': 6,
                'name': '安徽'
            }
            ]
        }
    },
    // computed和watch的用法区别
    computed: {
        hasNoData () {
            return !this.cityList.length
        }
    },
    watch: {
        keyword () {
            //函数节流
            if (this.timer) {
                clearTimeout(this.timer)
            }
            //删除文字  清零
            if (!this.keyword) {
                this.cityList = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                this.jsonData.forEach(val => {
                    if (val.name.indexOf(this.keyword) > -1) {
                        result.push(val.name)
                    }
                });
                this.cityList = result
                console.log(this.cityList)
            }, 100)
        }
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>
</style>