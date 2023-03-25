function name_mau(numb1, numb2){
let bright = numb1+numb2;
let cat = bright *5;
return cat
}

let variable = name_mau(8,8)

let dog = name_mau(9,9)

let bread = name_mau(15,12)



function string(food){
    if(food >=10){ 
        return `i'm happy`;
    } else {
        return `not enough`;
    }
    
}
    
let happy_string = string(true);
let enough_string = string(false);
let strong_enough = string(true);