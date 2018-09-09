<template>
    <section>
        <search-modal-interval
                v-if="data.currentSearch"
                @submit="closeSearchModal"
        ></search-modal-interval>
    </section>
</template>

<script>

    import app_store from '../../../../../store/app_store'
    import SearchModalInterval from './components/SearchModalInterval.vue'

    export default {
        name: 'search-modal-layout',
        components : {
            SearchModalInterval,
        },
        data ()  {
            return {
                data : app_store.data
            }
        },
        props:{
            tagName: String
        },
        methods:{
            closeSearchModal: function () {this.$emit('submit')}
        }
    }
</script>

<style scoped>

</style>