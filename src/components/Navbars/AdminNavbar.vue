<template>
  <!-- Navbar -->
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-orange-600 text-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="#"
          >
            Manzana Verde
          </a>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <router-link :to="`/cart`" class=" px-3 py-2 flex items-center text-xs uppercase font-bold">
              <span class="relative inline-block">
                <i class="fas fa-shopping-cart text-lg leading-lg" />
                <span
                    class="absolute -top-1 -right-5 px-2 py-1 text-xs font-bold leading-none text-red-100 transform bg-red-600 rounded-full">
                    {{ $store.state.carts.length }}
                </span>
              </span>

              <span class="lg:hidden inline-block ml-2">Carro de compras</span>
            </router-link>
          </li>

          <li class="flex items-center">
            <user-dropdown />
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- End Navbar -->
</template>

<script>

import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
  data() {
    return {
      navbarOpen: false
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    UserDropdown
  }
};
</script>
