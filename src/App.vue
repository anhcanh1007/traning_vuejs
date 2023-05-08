<template>
  <Header></Header>
  <button
    type="button"
    @click="onToggleModal"
    class="btn btn-primary btn-success"
  >
    Toggle
  </button>
  <teleport to="body">
    <base-modal
      v-if="isShowModal"
      title="this is title"
      content=""
      theme="ex"
      @cancel="onToggleModal"
    >
      <label for="">password</label>
      <input type="password" name="" id="" />
      <template v-slot:header> this is header </template>
      <template v-slot:footer>
        <button @click="onToggleModal" class="btn btn-default btn-success">
          Cancel
        </button>
      </template>
    </base-modal>
  </teleport>
</template>

<script>
import Modal from "./components/Modal.vue";
import Header from "./components/Header.vue";
export default {
  data() {
    return {
      isShowModal: false,
    };
  },
  name: "App",
  components: {
    Header,
    BaseModal: Modal,
  },
  methods: {
    onChange() {
      this.$refs.hello.onTestRef();
    },
    onToggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
