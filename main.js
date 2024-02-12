// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

console.log(this);
let obj = {
    name: "abhishek",
    test: function(){
        console.log(this);
        function a(){
            console.log(this);// In this case the this refer to the global object because the a function is executed without any object means it is executed on the global context.
        }
        a();
    }
};

obj.test();