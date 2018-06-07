let app_1 = new Vue({
    el: "#app-1",
    data: {
        show: true
    }
});

let app_2 = new Vue({
    el: "#app-2",
    data: {
        ingredients: ['meat', 'fruit', 'cookies'],
        persons: [
            {name: 'Bello', age: 19, color: 'red'},
            {name: 'Musa', age: 20, color: 'blue'}
        ]
    }
})