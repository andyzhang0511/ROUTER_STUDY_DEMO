<template>
    <header id="head">
        <h1>
            header
        </h1>
    </header>
</template>

<script>
export default {
    name: "top",
    data () {
        return {

        }
    }
}
</script>

<style scope>
#head {
    width: 100%;
    height: 50px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    position: relative;
}
#head h1 {
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    font-weight: normal;
}
</style>