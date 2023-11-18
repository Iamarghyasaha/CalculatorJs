function solve(val){
    var  v = document.getElementById("res"); // v stores the ref of the dom selector
    v.value = v.value + val;// v.value is now the value inside the dom, and here val is conacatinating with the dom and creating the next one
    // console.log(v.value);
    // console.log(document.getElementById("res").value);
}
function result(){
    var  num1 = document.getElementById("res").value;
    var numbers="0123.456789/*-+%"
    for(let i of num1){
        if(numbers.includes(i)){
            var num2 = eval(num1);
        }
        else{
            document.getElementById("res").value="Error";
        }
    }
    document.getElementById("res").value= num2
    // if we dont't want to handel the character error we can write the below code also
    // var  num1 = document.getElementById("res").value;
    // var num2 = eval(num1);
    // document.getElementById("res").value= num2
}
function clr(){
    document.getElementById("res").value=" ";
    
}
function back(){
    var bk = document.getElementById("res");
    bk.value = bk.value.slice(0,-1)
}
