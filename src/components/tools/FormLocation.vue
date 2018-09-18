<template>
    <section>
        <p>FormLocation</p>
        <p>{{data.name}}</p>
    </section>
</template>

<script>

    import fls from '../../store/FormLocationStore'


    export default {
        name: 'form-location',
        components : {
        },
        data ()  {
            return {
                data: fls.data,
            }
        },
        computed:{
        }

    }
</script>

<style scoped>

</style>