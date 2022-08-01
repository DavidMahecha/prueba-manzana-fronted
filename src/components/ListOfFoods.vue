<template>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <div
      v-for="food in foods"
    >
      <router-link :to="`/food/${food.id}`">
        <food-card :food="food" />
      </router-link>
    </div>
  </div>
</template>
<script>

import axios from 'axios'
import FoodCard from '@/components/FoodCard.vue'

export default {
  name: "list-of-foods",
  components: {
    FoodCard
  },
  data() {
    return {
      foods: [],
    };
  },
  async mounted() {
    const res = await axios.get('/foods')
    this.foods = res.data
  }
};
</script>
