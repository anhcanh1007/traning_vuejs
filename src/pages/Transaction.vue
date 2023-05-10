<template>
  <h1>This is transaction</h1>
  <div v-if="transactions.length">
    <div v-for="transacsiton in transactions" :key="transacsiton.id">
      <router-link
        :to="{
          name: 'transaction-detail-route',
          params: { id: transacsiton.id },
        }"
        ><h1>{{ transacsiton.name }}</h1></router-link
      >
      <h3>Price : {{ transacsiton.price }}</h3>
    </div>
  </div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else>Loading transactions</div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const transactions = ref([]);
    const error = ref(null);

    const fetchAll = async () => {
      try {
        const response = await fetch("http://localhost:3000/transactions")

        if(!response.ok) throw new Error("Something went wrong")

        transactions.value = await response.json();
      } catch (err) {
        error.value = err;
        console.log(error.value)
      }
    }
    fetchAll()
    return { transactions, error }
  }
};
</script>
