<template>
    <section>
        <h3>{{data.currentSearch.toString}}</h3>
        <b-row>
            <b-col cols="6">
                <label>Min</label>
                <input v-model="data.currentSearch.min" class="form-control">
            </b-col>
            <b-col cols="6">
                <label>Max</label>
                <input v-model="data.currentSearch.max" class="form-control">
            </b-col>
        </b-row>
        <p>{{message}}</p>
        <b-button @click="submit">Valider</b-button>
        <b-button @click="destroy">Supprimer</b-button>
    </section>
</template>

<script>

    import app_store from '../../../../../../store/app_store'

    export default {
        name: 'form-modal-interval',
        data ()  {
            return {
                data : app_store.data
            }
        },
        computed:{
            message: function () {
                if(this.data.currentSearch.name === 'duration')
                    return 'Exprimé en minutes'

                return null
            }
        },
        methods:{
            submit : function () {
                console.log('>searchModalInterval/submit')
                app_store.intervalSearch()
                this.$emit('submit')
            },
            destroy : function () {
                app_store.intervalSearchDestroy()
                this.$emit('submit')
            }
        }
    }
</script>

<style scoped>

</style>