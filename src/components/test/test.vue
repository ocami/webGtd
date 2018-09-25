<template>
    <section>
        <pre>{{data.currentAction.dateTime}}</pre>
        <hr/>
        <pre>{{result}}</pre>
        <hr/>
        <pre>{{intervalResult}}</pre>

        <button @click="letest">TEST</button>
        <button @click="interval">interval</button>

    </section>
</template>

<script>

    import app_store from '../../store/app_store'

    export default {
        name: 'test',
        data ()  {
            return {
                data : app_store.data,
                result: 'result',
                intervalResult: 'intervalResult'
            }
        },
        computed:{
        },
        methods:{
            letest : function () {
                this.result = app_store.dateManualAuto('@today')
            },
            interval : function () {
                this.intervalResult = app_store.interval()
            }
        }
    }
</script>

<style scoped>

</style>