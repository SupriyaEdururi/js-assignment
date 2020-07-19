var num= prompt("enter value");
function check(num) {
    num = num || " ";
    while(num!=0){
        if(num>=100){
            console.log(`${num}`);break;
        }
        else{
                var num=prompt("enter value");
            }
    }
    if(num===" "){
        console.log("\n");
    }
}
check(num);
