<template>
    <section>
        <b-button size="lg" variant="success" @click="open">Ajout rapide</b-button>

        <b-modal ref="speedAdd" id="speedAdd" hide-footer hide-header>
            <textarea v-model="content"  class="form-control" rows="12"></textarea>
            <b-button variant="success" @click="speedAdd">+</b-button>
            <b-button variant="success" @click="speedAdd(true)">Terminer</b-button>
            <b-button variant="danger" @click="close">Annuler</b-button>
        </b-modal>
        <!-- btutton + modal -->
    </section>
</template>

<script>

    import app_store from '../../../store/app_store'

    export default {
        name: 'speed-add',
        components : {

        },
        data ()  {
            return {
                data : app_store.data,
                content: ''
            }
        },
        computed:{
        },
        methods:{
            open: function () {
                this.$refs.speedAdd.show()
            },
            speedAdd: function (close) {
                console.log('> SpeedAdd.vue/speedAdd')
                if(this.content !== '')
                    app_store.speedAdd(this.content)
                if(close === true)
                    this.close()

                this.content = '';
            },
            close: function () {
                this.$refs.speedAdd.hide()
            }
        }
    }
</script>

<style scoped>

</style>