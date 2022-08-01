<template>
  <div>
    <a
      class="text-blueGray-500 block"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="items-center flex">
        <span
          class="w-12 h-12 text-sm text-white inline-flex items-center justify-center rounded-full"
        >
          <i class="fas fa-user text-lg leading-lg" />
          <span class="lg:hidden inline-block ml-2">Usuario</span>
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <a
        @click.prevent="onLogout"
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Salir de sesión
      </a>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

import axios from 'axios'
import router from '@/router'
import store from '@/store'

export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
    async onLogout() {
      await axios.post('auth/logout')
      store.dispatch('logout')
      router.push('/auth/login')
    }
  },
};
</script>
