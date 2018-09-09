<template>
    <section>
        <p>{{this.data.currentList.name}}</p>
        <p>{{this.data.currentAction.name}}</p>
        <pre>{{this.data.currentList.currentSearch[3]}}</pre>
        <pre>{{this.data.currentList.defaultSearch[3]}}</pre>
        <button @="saveTest">Save</button>
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
            currentSearch: function () {
                return app_store.getOnceSearchTag('priority')
            },
            sortTagDefault: function () {
                return app_store.getList().sortTagDefault
            },
            sortAscDefault: function () {
                return app_store.getList().sortAscDefault
            },

        },
        methods:{
            saveTest: function () {
                app_store.saveTest()
            }
        }
    }
</script>

<style scoped>

</style>