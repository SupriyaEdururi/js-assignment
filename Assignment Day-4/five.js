var sales=prompt("Enter sales");
if(sales>=0 && sales<=5000){
    commission=sales*0.02;
    console.log(`Total commission earned by employee ${commission}`);
}
else if(sales>=5001 && sales<=10000){
    commission=sales*0.05;
    console.log(`Total commission earned by employee ${commission}`);
}
else if(sales>=10001 && sales<=15000){
    commission=sales*0.07;
    console.log(`Total commission earned by employee ${commission}`);
}
else{
    commission=sales*0.1;
    console.log(`Total commission earned by employee ${commission}`);
}
