function myFunction(){
    var myCon = document.getElementById('con').value;
    //you should write letters 
    let result = /[A-Za-z]/g;
    if(result.test(myCon)){
        document.getElementById('mess1').style.color='blue';
        document.getElementById('mess1').innerHTML='valid';
    }else{
        document.getElementById('mess1').style.color='red';
        document.getElementById('mess1').innerHTML='not valid';
    }

}

function tell(){
    da=document.getElementById('nam').value
    document.getElementById('hi').innerHTML=`Thank You ${da} .`;
    po = document.getElementById('pro').value;
    on = document.getElementById('from').value;
    to = document.getElementById('to').value;
    document.getElementById('hi').innerHTML=`Thank You ${da} , We will transport your ${po} from ${on} to ${to}.`;
}

function phonevalidation(){
    let phone = document.getElementById('phone').value;
    let regex = /[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{2}/;
    if(regex.test(phone)){
        document.getElementById('vali').style.color='green';
        document.getElementById('vali').innerHTML='✓✓';
    }else{
        document.getElementById('vali').innerHTML='please enter the phe number in the correct way';
    }
    
}