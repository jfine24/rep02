var stack = [];
var MyClass = {
    //these functions are the methods of the class
    stackIn: function() {
        stack.push(this.x);
        stack.push(this.y);
    },
    stackOut: function() {
        stack.pop();
        stack.push();
    },
    stackDisplay: function() {
        console.log(stack);
    }
}
function MyClassConstructor(x, y) {
    // all instances will have MyClass as their prototype
    var o = Object.create(MyClass);
    // create the fields of the new instance 
    o.x = x;
    o.y = y;
    return o;
}

var instance = MyClassConstructor(3, 6);
instance.stackDisplay();
instance.stackIn();
instance.stackDisplay();
instance.stackOut();
instance.stackDisplay();