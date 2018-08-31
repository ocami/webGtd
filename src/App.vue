<template>
  <div>
    <un-test></un-test>

    <p>C'est parti!!!</p>

  </div>

</template>

<script>

  import UnTest from './components/test/test.vue'

  export default {
      name: 'app',
      components : {
          UnTest
      },
      data ()  {
          return {
              truc: 'untruc'
          }
      },
      computed:{
      }

  }
</script>

<style>
</style>
