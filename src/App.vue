<template>
  <base-nav></base-nav>
  <router-view></router-view>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  data() {
    return {
    };
  },
  name: "App",
  components: {
    BaseNav: Nav,
  },
  created(){
    console.log()
  },
  methods: {
    
  },
};
</script>

