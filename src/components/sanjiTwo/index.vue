<template>
    <div class="demo">
        <h1 style="margin-bottom:50px">scss的基本功能使用方法</h1>

        <div class="demo1">
            <p><span>三级路由222</span><span>三级路由222</span></p>
            <p>三级路由222</p>
            <p>三级路由222</p>
        </div>
        <div class="demo2">三级路由222</div>
        <div class="demo3">三级路由222</div>
        <div class="demo4"><a href="#">三级路由222</a></div>
        <div class="demo5">三级路由222</div>
        <div class="demo6">三级路由222</div>
        <div class="demo7">三级路由222</div>
        <div class="demo8">三级路由222</div>

    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    watch: {

    }
}
</script>

<style lang="scss" scoped>
// 变量  所有变量以$开头
$commonColor: blue;
$top: top;
$bottom: bottom;
$left: left;
$right: right;
@function double($n) {
    @return $n * 2;
}
// 如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中
.demo {
    color: $commonColor;
}
.demo1,
.demo3,
.demo5 {
    width: 100px;
    height: 100px;
    background: pink;
    // border-right: 1px solid red;
    // border-#{$right}: 1px solid $commonColor;
}

// 计算功能
.demo2 {
    margin-#{$bottom}: (10px * 2);
    margin-#{$top}: 10px+10px;
    color: black;
}

// 嵌套功能
.demo1 {
    p {
        color: green;
        span {
            color: red;
        }
    }
}

// 属性也可以嵌套，比如border-color属性
.demo5 {
    border: {
        color: black;
    }
}

// 在嵌套的代码块内，可以使用&引用父元素。比如a:hover伪类，可以写成：
.demo4 {
    margin-#{$top}: 20px;
    margin-#{$bottom}: 20px;
    a {
        text-decoration: none;
        &:hover {
            color: aqua;
        }
    }
}

// 代码的重用
// sass 允许一个选择器继承另一个选择器,demo6要继承demo2，就要使用@extend命令
.demo6 {
    @extend .demo2;
}

// Mixin可以重用代码块,mixin也可以指定参数和缺省值
@mixin fontStyle($value: 20px) {
    color: blueviolet;
    font-size: 20px;
    margin-left: $value;
}
.demo7 {
    @include fontStyle(30px);
}
.demo8 {
    @include fontStyle(50px);
}

// 颜色函数
// SASS提供了一些内置的颜色函数，以便生成系列颜色
// 　　lighten(#cc3, 10%) // #d6d65c
// 　　darken(#cc3, 10%) // #a3a329
// 　　grayscale(#cc3) // #808080
// 　　complement(#cc3) // #33c

// 插入文件
// @import命令，用来插入外部文件
// @import "path/filename.scss";
// 如果插入的是.css文件，则等同于css的import命令
// @import "foo.css";

// 高级用法
// 条件语句
// @if可以用来判断
.demo1 {
    @if 5<3 {
        border: 2px dotted;
    } @else {
        border-#{$right}: 3px solid $commonColor;
    }
}
.demo3 {
    @if 1<3 {
        border: 2px dotted;
        width: double(100px);
    }
}
.demo5 {
    @if 1+1 == 2 {
        border-#{$right}: 3px solid black;
    }
}

// 自定义函数
// sass允许用户编写自己的函数
</style>