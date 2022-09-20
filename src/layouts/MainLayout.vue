<template>
  <main-header></main-header>
  <router-view />
  <main-footer></main-footer>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "@/components/headers/MainHeader.vue";
import MainFooter from "@/components/footers/MainFooter.vue";
export default defineComponent({
  components: {
    MainHeader,
    MainFooter,
  },
  setup() {},
});
</script>
  

  