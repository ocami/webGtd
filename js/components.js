
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
               'fa fa-trash': action.status == 'done',
               'fa fa-reply': action.status == 'incubation',
               'fa fa-recycle': action.status == 'destroy',
               }"
                @click.stop="switchAction(actions.name,actions.toSwitch,index)"
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
        switchAction: function (listName, newListName, index) {
            app_store.switch(listName, newListName, index)
        }
    }
};

let FormEdit = {
    template: `<div>
            <input v-model="action.name" @blur="inputChange($event)" class="form-control">
            <textarea v-model="action.content" @blur="inputChange($event, true)" class="form-control" rows="12"></textarea>
            <button class="btn btn-primary btn-block">Ajouter</button>
    </div>`,
    data:
        function () { return { data: app_store.data}
        },
    computed:{
        action: function () { return this.data.action},
        control: function () { return this.data.control}
    },
    methods:{
        inputChange: function (event, isTextarea) {
            app_store.inputChange(event, isTextarea)
        }
    }
}

let EditSwitchBtn = {
    template: `<div>
     <button 
        v-if="actions.acceptSwitch.todo"
        @click="switchAction(actions.name,'todo')"    
     >Je Fait</button>
     <button 
        v-if="actions.acceptSwitch.done"
        @click="switchAction(actions.name,'done')"    
        >J'ai Fait</button >
     <button 
        v-if="actions.acceptSwitch.incubation"
        @click="switchAction(actions.name,'incubation')"
        >Incubation</button>
        
     <button 
        v-if="actions.acceptSwitch.destroy"
        @click="switchAction(actions.name,'destroy')"
        >Corbeille</button>
    </div>`,
    props: {
        actions: Object
    },
    methods:{
        switchAction: function (listName, newListName) {
            app_store.switch(listName, newListName)
        }
    }
}

let ActionsEdit = {
    template:`<div>
        <hr>
        <h5>{{actions.name}}</h5>
        <edit-switch-bts v-bind:actions="actions"></edit-switch-bts>
        <form-edit></form-edit>
    </div>`,
    props: {
        actions: Object
    },
    components : {
        'edit-switch-bts': EditSwitchBtn,
        'form-edit': FormEdit
    }
}

let ActionsEditLayout = {

    template:`<div>
        <actions-edit v-if="control.seen == 'receiptEdit'" v-bind:actions="actions.receipt"></actions-edit>
        <actions-edit v-if="control.seen == 'todoEdit'" v-bind:actions="actions.todo"></actions-edit>
        <actions-edit v-if="control.seen == 'doneEdit'" v-bind:actions="actions.done"></actions-edit>
        <actions-edit v-if="control.seen == 'incubationEdit'" v-bind:actions="actions.incubation"></actions-edit>
        <actions-edit v-if="control.seen == 'destroyEdit'" v-bind:actions="actions.destroy"></actions-edit>
        <form-edit v-if="control.seen == 'receiptAddEdit'"></form-edit>
    </div>
`,
    props: {
        actions: Object
    },
    components : {
        'actions-edit': ActionsEdit,
        'form-edit': FormEdit
    }, data:
        function () { return { data: app_store.data}
        },
    computed:{
        control: function () { return this.data.control},
    },
}