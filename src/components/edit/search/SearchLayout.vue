<template>
    <section>
        <h2>search-layout</h2>
        <search-tags-select></search-tags-select>
    </section>
</template>

<script>

    import app_store from '../../../store/app_store'
    import SearchTagsSelect from './components/SearchTagsSelect.vue'

    export default {
        name: 'search-layout',
        components : {
            SearchTagsSelect
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