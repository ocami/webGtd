<template>
    <section>
        <h6>search-modal-layout</h6>
        <search-modal-date></search-modal-date>
        <search-modal-location></search-modal-location>
        <search-modal-contact></search-modal-contact>
    </section>
</template>

<script>

    import app_store from '../../../../../store/app_store'
    import SearchModalDate from './components/SearchModalDate.vue'
    import SearchModalLocation from './components/SearchModalLocation.vue'
    import SearchModalContact from './components/SearchModalContact.vue'

    export default {
        name: 'search-modal-layout',
        components : {
            SearchModalDate,
            SearchModalLocation,
            SearchModalContact
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