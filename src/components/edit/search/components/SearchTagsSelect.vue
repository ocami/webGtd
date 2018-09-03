<template>
    <section>
        <h4>search-tags-select</h4>
        <search-modal-layout></search-modal-layout>
    </section>
</template>

<script>

    import app_store from '../../../../store/app_store'
    import SearchModalLayout from './modal/SearchModalLayout.vue'

    export default {
        name: 'search-tags-select',
        components : {
            SearchModalLayout
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