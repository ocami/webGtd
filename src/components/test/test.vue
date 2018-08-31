<template>
    <section>
        <p>Le Test</p>
        <date-picker :config="options" v-model=selected></date-picker>
    </section>
</template>

<script>

    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

    export default {
        name: 'test',
        components : {
            datePicker
        },
        data ()  {
            return {
                options : {
                    locale: 'fr',
                    format: 'DD/MM/YYYY',
                    inline: true,
                },
                selected : '28/08/2018'
            }
        },
        computed:{
        }

    }
</script>

<style scoped>

</style>