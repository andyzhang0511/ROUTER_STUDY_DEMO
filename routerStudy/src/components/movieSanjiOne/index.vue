<template>
    <div>
        <h1 style="margin-bottom:50px">scss的for循环</h1>
        <p class="size-1">三级路由1111</p>
        <p class="size-2">三级路由111</p>
        <p class="size-3">三级路由111</p>
        <p class="size-4">三级路由111</p>
        <p class="size-5">三级路由111</p>
        <p class="size-6">三级路由111</p>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    @for $i from 1 through 6 {
        .size-#{$i}{
            font-size:10px*$i
        }
    }
</style>