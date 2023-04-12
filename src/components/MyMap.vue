<template>
  <div class="container">
    <baidu-map class="map" ref="map" :apiKey="apiKey" :center="point">
    </baidu-map>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
import { BaiduMap } from 'baidu-map-vue3'
const apiKey = ref<String>("XyTZ1iuf806HsEBuKmuNW3GOKU0GP0Te");
const map = ref<HTMLDivElement>()
console.log(map)
// map.value.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
const point = ref({
  lng: 116.403963,
  lat: 39.915119,
});
onMounted(() => {
  // initMap()
});
// const initMap = ()=> {
//   let map = new BMapGL.Map("bd_map_d")
//   map.centerAndZoom(new BMapGL.Point(116.280190, 40.049191), 19);  // 初始化地图,设置中心点坐标和地图级别
//   map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
//   map.setHeading(64.5);

// }
</script>

<style scoped lang="less">
.container {
  padding: 20px;
  height: 800px;
  box-sizing: border-box;
  .map {
    width: 100%;
    height: 100%;
  }
}
</style>
