let MonComponent = {
    template: `<div>
                    <button @click="switchAction">switch</button>
                    <button @click="initAction">initAction</button>
                    <button @click="seenChange">seenChange</button>
                    </div>`,
    methods: {
        switchAction : function () {

            app_store.switch(0)
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