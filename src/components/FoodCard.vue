<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-orange-500"
  >
    <img
      :src="food.photo"
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
      class="w-full h-48 object-cover align-middle rounded-t-lg"
    />
    <blockquote class="relative p-4 mb-4">
      <h4 class="text-xl font-bold text-white">
        {{ food.name }}
      </h4>
      <p class="text-md font-light mt-2 text-white">
        $ {{ food.price }}
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "food-card",
  props: ['food'],
};
</script>