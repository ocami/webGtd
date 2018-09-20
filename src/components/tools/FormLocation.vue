<template>
    <section>

        <div v-if="features.citycode" class="alert alert-secondary">
            <span>{{features.city}}</span>
            <button @click="editCity" class="float-right">X</button>
        </div>

        <vue-bootstrap-typeahead
                v-if="!features.citycode"
                class="mb-4"
                v-model="cityQuery"
                :data="cities"
                :serializer="item =>  item.nom +' - '+ item.departement.code"
                @hit="citySelected($event)"
                placeholder="Ville, Commune"
        />

        <div v-if="features.address" class="alert alert-secondary">
            <span>{{features.address}}</span>
            <button @click="editAddress" class="float-right">X</button>
        </div>



        <vue-bootstrap-typeahead
                v-if="selectedCity && !features.address"
                class="mb-4"
                v-model="addressQuery"
                :data="addresses"
                :serializer="item =>  item.properties.name"
                @hit="addressSelected($event)"
                placeholder="Adresse"
        />

    </section>
</template>

<script>

    import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
    import app_store from '../../store/app_store'


    export default {
        name: 'form-location',
        components: {
            VueBootstrapTypeahead
        },
        data() {
            return {
                cities: [],
                cityQuery: '',
                selectedCity: null,
                addresses: [],
                addressQuery: '',
                selectedAddress: null,
            }
        },
        computed: {
            features: {
                get: function () {
                    return app_store.data.currentUserData.features
                },
                set: function (newValue) {
                    app_store.data.currentUserData.features = newValue
                }
            }
        },
        watch: {
            cityQuery(newCityQuery) {
                axios.get(`https://geo.api.gouv.fr/communes?nom=${newCityQuery}&boost=population&fields=departement`)
                    .then((res) => {
                        this.cities = res.data
                    })
            },
            addressQuery(newAddressQuery) {
                if (this.selectedCity && newAddressQuery !== '') {
                    axios.get(`https://api-adresse.data.gouv.fr/search/?citycode=${this.selectedCity.code}&q=${newAddressQuery}`)
                        .then((res) => {
                            this.addresses = res.data.features
                        })
                }
            },
        },
        methods: {
            editCity: function () {
                console.log('editCity')
                this.selectedCity = null
                this.selectedAddress = null
                this.addressQuery = ''
                this.features = app_store.refreshLocationFeatures()
            },
            editAddress : function () {
                console.log('> formLocation.vue/editAddress')
                this.selectedAddress = null
                this.addressQuery = ''
                this.features.address = null
            },
            citySelected: function (event) {
                console.log('citySelected')
                this.selectedCity = {query: this.cityQuery, code: event.code, name: event.nom}
                axios.get(`https://api-adresse.data.gouv.fr/search/?citycode=${this.selectedCity.code}&q=${this.selectedCity.name}&type=municipality&limit=1`)
                    .then((res) => {
                        this.features.idApi = res.data.features[0].properties.id
                        this.features.city = res.data.features[0].properties.name
                        this.features.citycode = res.data.features[0].properties.citycode
                        this.features.x = res.data.features[0].geometry.coordinates[0]
                        this.features.y = res.data.features[0].geometry.coordinates[1]
                        this.$emit('location-change', this.features)
                        this.cities = []
                        this.cityQuery = ''
                    })
            },
            addressSelected: function (event) {
                console.log('addressSelected')

                this.features.idApi = event.properties.id
                this.features.address = event.properties.name
                this.features.postcode = event.properties.postcode
                this.features.x = event.geometry.coordinates[0]
                this.features.y = event.geometry.coordinates[1]
                this.$emit('location-change', this.features)
                this.addresses = []
                this.addressQuery = ''
            }

        }
    }
</script>

<style scoped>

</style>