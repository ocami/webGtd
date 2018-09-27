<template>
    <section>
        <h2 v-if="seen !== 'hello'">{{listName}}</h2>
        <form-layout v-if="seen === 'edit'"></form-layout>
        <SearchLayout v-if="seen === 'search'"></SearchLayout>
        <empty v-if="seen === 'empty'"></empty>
        <hello v-if="seen === 'hello'"></hello>
    </section>
</template>

<script>

    import app_store from '../../store/app_store'
    import Control_store from '../../store/Control_store'
    import FormLayout from './form/FormLayout.vue'
    import SearchLayout from './search/SearchLayout.vue'
    import Empty from './empty/Empty.vue'
    import Hello from './empty/Hello.vue'

    export default {
        name: 'edit-layout',
        components : {
            FormLayout,
            SearchLayout,
            Empty,
            Hello
        },
        data ()  {
            return {
                data : app_store.data,
                controlData : Control_store.data
            }
        },
        computed:{
            seen: function () {
                return this.controlData.editSeen
            },
            listName: function () {
                return this.data.currentList.name
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>