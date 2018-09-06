<template>
    <section>
        <!--<b>getOnceSelectTag : </b>
        <pre>{{getOnceSelectTag}}</pre>
        <b>getOnceSelectTagOption : </b>
        <pre>{{getOnceSelectTagOption}}</pre>
        <b>getOnceActionTag : </b>
        <pre>{{getOnceActionTag}}</pre>-->

        <pre>{{action}}</pre>
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
            getOnceSelectTag: function () {
                return app_store.getOnceSelectTag('location')
            },
            getOnceSelectTagOption :function () {
                return app_store.getOnceSelectTagOption('location','Rennes')
            },
            getOnceActionTag :function () {
                return app_store.getOnceActionTag('location')
            },
            action: function () { return this.data.action}

        },
        methods:{

        }
    }
</script>

<style scoped>

</style>