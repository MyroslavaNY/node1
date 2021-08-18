function test(){
    console.log('Call');
}
test();
module.exports = {
    greeting:function (name) {
        console.log('Hello', name)
    }
}

