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
import useTransactions from '../uses/fetchTransactions';
export default {
  watch: {
  },
  setup() {
    const { transactions, error, fetchAll } = useTransactions();
    fetchAll();
    return { transactions, error };
  },
};
</script>
