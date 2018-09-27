<template>
    <div>
        <section>
            <date-picker :config="fDateOptions" v-model="date"></date-picker>
            <b-row>
                <b-col cols="6">
                    <date-picker :config="fTimeOptions" v-model="time"></date-picker>
                </b-col>
                <b-col cols="6">
                    <b-form-group>
                        <b-form-radio-group
                                buttons
                                stacked
                                button-variant="outline-primary"
                                size="md"
                                v-model="expiry"
                                :options="expiryRadioOptions.options"
                                name="radioBtnOutline" />
                    </b-form-group>

                    <b-button @click="submit">Valider</b-button>
                    <b-button @click="destroy">Supprimer</b-button>

                </b-col>
            </b-row>


            <p>{{dateTime}}</p>
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
                    format: 'YYYY-MM-DD',
                    inline: true,
                },
                fTimeOptions : {
                    locale: 'fr',
                    format: 'LT',
                    inline: true,
                },
                expiryRadioOptions:{
                    selected: app_store.data.currentAction.dateTime.expiry,
                    options: [
                        { text: 'Programmé', value: false },
                        { text: 'Echéance', value: true },
                    ]
                },
            }
        },
        computed:{
            dateTime: function () {
                return this.data.currentDateTime
            },
            date: {
                get: function () {
                    return this.dateTime.date
                },
                set: function (newValue) {
                    this.dateTime.date = newValue
                }
            },
            time: {
                get: function () {
                    return this.dateTime.time
                },
                set: function (newValue) {
                    this.dateTime.time = newValue
                }
            },
            expiry: {
                get: function () {
                    return this.dateTime.expiry
                },
                set: function (newValue) {
                    this.dateTime.expiry = newValue
                }
            },

        },
        props:{
            tagPosition : Number
        },
        methods: {
            submit() {
                console.log('> ModalDate.vue/submit')
                let dt = this.dateTime.date +' '+ this.dateTime.time
                app_store.dateManualEdit(dt, this.dateTime.expiry)
                this.$emit('submit')
            },
            destroy : function () {
                console.log('ModalWhith/destroy')
                app_store.tagSelected('',this.tagPosition)
                this.$emit('submit')
            },
        }
    }
</script>

<style>
</style>
