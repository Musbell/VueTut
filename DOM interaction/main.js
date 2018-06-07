let app_1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue!',
        link: "http://www.google.com",
        finishedLink: "<a href=' http://www.google.com'>Google</a>"
    },
    methods: {
        sayHello() {
            this.message = "How far";
            return this.message
        },
        changeMessage(e) {
            this.message = e.target.value
        },
    }
})

let app_2 = new Vue({
    el: '#app-2',
    data: {
        counter: 0,
        x: 0,
        y: 0,
        name: "Bello Musa",
        result: ''
    },
    methods: {
        increase(step, event){
            this.counter += step
            this.result = this.counter > 5? "Greater than 5" : "Smaller than 5"
        },
        updateCoordinates(e) {
            this.x = e.clientX;
            this.y = e.clientY;
        },
        alertMe() {
            alert('Alert!')
        }
    }
})

let app_3 = new Vue({
    el: "#app-3",
    data: {
        firstCounter: 0,
        secondCounter: 0
    },
    computed: {
        output() {
            console.log("Computed");
            return this.firstCounter > 5? "Greater than 5" : "Smaller than 5"
        }
    },
    watch: {
        firstCounter() {
            let vm = this;
            setTimeout(() => {
                vm.firstCounter = 0
            }, 2000)
        }
    },
    methods: {
        result() {
            console.log("Method");
            return this.firstCounter > 5? "Greater than 5" : "Smaller than 5"
        }
    }
})

let app_4 = new Vue({
    el: "#app-4",
    data: {
        attachRed: false,
        color: 'green'
    },
    computed: {
        divClasses() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    }
});

let app_5 = new Vue({
    el: "#app-5",
    data: {
        color: 'gray',
        width: 100
    },
    computed: {
        myStyle() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    }
})