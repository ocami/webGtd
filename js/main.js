let app_store = new AppStore();



new Vue({

    el: '#app',
    components : {
        'actions-list': ActionsList,
        'actions-edit-layout': ActionsEditLayout,
    },
    data:
        function () { return { data: app_store.data}
        },
    computed:{
        action: function () { return this.data.action},
        actions: function () { return this.data.actions},
        control: function () { return this.data.control},
        receipt: function () { return this.data.actions },
        test: function () { return this.data.test},
        tags: function () { return this.data.tags}
    },
    methods: {
        createIsActive : function (status) {
            this.actionCreated = status
        },
        saveEdit : function () {
            app_store.saveEdit()
        },

        receiptEdit: function (index) {
            app_store.receiptAddEdit(index)
        },
        receiptSwitch : function (index) {
            receiptSwitch(index)
        },
        receiptAddEdit : function (){
           app_store.receiptAddEdit()
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