<template>
    <section>
        <h3>{{location.id}}</h3>

        <div v-if="!location.created">
            <span>Identifiant</span>
            <input

                    v-model="location.id"
                    class="form-control mb-4 id-data">
        </div>

        <form-location
                @location-change="locationChange"
        ></form-location>

        <label>Inclure à la liste</label>
        <input  type="checkbox" v-model="location.shortcut" >
        <br>
        <b-button @click="submit">Valider</b-button>
        <b-button @click="destroy">Supprimer</b-button>

        <a v-if="mapHref" :href="mapHref" target="_blank" class="float-right">
            <img border="0" alt="W3Schools" src="https://img.talkandroid.com/uploads/2017/12/google-maps-go.png"
                 width="50" height="50">
        </a>
    </section>
</template>

<script>

    import app_store from '../../../../../../store/app_store'
    import FormLocation from '../../../../../tools/FormLocation.vue'
    import bFormCheckboxGroup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group';
    import bFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox';

    export default {
        name: 'form-modal-location',
        components: {
            bFormCheckboxGroup,
            bFormCheckbox,
            FormLocation
        },
        data() {
            return {
                data: app_store.data,
                checked: true,
            }
        },
        computed: {
            location: {
                get: function () {
                    return app_store.data.currentUserData
                },
                set: function (newValue) {
                    app_store.data.currentUserData = newValue
                }
            },
            mapHref: function () {
                if (this.location.features.x && this.location.features.y)
                    return 'http://www.google.com/maps/place/' + this.location.features.y + ',' + this.location.features.x
                else
                    return null
            },
        },
        methods: {
            submit : function () {
                if (!this.location.id) {
                    this.$emit('errors','Vous devez indiquer un identifiant')
                    return
                }

                app_store.createUserData('location')
                this.$emit('submit')
            },
            destroy: function () {
                console.log('>FormModalLocation/destroy')
                app_store.deleteActionTag('location')
                this.$emit('submit')
            },
            setMap: function () {
                if (this.location.x && this.location.y)
                    this.map = true
                else
                    this.map = false
            },
            shortcutChange: function () {
                console.log('>FormModalLocation.vue/shortcutChange')
                if (this.location.created)
                    app_store.shortcutChange('location', this.location.id, this.location.shortcut)

            },
            locationChange: function (features) {
                console.log('>FormModalLocation.vue/locationChange')
                this.location.features = features
            }
        }
    }
</script>

<style scoped>


</style>