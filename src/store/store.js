import { createStore } from "vuex";

const store = createStore({

  //state là nơi khai báo dữ liệu để hiển thị ra component
  state() {
    return {
      transaction: null,
      transactions: [],
      error: null
      };
  },

  //getters là nơi lọc dữ liệu để hiển thị ra component
  getters: {
    transactionsFiltered(state) {
      return state.transactions.filter((transaction) => transaction % 2 == 0);
    },
  },

  //mutations là nơi set dữ liệu vào state
  mutations: {
    setTransaction(state, transactionPayload) {
      state.transaction = transactionPayload;
    },
    setTransactions(state, transactionsPayload) {
      state.transactions = transactionsPayload
    },
    setError(state, error) {
      state.error = error
    }
  },

  //actions là nơi lấy dữ liệu về từ api và gửi dữ liệu đó lên mutations
  actions: {
    async fetchTransaction({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/transactions/" + id);
      const data = await res.json();
      commit("setTransaction", data);
    },

    async fetchAllTransaction({commit}) {
      try {
        const response = await fetch("http://localhost:3000/transactions");

        if (!response.ok) throw new Error("Something went wrong");

        const data = await response.json();

        commit("setTransactions", data);
      } catch (err) {
        commit("setError", err.message);
      }
    }


  },
});

export default store;
