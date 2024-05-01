
function func (one,two ) {
 
    if (one.length !== two.length) {
        console.log("ERROR");
    }
    let multiply = [];
    for (let i = 0; i < one.length; i++) {
       multiply.push (one[i] * two[i]);
    }

    return multiply;
   }
   console.log( func([9,12,15,34,23,25,77],[76,35,26,47,85,37,57]) )
   
   
