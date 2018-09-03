<template>
    <section>
        <form-layout></form-layout>
        <SearchLayout></SearchLayout>
    </section>
</template>

<script>

    import app_store from '../../store/app_store'
    import FormLayout from './form/FormLayout.vue'
    import SearchLayout from './search/SearchLayout.vue'

    export default {
        name: 'edit-layout',
        components : {
            FormLayout,
            SearchLayout
        },
        data ()  {
            return {
                data : app_store.data
            }
        },
        computed:{
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>