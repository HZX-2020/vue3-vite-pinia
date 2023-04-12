<template>
  <a-layout>
    <a-layout-header>
      <top-nav></top-nav>
    </a-layout-header>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
    <!-- <a-layout-footer>Footer</a-layout-footer> -->
  </a-layout>
  
</template>

<script setup lang='ts'>
import {ref, reactive, toRefs, onMounted} from 'vue'
onMounted(()=> {

})

</script>

<style scoped lang='less'>
.ant-layout-header {
  color: #fff;
  background: #7dbcea;
}
.ant-layout-content{
  min-height: calc(100vh - 64px);
}
</style>
