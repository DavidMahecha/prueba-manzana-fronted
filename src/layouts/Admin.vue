<template>
  <div>
    <admin-navbar />
    <section class="pt-16 relative bg-blueGray-100">
      <router-view />
    </section>
    <!-- <div class="relative bg-blueGray-100">
      <div class="px-4 md:px-10 mx-auto w-full m-24">
      </div>
    </div> -->
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
  },
};
</script>
