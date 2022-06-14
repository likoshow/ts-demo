function show(x: {
    name: string;
}) {
    return x;
}

show({
    name: 'tom'
})

show({
    name: 'tom',
    age: 18
})

const tom = {
    name: 'tom',
    age: 18
}

show(tom)

export {}