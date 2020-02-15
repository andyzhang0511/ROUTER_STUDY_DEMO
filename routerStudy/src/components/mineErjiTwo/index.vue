<template>
  <div>
    <p>Vue.js中 watch(深度监听)的最易懂的解释</p>
    <p>FullName:{{ fullName }}</p>
    <p>
      FirstName:
      <input type="text" v-model="firstName" />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      firstName: "zhang",
      lastName: "fan"
    };
  },
  watch: {
    // firstName(newName, oldName) {
    //     this.fullName = newName + '' + this.lastName
    // }
    // 这里 watch 的一个特点是，最初绑定的时候是不会执行的，要等到 firstName 改变时才执行监听计算。
    // 那我们想要一开始就让他最初绑定的时候就执行改怎么办呢？
    // 我们需要修改一下我们的 watch 写法，修改过后的 watch 代码如下：
    firstName: {
      handler(newName, oldName) {
        this.fullName = newName + "" + this.lastName;
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>