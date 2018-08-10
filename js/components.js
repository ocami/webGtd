let MonComponent = {
    template: `<div>
                    <button @click="switchAction">switch</button>
                    <button @click="initAction">initAction</button>
                    <button @click="seenChange">seenChange</button>
                    </div>`,
    data:
        function () { return { data: app_store.data}
        },
    computed:{
        action: function () { return this.data.actions }
    },
    methods: {
        switchAction : function () {
            app_store.switch(0,'receipt','todo')
        },
        initAction : function () {
            app_store.initAction()
        },
        seenChange: function () {
            app_store.changeSeen()
        }


    }
}

let AutreComponent = {
    template: `<div>{{ action }}</div>`,
    data:
        function () { return { data: app_store.data}
        },
    computed:{
        action: function () { return this.data.action }
    }

}

let SwitchActionBtn = {
    template:`<div>
        <button class="ui"></button>
    </div>
    `
}

let ActionsList = {
    template:`<div>
        <h5>{{actions.toString}}</h5>
        <div
            v-for="(action, index) in actions.list"
            @click="actionEdit(index,actions.name)"
            :class="{'text-danger':action.isActive}"
            class="item-actions-list">

             <i
               :class="{
               'fa fa-play': action.status == 'receipt',
               'fa fa-check-circle': action.status == 'todo',
               'fa fa-reply': action.status == 'done',
               'fa fa-trash': action.status == 'incubation',
               'fa fa-recycle': action.status == 'destroy',
               }"
                @click.stop="switchAction(index,actions.name,actions.toSwitch)"
             ></i>

            {{ action.name }}
        </div>
    </div>`,
    props: {
        actions: Object
    },
    methods:{
        actionEdit: function (index, listName) {
            app_store.actionEdit(index, listName)
        },
        switchAction: function (index, listName, newListName) {
            app_store.switch(index, listName, newListName)
        }
    }
};


let MonTruc = {
    template: `<div> <h5>Mon truc</h5> </div>`
}

let ReceiptMenu = {

    components:{
        'switch-action-btn': SwitchActionBtn,
        'actions-list': ActionsList
    },
    template: `<div> 
        <switch-actions-btn></switch-actions-btn>
        <h5>receipt</h5>
        <actions-list
                v-bind:actions="actions.receipt"
                @edit="receiptEdit"
                @switch="receiptSwitch"
        ></actions-list>           
    </div>`
}

