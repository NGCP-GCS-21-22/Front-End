<template>
<b-container>
    <b-col>
        <b-row>{{ name }}</b-row>
        <b-row class="loadbar">
            <strong class="bar" style='height:30%;'>30%</strong>
        </b-row>
    </b-col>
    <b-col>

    </b-col>
</b-container>
    
      
</template>

<script>
export default {
    props:{
        name: String,
        unit: String
    }
};
</script>

<style>
.loadbar
    {
         width:40px;
         height:150px;
         background-color:#C4C4C4;
         border:5px solid rgb(26, 25, 25);
         position:relative; 
    }
    .bar
    {
        width:100%;
        display:block;        
        font-family:arial;
        font-size:12px; 
        background-color:#0D0384;
        color:#fff;       
        position:absolute;
        bottom:0;        
    }
</style>