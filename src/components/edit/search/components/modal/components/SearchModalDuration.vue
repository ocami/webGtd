<template>
    <section>
        <li>form-modal-duration</li>

        <b-row>
            <b-col cols="5">
                <input v-model="min" class="form-control">
            </b-col>
            <b-col cols="2"> < </b-col>
            <b-col cols="5">
                <input v-model="max" class="form-control">
            </b-col>
        </b-row>

        <b-button @click="submit">Valider</b-button>
        <b-button @click="destroy">Supprimer</b-button>
    </section>
</template>

<script>

    import app_store from '../../../../../../store/app_store'

    export default {
        name: 'form-modal-duration',
        components : {

        },
        data ()  {
            return {
                min : app_store.getOnceSearchTag('duration').min,
                max : app_store.getOnceSearchTag('duration').max
            }
        },
        computed:{
        },
        methods:{
            submit : function () {
                console.log('>searchModalDuration/submit')
                app_store.intervalSearch('duration',this.min,this.max)
                this.$emit('submit')
            },
            destroy : function () {
                app_store.intervalSearchDestroy('duration')
                this.$emit('submit')
            }
        }
    }
</script>

<style scoped>

</style>