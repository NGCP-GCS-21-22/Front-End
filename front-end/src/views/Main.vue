<template>
  <div id="app">
        <b-row>
          <br />
          <br />
        </b-row>
        <b-row class="noPadding">
                <br /> 
                <b-col align="left">
                  <!-- RESIZE IMG -->
                  <div id="image">
                    <b-img :src="require('../assets/map.png')" class="img-fluid" rounded alt='map pic'></b-img>
                  </div>
                </b-col> 
                <br />     
                <!-- ALIGN COLUMNS RIGHT A LITTLE BIT MORE AND MAKE WIDER -->
                <b-col cols="5">
                      <b-card title='ERU'>
                        <h1>ERU</h1>
                      </b-card>  
                      &nbsp;
                      <b-card title='MAC'>
                        <h1>MAC</h1>
                      </b-card> 
                      &nbsp;
                      <b-card title='MEA'>
                        <h1>MEA</h1>
                      </b-card> 
                </b-col>
        </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
