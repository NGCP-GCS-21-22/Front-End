<template>
  
  <div>
    <b-row> Altitude </b-row>
    <div class="loadbar">
        
        <strong v-if="altitude>=390" class="bar" style='height:100%;'>{{ altitude }}</strong>
        <strong v-else-if="altitude <390 && altitude >=370 " class="bar" style='height:90%'>{{ altitude }}</strong>
        <strong v-else-if="altitude <370 && altitude >=300 " class="bar" style='height:75%'>{{ altitude }}</strong>
        <strong v-else-if="altitude <300 && altitude >=200 " class="bar" style='height:55%'>{{ altitude }}</strong>
        <strong v-else-if="altitude <200 && altitude >=100 " class="bar" style='height:20%'>{{ altitude }}</strong>
        <strong v-else-if="altitude <100 && altitude >=10 " class="bar" style='height:5%'>{{ altitude }}</strong>
        <strong v-else-if="altitude <10 && altitude >=0 " class="bar" style='height:0%'>{{ altitude }}</strong>
        </div>
   </div>
</template>

<script>
export default {
    props: {
        altitude: Number, 
    }
};
</script>

<style>
.loadbar
    {
         width:25px;
         height:150px;
         background-color:#fff;
         border:1px solid #ccc;
         position:relative; 
    }
    .bar
    {
        width:100%;
        display:block;        
        font-family:arial;
        font-size:12px; 
        background-color:#1931bb;
        color:#fff;       
        position:absolute;
        bottom:0;        
    }
</style>