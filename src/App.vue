<template>
    <section>
        <test v-if="test"></test>

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

    import Test from './components/test/test.vue'
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
            }
        },
        computed: {},
        methods: {
        }

    }
</script>

<style>
</style>
