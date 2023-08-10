let input = document.getElementById('box');
let keys = document.querySelectorAll('button');

let string="";
let a= Array.from(keys);
a.forEach(button =>{
    button.addEventListener('click',(b) =>{
        if(b.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(b.target.innerHTML == 'C'){
            string ="";
            input.value = string;
        }
        else if(b.target.innerHTML == 'BACK'){
            string =string.substring(0,string.length-1);
            input.value = string;
        }
        else if(b.target.innerHTML == '%' ){
            string=string/100;
            input.value=string;
        }
        else{
            string += b.target.innerHTML;
            input.value = string;
        }
        
    })
})