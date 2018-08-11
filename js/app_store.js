class Action{
    constructor(status){

        switch (status){
            case 'receipt':
                this.action= { index:0, id:0, name: 'receipt', content: '', status: 1, isActive: false  };
                break;

            case 'todo':
                this.action= { index:0, id:0, name: 'todo', content: '', status: 2, isActive: false  };
                break;

            default :
                this.action= { index:0, id:0, name: 'dddddddddddddd', content: '', status: 0, isActive: false  };
        }
    }
}

class AppStore {
    constructor () {

        this.receipt = {
            name: 'receipt',
            toString: 'Réception',
            toSwitch: 'todo',
            acceptSwitch: {todo: 'true', done:true, incubation:true, destroy:true},
            list:  [
                { index:0, id: 0, name: 'receipt-popo', content: 'receipt-content popo', status: 'receipt', isActive: false, visible: true,
                    tags:{
                        location: null
                    }},
                { index:0, id: 1, name: 'receipt-lolo', content: 'receipt-content lolo', status: 'receipt', isActive: false, visible: true,
                    tags:{
                        location: null
                    }},
                { index:0, id: 2, name: 'receipt-roro', content: 'receipt-content roro', status: 'receipt' , isActive: false, visible: true,
                    tags:{
                        location: null
                    }},
            ]
        }
        this.todo = {
            name: 'todo',
            toString: 'A faire',
            toSwitch: 'done',
            acceptSwitch: {todo: false, done: true, incubation: true, destroy: true},
            list: [
                {index: 0, id: 0, name: 'todo-popo', content: 'tod ocontent popo', status: 'todo', isActive: false, visible: true,
                    tags:{
                        location: 'locationTest'
                    }},
                {index: 0, id: 1, name: 'todo-lolo', content: 'todo content lolo', status: 'todo', isActive: false, visible: true,
                    tags:{
                        location: null
                    }},
                {index: 0, id: 2, name: 'todo-roro', content: 'todo content roro', status: 'todo', isActive: false, visible: true,
                    tags:{
                        location: null
                    }},
            ]
        }
        this.done = {
            name: 'done',
            toString: 'Fait',
            toSwitch: 'destroy',
            acceptSwitch: {todo: true, done: false, incubation: false, destroy: true},
            list: [
                {index: 0, id: 0, name: 'done-popo', content: 'content popo', status: 'done', isActive: false, visible: true,
                    tags:{
                        location: null
                    }},
                {index: 0, id: 1, name: 'done-lolo', content: 'content lolo', status: 'done', isActive: false, visible: true,
                    tags:{
                        location: null
                    }},
                {index: 0, id: 3, name: 'done-roro', content: 'content roro', status: 'done', isActive: false, visible: true,
                    tags:{
                        location: null
                    }},
            ]
        }
        this.incubation = {
            name: 'incubation',
            toString: 'Incubation',
            toSwitch: 'todo',
            acceptSwitch: {todo: true, done: false, incubation: false, destroy: true},
            list: [
                {
                    index: 0,
                    id: 0,
                    name: 'incubation-popo',
                    content: 'content popo',
                    status: 'incubation',
                    isActive: false
                },
                {
                    index: 0,
                    id: 1,
                    name: 'incubation-lolo',
                    content: 'content lolo',
                    status: 'incubation',
                    isActive: false
                },
                {
                    index: 0,
                    id: 4,
                    name: 'incubation-roro',
                    content: 'content roro',
                    status: 'incubation',
                    isActive: false
                },
            ]
        }
        this.destroy = {
            name: 'destroy',
            toString: 'Corbeille',
            toSwitch: 'todo',
            acceptSwitch: {todo: true, done: false, incubation: true, destroy: false},
            list: [
                {index: 0, id: 0, name: 'destroy-popo', content: 'destroy content popo', status: 'destroy', isActive: false, visible: true,
                    tags:{
                        location: null
                    }},
                {index: 0, id: 1, name: 'destroy-lolo', content: 'destroy content lolo', status: 'destroy',isActive: false, visible: true,
                    tags:{
                        location: null
                    }},
                {index: 0, id: 5, name: 'destroy-roro', content: 'destroy content roro', status: 'destroy', isActive: false, visible: true,
                    tags:{
                        location: null
                    }},
            ]
        }

        this.data = {
            action: this.todo.list[0],
            actions: {
                receipt: this.receipt,
                todo: this.todo,
                done: this.done,
                incubation: this.incubation,
                destroy: this.destroy,
            },
            control:{
                seen: '',
                actionCreated: false,
                actionChange: false,
                actionInput: { index:0, id:0, name: '', content: '', status: 0, isActive: false},
                curentIndex: 0
            },
            tags:{
                location:{
                    name: 'Lieux',
                    selected: '',
                    options: [
                        {text: 'Jardin', value: 'jardin'},
                        {text: 'Maison', value: 'maison'},
                        {text: 'Travail', value: 'travail'},
                    ]
                },
                context:{
                    name: 'Context',
                    selected: '',
                    options: [
                        {text: 'Tel', value: 'tel'},
                        {text: 'Mail', value: 'mail'},
                        {text: 'Déplacement', value: 'deplacement'},
                    ]
                }
            },
        }
    }

