<template>
  <div>
    <div v-if="transaction">
      <h3>Name : {{ transaction.name }}</h3>
      <p>Price : {{ transaction.price }}</p>
    </div>
    <div v-else>Loading Transaction {{ $route.params.id }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    transaction() {
      return  this.$store.state.transaction
    },
    transactionsFiltered() {
      return this.$store.getters.transactionsFiltered;
    }
  },
  created() {
    this.$store.dispatch("fetchTransaction", {id: this.$route.params.id})
  },
};
</script>
