
<template>
  <!--Remove this file later -->
  <div>
    <b-button
      v-b-modal.modal-1
      variant="primary"
      style="width: 230px; height: 50px"
    >
      <b-icon icon="exclamation-circle-fill" variant="white"></b-icon> TEST
      BUTTON
    </b-button>

    <b-modal id="modal-1b" title="Stage Selection">
      <p>This is Stage Selection</p>
      <template #modal-footer="{ ok, cancel }">
        Emulate built in modal footer ok and cancel button actions
        <b-button size="sm" variant="success" @click="ok()">Yes</b-button>
        <b-button size="sm" variant="danger" @click="cancel()">No</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>