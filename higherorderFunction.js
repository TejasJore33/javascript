

function oddOrEvenFactiory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(request =="even"){    
    return function(n){
    console.log((n%2==0));
    }
    return even;
    }else{
        console.log("Wrong request");
        
    }
}

let request = "even";