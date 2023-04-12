<template>
  <div class="container">
    <h1>购物车</h1>
    <a-list
      class="demo-loadmore-list"
      :loading="initLoading"
      item-layout="horizontal"
      :data-source="list"
    >
      <template #loadMore>
        <div
          v-if="!initLoading && !loading"
          :style="{
            textAlign: 'center',
            marginTop: '12px',
            height: '32px',
            lineHeight: '32px',
          }"
        >
          <!-- <a-button @click="onLoadMore">loading more</a-button> -->
        </div>
      </template>
      <template #renderItem="{ item }">
        <a-list-item>
          <template #actions>
            <a-button type="primary" @click="addToCart(item)">加入购物车</a-button>
          </template>
          <a-skeleton avatar :title="false" :loading="loading" active>
            <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <template #title>
                {{ item.name }}
              </template>
              <template #avatar>
                <a-avatar src="/favicon.ico" />
              </template>
            </a-list-item-meta>
            价格：<div>{{item.price}}</div>
          </a-skeleton>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
import { useCart } from "../composable/useCart";
import { product } from '../types/cart'
const list = reactive<product[]>([]);
const initLoading = ref<boolean>(false);
const loading = ref<boolean>(false);
const {addToCart} = useCart()
onMounted(() => {
  list.push({ id: 1, name: "华为", price: 123, stock: 0 });
  list.push({ id: 2, name: "小米", price: 231, stock: 0 });
  list.push({ id: 3, name: "vivo", price: 567, stock: 0 });
  initLoading.value = false
});
</script>

<style scoped lang="less">
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.demo-loadmore-list {
  width: 80%;
  min-height: 350px;
}
</style>
