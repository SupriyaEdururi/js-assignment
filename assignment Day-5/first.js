var p_val=prompt("Enter positive value")
var arr=[];
for(let i=0;i<=p_val;i++){
    arr.push(i);
}
var cube_nums=arr.filter(arr=>arr%2!==0).map(arr=>arr**3);
document.write(cube_nums);
