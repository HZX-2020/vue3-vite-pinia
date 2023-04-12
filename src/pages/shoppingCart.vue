<template>
  <div class="container">
    <h1>购物车</h1>
    <a-list
      class="demo-loadmore-list"
      item-layout="horizontal"
      :data-source="cart"
    >
      <template #loadMore>
        <div
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
            <a-button type="primary" @click="addToCart(item)">添加</a-button>
            <a-button type="primary" @click="reduceCart(item.id)">减少</a-button>
            <a-button type="danger" @click="removeCart(item.id)">删除</a-button>
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

            数量：<div class="num">{{item.stock}}</div>

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
const {cart, addToCart, removeCart, reduceCart, num} = useCart()
const loading = ref<Boolean>(false)
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
  .num{
    margin-right: 50px;
  }
}
</style>
