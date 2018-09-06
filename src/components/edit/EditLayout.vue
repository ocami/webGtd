<template>
    <section>
        <form-layout v-if="seen === 'edit'"></form-layout>
        <SearchLayout v-if="seen === 'search'"></SearchLayout>
        <empty v-if="seen === 'empty'"></empty>
    </section>
</template>

<script>

    import app_store from '../../store/app_store'
    import FormLayout from './form/FormLayout.vue'
    import SearchLayout from './search/SearchLayout.vue'
    import Empty from './empty/Empty.vue'

    export default {
        name: 'edit-layout',
        components : {
            FormLayout,
            SearchLayout,
            Empty
        },
        data ()  {
            return {
                data : app_store.data
            }
        },
        computed:{
            seen: function () {
                return this.data.control.editSeen
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>