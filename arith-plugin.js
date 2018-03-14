function Arith(){
    this.stack = [0];
    this.lastPressed = "S";
}



Arith.prototype.getStackTop = function(){
    return this.stack[this.stack.length-1];
}

Arith.prototype.setStackTop = function(newVal){
    if(this.lastPressed == "S"){//init
        this.stack[0] = newVal;
        this.lastPressed = "N";
        //console.log(this.stack);
        //console.log("Starting calculator");
    }
    else if(this.lastPressed == "O"){//operator
        this.stack.push(newVal);
        this.lastPressed = "N"
        //console.log(this.stack);
        //console.log("pressing an operator")
    }  
    else if(this.lastPressed == "E"){//enter
        this.stack[this.stack.length-1] = newVal;
        this.lastPressed = "N"
        //console.log(this.stack);
        //console.log("pressed enter")
    }
    else if(this.lastPressed == "N"){//number
        this.stack[this.stack.length-1] += newVal
        //console.log(this.stack);
        //console.log("entering a number")
    }
    else if(newVal == -1){//clear
        //clear case
        //console.log("Resetting top of stack");
        this.stack[this.stack.length-1] = 0;
        //console.log(this.stack);
        //console.log("clearing the top of the stack")
    }
    //console.log("Setting top of stack to: " + this.stack[this.stack.length-1]);
}

Arith.prototype.enter = function(){
    this.stack.push(this.getStackTop())
    this.lastPressed = "E"
}

Arith.prototype.clear = function(){
    this.stack[this.stack.length-1] = 0;
}

Arith.prototype.addition = function(){
    var one = this.stack.pop() * 1;
    var two = this.stack.pop() * 1;
    this.stack.push((one + two).toString())
    this.lastPressed = "O"
    //console.log(this.stack);
    //console.log("perform addition operation")
}

Arith.prototype.subtraction = function(){
    var two = this.stack.pop() * 1;
    var one = this.stack.pop() * 1;
    this.stack.push((one - two).toString())
    this.lastPressed = "O"
    //console.log(this.stack);
    //console.log("perform subtraction operation")
}
Arith.prototype.multiplication = function(){
    var one = this.stack.pop()* 1;
    var two = this.stack.pop()* 1;
    this.stack.push((one * two).toString())
    this.lastPressed = "O"
    //console.log(this.stack);
    //console.log("perform multiplication operation")
}
Arith.prototype.division = function(){
    var two = this.stack.pop()* 1;
    var one = this.stack.pop()* 1;
    this.stack.push((one / two).toString())
    this.lastPressed = "O"
    //console.log(this.stack);
    //console.log("perform division operation")
}


Arith.opNames = ["+","-","*","/"];
Arith.opList = {"+" : Arith.prototype.addition, 
                "-" : Arith.prototype.subtraction, 
                "*" : Arith.prototype.multiplication, 
                "/" : Arith.prototype.division};