<template>
  <div class="loadbar">
      <strong class="bar" style='height:30%;'>30%</strong>
    </div>
</template>

<script>
export default {};
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
        background-color:#bb9319;
        color:#fff;       
        position:absolute;
        bottom:0;        
    }
</style>