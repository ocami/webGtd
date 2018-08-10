let app_store = new AppStore();

new Vue({

    el: '#app',
    components : {
        'mon-component': MonComponent,
        'autre-component': AutreComponent
    },
    data:
        function () { return { data: app_store.data}
        },
    computed:{
        action: function () { return this.data.action},
        actions: function () { return this.data.actions},
        control: function () { return this.data.control}
    },
})