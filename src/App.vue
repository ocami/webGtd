<template>
  <section>
      <test v-if="test"></test>

      <section>
          <span>tags : {{data.action.tags}}</span>
          <pre>locations : {{data.userData.locations}}</pre>
      </section>


      <b-row>
          <b-col cols="3">
              <menu-layout></menu-layout>
          </b-col>
          <b-col cols="9">
              <edit-layout></edit-layout>
          </b-col>
      </b-row>

  </section>
</template>

<script>

  import Test from './components/test/test.vue'
  import app_store from './store/app_store'
  import MenuLayout from './components/menu/MenuLayout.vue'
  import EditLayout from './components/edit/EditLayout.vue'

  export default {
      name: 'app',
      components : {
          Test,
          MenuLayout,
          EditLayout
      },
      data ()  {
          return {
            data: app_store.data,
            test: false
          }
      },
      computed:{
      }

  }
</script>

<style>
</style>
