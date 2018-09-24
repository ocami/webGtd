<template>
    <section>
        <pre>{{data.currentAction.isActive}} / {{data.currentAction.id}}</pre>
        <pre>{{data.currentAction.dateTime}}</pre>
        <pre>{{data.currentAction.tags[2]}}</pre>
        <pre>{{data.currentAction.tags[6]}}</pre>
        <!--<pre>{{test}}</pre>-->
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
            test : function () {
                return app_store.getOnceActionTag('contact')
            }


        },
        methods:{

        }
    }
</script>



<style scoped>

</style>