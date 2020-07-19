var x,y;
var operation=prompt("Enter operation name in samall letters");
var val=prompt("Enter two values with space");
var values=val.split(" ");
switch (operation) {
    case 'addition':
        var result=+values[0] + +values[1];
        console.log(result);
        break;
    case 'subtraction':{
        var result=+values[0] - +values[1];
        console.log(result);
        break;
    }
    case 'multiplication':{
        var result=+values[0] * +values[1];
        console.log(result);
        break;
    }
    case 'division':{
        var result=+values[0] / +values[1];
        console.log(result);
        break;
    }
    case 'percentage':{
        var result=+values[0] % +values[1];
        console.log(result);
        break;
    }
    case 'root':{
        var result=Math.sqrt(+values[0],+values[1])
        console.log(result);
        break;
    }
    
    default:
        console.log("This operation not present");
        break;
}
