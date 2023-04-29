let inputBox=document.getElementById("counter");

function onClick(btn){
    // let inputBox=document.getElementById("counter");
    let counter=parseInt(inputBox.value);
    if(btn.value=="+"){
        counter++;
    }
    else if(btn.value=="-" && counter>0){
        counter--;
    }
    else{
        counter=0;
    }
    inputBox.value=counter;
}