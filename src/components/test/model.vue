<template>
    <section>
        <pre>{{data.currentAction.isActive}} / {{data.currentAction.id}}</pre>
        <pre>{{data.currentLocation}}</pre>
        <button @click="addContact">addContact</button>
        <button @click="updateContact">updateContact</button>
        <button @click="getContactFB">getContactFB</button>
    </section>
</template>

<script>

    import app_store from '../../store/app_store'
    import repo from '../../repository/fireBase_repository'

    export default {
        name: 'model',
        components : {

        },
        data ()  {
            return {
                data : app_store.data,
                result: 'result'
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
            addContact: function () {
                app_store.addContact()
            },
            updateContact: function () {
                app_store.updateContact()
            },
            getContactFB: function () {
                app_store.getContactFB()
            }
        }
    }
</script>



<style scoped>

</style>