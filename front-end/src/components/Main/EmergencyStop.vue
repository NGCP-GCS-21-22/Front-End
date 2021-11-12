<template>
  <div>
  <b-button @click="toggleModal">Launch demo modal</b-button>

  <b-modal v-if="showModal" id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      console.log("clicked!")
      this.showModal = true;
    }
  }
};
</script>

<style>
</style>