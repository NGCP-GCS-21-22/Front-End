<template>
    <div>
        <b-row> Speed </b-row>
        <div class="loadbar">
            <strong v-if="speed>=64" class="bar" style='height:100%;'>{{ speed }}</strong>
            <strong v-else-if="speed <64 && speed >=55 " class="bar" style='height:80%'>{{ speed }}</strong>
            <strong v-else-if="speed <55 && speed >=45 " class="bar" style='height:70%'>{{ speed }}</strong>
            <strong v-else-if="speed <45 && speed >=30 " class="bar" style='height:55%'>{{ speed }}</strong>
            <strong v-else-if="speed <30 && speed >=15 " class="bar" style='height:30%'>{{ speed }}</strong>
            <strong v-else-if="speed <15 && speed >=5 " class="bar" style='height:12%'>{{ speed }}</strong>
            <strong v-else-if="speed <5 && speed >=0 " class="bar" style='height:0%'>{{ speed }}</strong>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        speed: Number,
    }
};
</script>

<style>
.loadbar
    {
         width:25px;
         height:150px;
         background-color:#fff;
         border:2px solid rgb(48, 45, 45);
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