    receiptAddEdit  () {
        this.data.control.seen = 'receiptAddEdit'
        this.data.control.actionCreated = 'receipt';
        this.refreshAction('receipt')
    }

    inputChange (event, isTextarea) {

        if (!this.data.control.actionCreated)
            return

        if (!event.target.value)
            return

        if (isTextarea)
            if(!this.data.action.name)
                this.data.action.name = this.data.action.content.substring(0,30)+'...';

        switch (this.data.control.actionCreated){
            case '':
                break;

            case 'receipt':
                this.data.actions.receipt.list.push(this.data.action)
                this.data.control.actionCreated = ''
        }
    }

    actionEdit  (index, status){
        let list = this.getList(status).list
        let action = this.data.action
        action.isActive = false
        action = list[index]
        this.data.control.seen = status + 'Edit'
        action.isActive = true
        action.index = index
        this.data.action = action
        this.data.control.curentIndex = index
    }

    switch(listName,newListName,index){
        if(!index)
            index = this.data.control.curentIndex

        let list = this.getList(listName).list
        let newList = this.getList(newListName).list
        this.data.action.isActive = false
        this.data.action = list[index]
        this.data.action.status = newListName
        newList.push(this.data.action)
        list.splice(index, 1)

        let i = 0;
        let l = list.length;
        if(l){
            index < l ? i = index : i = index - 1;
            this.actionEdit(i,listName)
        }else {
            this.refreshAction()
            this.data.control.seen = 'empty'
        }
    }

    tagSelected(){
        this.data.action.tags.location = this.data.tags.location.selected
    }

    /*----------------------------------------------------------*/

    getList (status) {

        let a = this.data.actions

        switch (status){
            case 'receipt':
                return a.receipt;

            case 'todo':
                return a.todo;

            case 'done':
                return a.done;

            case 'incubation':
                return a.incubation;

            case 'destroy':
                return a.destroy;

            default :
                console.log('actions.js getList error')
        }
    }

    refreshInput  () {
        this.data.control.actionInput = new Action();
        this.data.control.actionCreated = false;
    }

    refreshAction  (status) {
        this.data.action = {index: 0, id: 0, name: '', content: '', status: status, isActive: false}
    }

    /*----------------------------------------------------------*/
    /*----------------------------------------------------------*/

    initAction(){
        this.data.action = new Action('todo');
    }

    changeSeen(){
        this.data.control.seen = 'baba';
    }

    getListToSwitch (status) {

        let a = this.data.actions

        switch (status){
            case 'receipt':
                return data = { list: a.todo, name: 'todo'}

            case 'todo':
                return data = { list: a.done, name: 'done'} ;

            case 'done':
                return data = { list: a.destroy, name: 'destroy'} ;

            case 'incubation':
                return data = { list: a.todo, name: 'todo'} ;

            case 'destroy':
                return data = { list: a.todo, name: 'todo'} ;

            default :
                console.log('actions.js getList error')
        }
    }

    saveEdit (){
        if(!this.data.control.actionInput.name)
            return

        this.actionAdd()
    }
        actionAdd () {
            let status = this.data.control.actionCreated
            let action = this.data.control.actionInput
            let list = this.getList(status)
            action.status = status
            list.push(action)
            this.refreshInput()
        }

        receiptSwitch  (index, list){
            let action = vm.actions.receipt[index]
            let listeToAdd =  getActionsList('todo')
            listeToAdd.push(action)
            vm.actions.receipt.splice(index, 1)
            action.status = 2
            let i = 0;
            let l = vm.actions.receipt.length;
            if(l){
                index < l ? i = index : i = index - 1;
                receiptEdit(i)
            }else {
                refreshAction()
                vm.seen = 'vide'
            }

        }



        todoEdit  (index){
            vm.action.isActive = false
            vm.seen = 2
            vm.action = actions.todo[index]
            vm.action.isActive = true
        }
        todoSwitch  (index){
            let action = vm.actions.todo[index]
            vm.actions.done.push(action)
            vm.actions.todo.splice(index, 1)
            action.status = 3
        }
        todoAddEdit  () {
            vm.seen = 'todoAddEdit'
            vm.action.isActive = false
        }
        todoAdd  () {
            vm.actionInput.status = 2
            vm.actions.todo.push(vm.actionInput)
            refreshInput()
        }


        doneEdit  (index){
            vm.action.isActive = false
            vm.seen = 2
            vm.action = vm.actions.done[index]
            vm.action.isActive = true
        }
        doneSwitch  (index){
            let action = vm.actions.done[index]
            vm.actions.todo.push(action)
            vm.actions.done.splice(index, 1)
            action.status = 2
        }

        incubationEdit  (index){
            console.log('incubationEdit :'+index)
        }
        incubationSwitch  (index){
            console.log('incubationSwitch :'+index)
        }

        destroyEdit  (index){
            console.log('destroyEdit :'+index)
        }
        destroySwitch  (index){
            console.log('destroySwitch :'+index)
        }


        
}
