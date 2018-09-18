<template>
    <section>
        <vue-bootstrap-typeahead
                class="mb-4"
                v-model="cityQuery"
                :data="cities"
                :serializer="item =>  item.nom +' - '+ item.departement.code"
                @hit="citySelected($event)"
                placeholder="Ville, Commune"
                @input="setCity"
        />

        <vue-bootstrap-typeahead
                v-if="this.selectedCity"
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


    export default {
        name: 'form-location',
        components: {
            VueBootstrapTypeahead
        },
        data() {
            return {
                result: this.locationData,
                cities: [],
                cityQuery: this.locationData.cityQuery,
                selectedCity: this.locationData.cityCode,
                addresses: [],
                addressQuery: this.locationData.addressQuery,
                selectedAddress: null,

            }
        },
        computed: {},
        props: {
            locationData: Object
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
            setCity: function () {
                console.log('setCity')
                this.selectedCity = null
                this.selectedAddress = null
                this.addressQuery = '',
                    this.result = {
                        idApi: null,
                        cityQuery: null,
                        city: null,
                        citycode: null,
                        addressQuery: null,
                        address: null,
                        postcode: null,
                        x: 0,
                        y: 0
                    }
            },
            citySelected: function (event) {
                console.log('citySelected')
                this.selectedCity = {query: this.cityQuery, code: event.code, name: event.nom}
                axios.get(`https://api-adresse.data.gouv.fr/search/?citycode=${this.selectedCity.code}&q=${this.selectedCity.name}&type=municipality&limit=1`)
                    .then((res) => {
                        this.result.cityQuery = this.cityQuery
                        this.result.idApi = res.data.features[0].properties.id
                        this.result.city = res.data.features[0].properties.name
                        this.result.citycode = res.data.features[0].properties.citycode
                        this.result.x = res.data.features[0].geometry.coordinates[0]
                        this.result.y = res.data.features[0].geometry.coordinates[1]
                        this.$emit('location-change', this.result)
                    })
            },
            addressSelected: function (event) {
                console.log('addressSelected')

                this.result.addressQuery = this.addressQuery
                this.result.idApi = event.properties.id
                this.result.address = event.properties.name
                this.result.postcode = event.properties.postcode
                this.result.x = event.geometry.coordinates[0]
                this.result.y = event.geometry.coordinates[1]
                this.$emit('location-change', this.result)

            }
        }
    }
</script>

<style scoped>

</style>