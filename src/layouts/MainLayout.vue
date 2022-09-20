<template>
  <container>
    <Header></Header>
    <router-view />
    <!-- <main-footer></main-footer> -->
  </container>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/headers/MainHeader.vue";
// import MainFooter from "@/components/footer/Footer.vue";
export default defineComponent({
  components: {
    Header,
    // MainFooter
  },
  setup() {},
});
</script>
  

  