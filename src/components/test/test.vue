<template>
    <section>
        <p>Le Test</p>
        <button @click="letest">TEST</button>
        
    </section>
</template>

<script>

    import app_store from '../../store/app_store'

    export default {
        name: 'test',
        data ()  {
            return {
                data : app_store.data,
                result: 'result'
            }
        },
        computed:{
        },
        methods:{
            letest : function () {
                app_store.dateManualAuto('@today')
            }
    
        }

    }
</script>

<style scoped>

</style>