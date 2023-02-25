function Checking_Quotes(str){ 
        
    count=0;
    for(let i = 0; i<str.length; i++){
        if(str[i]=="\'"){
            count++;
        }
    }
    
    if(count%2==0){return true;}
    else{return false;}
}
     
function Func(){
    let str;
    let result="";
    
    str = document.getElementById("number").value;
    
    if(Checking_Quotes(str)){
        for(let i=0; i<str.length; i++){

            if(str[i]=="\'"){
                let tmp="";
                while (str[i+1]!="\'"){
                    if(str[i+1]>='0' && str[i+1]<='9'){
                        tmp+=str[i+1].charCodeAt(0);
                    }
                    else{tmp+=str[i+1];}
                    i++;
                }
                result+=tmp;
                i++;
            }
            else{
                result+=str[i];
            }
        }
    
        document.getElementById("result").innerHTML = result; 
    }
    else{
        document.getElementById("result").innerHTML = str;
    }

    document.getElementById("number").value="";
    
}