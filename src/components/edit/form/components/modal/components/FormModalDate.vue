<template>
    <div>
        <section>
            <date-picker :config="fDateOptions" v-model=action.dateTime.date></date-picker>
            <b-row>
                <b-col cols="6">
                    <date-picker :config="fTimeOptions" v-model=action.dateTime.time></date-picker>
                </b-col>
                <b-col cols="6">
                    <b-form-group>
                        <b-form-radio-group
                                buttons
                                stacked
                                button-variant="outline-primary"
                                size="md"
                                v-model=action.dateTime.expiry
                                :options="expiryRadioOptions.options"
                                name="radioBtnOutline" />
                    </b-form-group>

                    <b-button @click="submit">Valider</b-button>
                    <b-button @click="destroy">Supprimer</b-button>

                </b-col>
            </b-row>


            <p>{{action.dateTime}}</p>
        </section>
    </div>
</template>

<script>
    import app_store from '../../../../../../store/app_store'
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
    import moment from 'moment';

    export default {
        name:'form-modal-date',
        components: {
            datePicker
        },
        data ()  {
            return {
                data: app_store.data,
                fDateOptions : {
                    locale: 'fr',
                    format: 'DD/MM/YYYY',
                    inline: true,
                },
                fTimeOptions : {
                    locale: 'fr',
                    format: 'LT',
                    inline: true,
                },
                expiryRadioOptions:{
                    selected: app_store.data.action.dateTime.expiry,
                    options: [
                        { text: 'Programmé', value: false },
                        { text: 'Echéance', value: true },
                    ]
                }
            }
        },
        computed:{
            action: function () { return this.data.action},
        },
        props:{
            tagPosition : Number
        },
        methods: {
            submit() {
                console.log('ModalDate.vue/submit')
                app_store.dateEdit(this.tagPosition)
                this.$emit('submit')
            },
            destroy : function () {
                console.log('ModalWhith/destroy')
                app_store.dateTimeRefresh()
                app_store.tagSelected('',this.tagPosition)
                this.$emit('submit')
            }
        }
    }
</script>

<style>
</style>
