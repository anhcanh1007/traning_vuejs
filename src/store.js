import { createStore } from "vuex";

const store = createStore({

  //state là nơi khai báo dữ liệu để hiển thị ra component
  state() {
    return {
      transaction: null,
      transactions: [1, 2, 3, 4],
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
  },

  //actions là nơi lấy dữ liệu về từ api và gửi dữ liệu đó lên mutations
  actions: {
    async fetchTransaction({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/transactions/" + id);
      const data = await res.json();
      commit("setTransaction", data);
    },
  },
});

export default store;
