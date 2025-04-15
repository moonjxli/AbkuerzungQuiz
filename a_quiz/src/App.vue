<template>
  <h1> Abkürzung - Quiz </h1>
  <hr>
  <FragenCom></FragenCom>
</template>

<script>

  import FragenCom from '@/components/FragenCom.vue';

export default {
  name: 'App',
  components: {
    FragenCom,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

body {
  background-color: #2B2B2B;
}

h1 {
  color: white;
  text-align: center;
  font-size: 50px;
  font-family: "Source Sans 3", sans-serif;
}

hr {
  width: 1050px;
  margin-bottom: 70px;
}
</style>
