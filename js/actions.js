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
                this.action= { index:0, id:0, name: '', content: '', status: 0, isActive: false  };
        }
    }
}

class AppStore {
    constructor () {

        this.receipt = [
            { index:0, id: 0, name: 'receipt-popo', content: 'receipt-content popo', status: 1, isActive: false},
            { index:0, id: 1, name: 'receipt-lolo', content: 'receipt-content lolo', status: 1, isActive: false},
            { index:0, id: 1, name: 'receipt-roro', content: 'receipt-content roro', status: 1, isActive: false},
        ]
        this.todo = [
            { index:0, id: 0, name: 'todo-popo', content: 'tod ocontent popo', status: 2, isActive: false},
            { index:0, id: 1, name: 'todo-lolo', content: 'todo content lolo', status: 2, isActive: false},
            { index:0, id: 2, name: 'todo-roro', content: 'todo content roro', status: 2, isActive: false},
        ]
        this.done = [
            { index:0, id: 0, name: 'done-popo', content: 'content popo', status: 3, isActive: false},
            { index:0, id: 1, name: 'done-lolo', content: 'content lolo', status: 3, isActive: false},
            { index:0, id: 3, name: 'done-roro', content: 'content roro', status: 3, isActive: false},
        ]
        this.incubation =  [
            { index:0, id: 0, name: 'incubation-popo', content: 'content popo', status: 4, isActive: false},
            { index:0, id: 1, name: 'incubation-lolo', content: 'content lolo', status: 4, isActive: false},
            { index:0, id: 4, name: 'incubation-roro', content: 'content roro', status: 4, isActive: false},
        ]
        this.destroy = [
            { index:0, id: 0, name: 'destroy-popo', content: 'destroy content popo', status: 5, isActive: false},
            { index:0, id: 1, name: 'destroy-lolo', content: 'destroy content lolo', status: 5, isActive: false},
            { index:0, id: 5, name: 'destroy-roro', content: 'destroy content roro', status: 5, isActive: false},
        ]

        this.data = {
            action: this.todo[0],
            actions: {
                receipt: this.receipt,
                todo: this.todo,
                done: this.done,
                incubation: this.incubation,
                destroy: this.destroy,
            },
            control:{
                seen: 2,
                actionCreated: null
            }
        }
    }

    switch(index){
        console.log(this.data.actions.receipt[index])
        this.data.action = this.data.actions.receipt[index]
        this.data.actions.todo.push(this.data.action)
        this.data.actions.receipt.splice(index, 1)
    }

    initAction(){
        this.data.action = new Action('todo');
    }

    changeSeen(){
        this.data.control.seen = 'baba';
    }
}
