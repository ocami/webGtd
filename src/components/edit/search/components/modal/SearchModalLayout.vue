<template>
    <section>
        <h6>search-modal-layout</h6>
        <search-modal-date></search-modal-date>
        <search-modal-location></search-modal-location>
        <search-modal-with></search-modal-with>
    </section>
</template>

<script>

    import app_store from '../../../../../store/app_store'
    import SearchModalDate from './components/SearchModalDate.vue'
    import SearchModalLocation from './components/SearchModalLocation.vue'
    import SearchModalWith from './components/SearchModalWith.vue'

    export default {
        name: 'search-modal-layout',
        components : {
            SearchModalDate,
            SearchModalLocation,
            SearchModalWith
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