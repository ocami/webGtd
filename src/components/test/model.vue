<template>
    <section>
        <pre>{{curentSearch}}</pre>
        <pre>{{defaultSearch}}</pre>
        <pre>{{sortTagDefault}}</pre>
        <pre>{{sortAscDefault}}</pre>
    </section>
</template>

<script>

    import app_store from '../../store/app_store'

    export default {
        name: 'model',
        components : {

        },
        data ()  {
            return {
                data : app_store.data,
            }
        },
        computed:{
            defaultSearch: function () {
                return app_store.getList().defaultSearch[0]
            },
            curentSearch: function () {
                return app_store.getList().curentSearch[0]
            },
            sortTagDefault: function () {
                return app_store.getList().sortTagDefault
            },
            sortAscDefault: function () {
                return app_store.getList().sortAscDefault
            },

        },
        methods:{

        }
    }
</script>

<style scoped>

</style>