<template>
    <section>
        <span>currentList</span>
        <pre>{{currentList.sortTagDefault}}</pre>
        <hr/>
        <span>currentAction</span>
        <pre>{{currentAction.name}}</pre>
        <hr/>
        <!--<span>currentView</span>-->
        <!--<pre>{{currentView}}</pre>-->
        <!--<hr/>-->
        <!--<span>searchSeen</span>-->
        <!--<pre>{{controlData.searchSeen}}</pre>-->
        <!--<hr/>-->

        <!--<button @click="letest">TEST</button>-->


    </section>
</template>

<script>

    import app_store from '../../store/app_store'
    import actionsList_store from '../../store/ActionsList_store'
    import Action_store from '../../store/Action_store'
    import Control_store from '../../store/Control_store'

    export default {
        name: 'test',
        data ()  {
            return {
                result: 'result',
                actionsListData : actionsList_store.data,
                actionData : Action_store.data,
                controlData : Control_store.data
            }
        },
        computed:{
            actionsList : function () {
                return this.actionsListData.actionsList
            },
            currentList :function () {
                return this.actionsListData.currentList
            },
            currentAction : function () {
                return this.actionData.action
            },
            currentView : function () {
                return this.controlData.editSeen
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