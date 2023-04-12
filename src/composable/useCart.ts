import { ref, reactive, computed } from "vue";
import { message } from "ant-design-vue";
import { product, cartItem } from "../types/cart";
import { cursorTo } from "readline";
const cart = reactive<cartItem[]>([]);
const num = ref(0);
export const useCart = () => {
  const addToCart = (product: product) => {
    const flag = cart.findIndex((it) => it.id == product.id);
    if (flag > -1) {
      cart[flag].stock++;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        stock: 1,
      });
    }
  };
  // 减少商品
  const reduceCart = (id: number) => {
    const flag = cart.findIndex((it) => it.id == id);
    if (flag > -1) {
      if (cart[flag].stock == 0) return message.info("已经没有了");
      cart[flag].stock--;
    } else {
      message.info("已经没有了");
    }
  };
  // 移除商品
  const removeCart = (id: number) => {
    const flag = cart.findIndex((it) => it.id == id);
    cart.splice(flag, 1);
  };
  const num = computed(() => {
    let num = 0
    cart.forEach(it => {
      num += it.stock
    })
    return num
    // return cart.reduce((pre, cur) => (pre.stock += cur.stock));
  });
  return {
    cart,
    num,
    addToCart,
    removeCart,
    reduceCart,
  };
};
