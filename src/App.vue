<template>
    <section>
        <p>locationData</p>
        <pre>{{locationData}}</pre>


        <form-location
                :locationData="locationData"
                @location-change="locationChange"
                v-if="test"></form-location>

        <!--<b-row>-->
        <!--<b-col cols="3">-->
        <!--<menu-layout></menu-layout>-->
        <!--</b-col>-->
        <!--<b-col cols="9">-->
        <!--<edit-layout></edit-layout>-->
        <!--</b-col>-->
        <!--</b-row>-->

    </section>
</template>

<script>

    import Test from './components/test/model.vue'
    import app_store from './store/app_store'
    import MenuLayout from './components/menu/MenuLayout.vue'
    import EditLayout from './components/edit/EditLayout.vue'
    import FormLocation from './components/tools/FormLocation.vue'


    export default {
        name: 'app',
        components: {
            Test,
            MenuLayout,
            EditLayout,
            FormLocation,
        },
        data() {
            return {
                data: app_store.data,
                test: true,
                locationData: {
                    idApi: 'ADRNIVX_0000000357696764',
                    cityQuery: 'Amanlis - 35',
                    city: 'Amanlis',
                    cityCode: '35002',
                    addressQuery: "38 Néron",
                    address: "38 Néron",
                    postcode: '35150',
                    x: -1.477557,
                    y: 47.97989
                },
                // locationData: {
                //     idApi: null,
                //     cityQuery: '',
                //     city: null,
                //     citycode: null,
                //     addressQuery: '',
                //     address: null,
                //     postcode: null,
                //     x: 0,
                //     y: 0
                // }
            }
        },
        computed: {},
        methods: {
            locationChange: function (locationData) {
                console.log('locationChange')
                this.locationData = locationData
            }
        }

    }
</script>

<style>
</style>
