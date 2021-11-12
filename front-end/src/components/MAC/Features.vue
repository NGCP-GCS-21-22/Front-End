<template>
  <!--<b-card style="width:790px; height:750px" title="Tray buttons">
    <div>
      <col>
        <row]>
          <b-button variant="primary" style="width: 230px; height: 100px">Button 1</b-button>
          <b-button variant="primary" style="width: 230px; height: 100px">Button 2</b-button>
          <b-button variant="primary" style="width: 230px; height: 100px">Button 3</b-button>
        </row>
        <row>
          <b-button variant="primary"style="width: 230px; height: 100px">Button 4</b-button>
          <b-button variant="primary"style="width: 230px; height: 100px">Button 5</b-button>
          <b-button variant="primary"style="width: 230px; height: 100px">Button 6</b-button>
        </row>
      </col>
    </div>
  </b-card>-->
  <b-container fluid="sm">
    <b-card>
      <div class="row">
        <b-col><b-button class="mb-4" variant="primary" style="width: 230px; height: 100px">Button 1</b-button></b-col>
        <b-col><b-button class="mb-4" variant="primary" style="width: 230px; height: 100px">Button 2</b-button></b-col>
        <div class="w-100"></div>
        <b-col><b-button class="mb-4"variant="primary" style="width: 230px; height: 100px">Button 3</b-button></b-col>
        <b-col><b-button class="mb-4"variant="primary" style="width: 230px; height: 100px">Button 4</b-button></b-col>
        <div class="w-100"></div>
        <b-col><b-button variant="primary" style="width: 230px; height: 100px">Button 5</b-button></b-col>
        <b-col><b-button variant="primary" style="width: 230px; height: 100px">Button 6</b-button></b-col>
      </div>
    </b-card>
  </b-container>

</template>

<script>
export default {};
</script>

<style>
</style>