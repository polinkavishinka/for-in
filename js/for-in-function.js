

const object = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

const order = ["name", "level"];

console.log(object);

export default function orderByProps(object, order) {
    const arr = [];
    console.log(arr);
    
    order.forEach((elem) => {
        if (elem in object) {
        arr.push({
            key: elem,
            value: object[elem],
        });
        
    }
});
    
    const arr1 = [];
    for (const prop in object) {
        if (order && !order.includes(prop)) {
            arr1.push({
                key: prop,
                value: object[prop],
            });
        arr1.sort((a, b) => {
            if (a.key > b.key) {
                return 1;
            }
            if (a.key < b.key) {
                return -1;
            }
        return 0;
        });
    }
}
    console.log(arr);
    console.log(arr1);
    return [...arr, ...arr1];
}
console.log(orderByProps(object, order));