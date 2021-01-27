const { async } = require("regenerator-runtime");

console.log('Module.js');

async function start() {
    return await Promise.resolve('async d')
}

start().then(console.log)