let checkBtn=false;
let flag=0;
let arrLNK=[];
let arrDPS=[];

function clickButt1(){
    if(checkBtn){ //если нажата другая кнопка (ДПС)
        let btn2=document.querySelector("#btn2");// красим в синий вторую , которая была нажата до этого
        btn2.style.backgroundColor='#31b5fc';

        let btn1=document.querySelector("#btn1"); // красим в оранж первую и выводим словами из массива 
        btn1.style.backgroundColor='#FF9900';
        document.getElementById("inputWord").innerHTML="Л Н К";
        let str="";
        for(let i of arrLNK){
            str+=i+", ";
        }
        document.getElementById("ListW").innerHTML=str;
        flag=1;

    }
    else{
        let btn1=document.querySelector("#btn1");
        btn1.style.backgroundColor='#FF9900';
        document.getElementById("inputWord").innerHTML="Л Н К";
        checkBtn=true;
        flag=1;
    }
}

function clickButt2(){
    if(checkBtn){
        let btn1=document.querySelector("#btn1");// красим в синий первую , которая была нажата до этого
        btn1.style.backgroundColor='#31b5fc';

        let btn2=document.querySelector("#btn2"); // красим в оранж вторую и выводим словами из массива 
        btn2.style.backgroundColor='#FF9900';
        document.getElementById("inputWord").innerHTML="Д П С";
        let str="";
        for(let i of arrDPS){
            str+=i+", ";
        }
        document.getElementById("ListW").innerHTML=str;
        flag=0;
    }
    else{

        let btn2=document.querySelector("#btn2");
        btn2.style.backgroundColor='#FF9900';
        document.getElementById("inputWord").innerHTML="Д П С";
        checkBtn=true;

    }
}

function Game(){
    let word, str=" ";

    word = document.getElementById("input").value;

    if(flag==1){ //если нажата левая кнопка с буквами 

        if(checking_letters(word) && word!="" && arrLNK.indexOf(word.toUpperCase())==-1 && word.length >=5){
            arrLNK.push(word.toUpperCase());

            for(let i of arrLNK){
                str+=i+", ";
            }
            document.getElementById("ListW").innerHTML=str;
            document.getElementById("Err").innerHTML="";
        }
        else{
            document.getElementById("Err").innerHTML="Данное слово не подходит";
        }
    }
    else{

        if(checking_letters(word) && word!="" && arrDPS.indexOf(word.toUpperCase())==-1 && word.length >=5){
            arrDPS.push(word.toUpperCase());

            for(let i of arrDPS){
                str+=i+", ";
            }
            document.getElementById("ListW").innerHTML=str;
            document.getElementById("Err").innerHTML="";
        }
        else{
            document.getElementById("Err").innerHTML="Данное слово не подходит";
        }
    }

    document.getElementById("input").value="";
}

function checking_letters(word){ // проверка на наличие букв в слове 

    if((word.indexOf('Л')!=-1 || word.indexOf('л')!=-1) && (word.indexOf('Н')!=-1 || word.indexOf('н')!=-1) && (word.indexOf('К')!=-1 || word.indexOf('к')!=-1)){
        return true;
    }
    else if((word.indexOf('Д')!=-1 || word.indexOf('д')!=-1) && (word.indexOf('П')!=-1 || word.indexOf('п')!=-1) && (word.indexOf('С')!=-1 || word.indexOf('с')!=-1)){
        return true;
    }
    else{
        return false;
    }
}

function Rules(){
    confirm("Даны несколько букв (начать можно с двух или с трёх). Необходимо придумать как можно больше слов, в которых встречаются эти буквы. Буквы можно менять местами.")
}

function NewGame(){
    window.location.reload();
}