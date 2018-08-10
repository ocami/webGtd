let app_store = new AppStore();



new Vue({

    el: '#app',
    components : {
        'mon-component': MonComponent,
        'autre-component': AutreComponent,
        'mon-truc': MonTruc,

        'receipt-menu': ReceiptMenu,
        'actions-list': ActionsList,
    },
    data:
        function () { return { data: app_store.data}
        },
    computed:{
        action: function () { return this.data.action},
        actions: function () { return this.data.actions},
        control: function () { return this.data.control},
        receipt: function () { return this.data.actions },
    },
    methods: {
        test: function ()
        {
            console.log('test')
        },
        createIsActive : function (status) {
            this.actionCreated = status
        },
        saveEdit : function () {
            app_store.saveEdit()
        },

        receiptEdit: function (index) {
            receiptEdit(index)
        },
        receiptSwitch : function (index) {
            receiptSwitch(index)
        },
        receiptAddEdit : function (){
            receiptAddEdit()
        },
        receiptAdd : function (){
            receiptAdd()
        },

        todoEdit: function (index) {
            todoEdit(index)
        },
        todoSwitch: function (index) {
            todoSwitch(index)
        },
        todoAddEdit : function (){
            todoAddEdit()
        },
        todoAdd : function (){
            todoAdd()
        },

        doneEdit: function (index) {
            doneEdit(index)
        },
        doneSwitch : function (index) {
            doneSwitch(index)
        },

        incubationEdit: function (index) {
            incubationEdit(index)
        },
        incubationSwitch : function (index) {
            incubationSwitch(index)
        },

        destroyEdit: function (index) {
            destroyEdit(index)
        },
        destroySwitch : function (index) {
            destroySwitch(index)
        },
    }
})