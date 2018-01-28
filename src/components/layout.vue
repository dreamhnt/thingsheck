<template>
<div>
  <el-container>
      <el-header>
        <el-menu :default-active="'food'" mode="horizontal" @select="handleSelect">
          <el-menu-item index="food">우리들의 맛집</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
  </el-container>

</div>
</template>

<script>
export default {
  data () {
    return {
      intro: true
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>

</style>
