<template>
  <div class="flex flex-col gap-6 items-center h-screen w-full bg-gray-50 flex items-center justify-center">
    <div class="w-3/2 bg-gray-200 overflow-hidden rounded-xl mx-7">
      <div class="flex" v-if="food.id">
        <div class="flex-none w-48 relative">
          <img :src="food.photo" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="text-blue font-bold flex-auto text-xl font-semibold">
              {{ food.name }}
            </h1>
            
            <div class="text-xl font-semibold text-gray-500">
              $ {{ food.price }}
            </div>
          </div>
          <p class="mt-4 text-sm text-gray-500">
            {{ food.description }}
          </p>
          <div class="flex space-x-3 mb-4 mt-3 text-sm font-medium">
            <div class="flex-auto flex">
              <button @click.prevent="onClick" :disabled="isInCart" class="uppercase p-3 text-xs font-bold w-1/4 flex items-center justify-center rounded-full bg-orange-600 text-white" type="submit">
               Añadir al carro
              </button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  data() {
    return {
      food: {},
      isInCart: false
    };
  },
  props: ['id'],
  methods: {
    onClick() {
      this.$store.dispatch('addCart', {
        food_id: this.food.id,
        name: this.food.name,
        price: this.food.price,
        quantity: 1
      })
      this.isInCart = true;
    }
  },
  async mounted() {
    const res = await axios.get(`foods/${this.$route.params.id}`)
    this.food = res.data

    const validate = this.$store.state.carts.find(cart => cart.food_id == this.food.id)

    if(validate) {
      this.isInCart = true;
    }
  }
};
</script>
