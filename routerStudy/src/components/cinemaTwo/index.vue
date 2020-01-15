<template>
    <div>
        <search />
        <div class="list">
            <ul>
                <li v-for="item in cityList" :key="item.id">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import search from './search'
export default {
    name: "cinemaTwo",
    components: {
        search
    },
    data () {
        return {
            cityList: [{
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
    methods: {

    },
}
</script>

<style  scoped>
.list {
    width: 200px;
    height: 400px;
    background: #fff;
    position: absolute;
    top: 150px;
    left: 0;
    z-index: -1;
}
</style>