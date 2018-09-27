<template>
    <section>
        <!--<pre>{{actionsList['todo']}}</pre>-->
        <!--<hr/>-->
        <pre>{{currentList.name}}</pre>
        <hr/>
        <!--<pre>{{currentActionsList.name}}</pre>-->


        <!--<button @click="letest">TEST</button>-->


    </section>
</template>

<script>

    import app_store from '../../store/app_store'
    import actionsList_store from '../../store/ActionsList_store'

    export default {
        name: 'test',
        data ()  {
            return {
                result: 'result',
                actionsListData : actionsList_store.data
            }
        },
        computed:{
            actionsList : function () {
                return this.actionsListData.actionsList
            },
            currentList :function () {
                return this.actionsListData.currentList
            }
        },
        methods:{
            letest : function () {

            },

        }
    }
</script>

<style scoped>

</style>