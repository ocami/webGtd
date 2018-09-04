<template>
  <section>
      <test v-if="test"></test>

      <section>
          <p>action tags : {{data.action.tags}}</p>
          <pre>data tags : {{data.tags}}</pre>
          <pre>Userlocations : {{data.userData.locations}}</pre>
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
          dataTags: function () {
              return app_store.getDataTags('location','Jardin')
          }
      }

  }
</script>

<style>
</style>
