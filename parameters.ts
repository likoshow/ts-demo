function handler(arg: string) {
    // ....
}

function doSomething(callback: (arg1: string, arg2: number) => void) {
    callback('hello', 42);
}

// Expected error because 'doSomething' wants a callback of
// 2 parameters, but 'handler' only accepts 1
doSomething(handler);

export {}
