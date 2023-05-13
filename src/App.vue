<template>
  <!-- <Navbar/>
  <Todos/> -->
  <Nav />
  <router-view></router-view>
</template>

<script>
// import Todos from './components/Todos.vue';
// import Navbar from './components/Navbar.vue';
import Nav from './components/Nav.vue';
export default {
  data() {
    return {
    };
  },
  name: "App",
  components: {
    Nav,
    // Todos,
    // Navbar,
  },
  created(){
    console.log()
  },
  methods: {
    
  },
};
</script>

<style>
/* #app{
  background: rgb(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
} */
</style>


