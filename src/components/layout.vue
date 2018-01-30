<template>
  <el-container style="height:100%">
      <el-header v-if="$route.name !== 'Intro'">
        <el-menu :default-active="'food'" mode="horizontal" @select="handleSelect">
          <el-menu-item index="food">우리들의 맛집</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
  </el-container>
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
