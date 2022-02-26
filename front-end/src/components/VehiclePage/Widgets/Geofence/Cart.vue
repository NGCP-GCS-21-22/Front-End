<template>
  <b-card>
      <p v-for="(polygon, index) in polygons">
          Polygon {{ polygon.index + 1 }}
      </p>
  </b-card>
</template>

<script>
export default {
    props: {
        polygons: Array
    }
}
</script>

<style>

</style>