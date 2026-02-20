// get value form input;
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value
}

// get input;
function getElementOrInput(id){
    const input = document.getElementById(id);
    return input;
}

// get innerTextByIdFrom Element;
function getInnerTextFromElement(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


// get current balance;
function getBalance(){
    const balanceElement = document.getElementById('current-balance');
    const value = Number(balanceElement.innerText);
    return value;
}

// set balance;
function setBalance(value){
     document.getElementById('current-balance').innerText=value;
}


// set value with empty;
function setValueWithEmpty(id){
    document.getElementById('add-amount').value ='';
}


// show only;
function showOnly(id){
    const addMoneySection = getElementOrInput('add-money-section');
    const cashOutSection = getElementOrInput('cash-out-section');
    const historySection = getElementOrInput('history');

    // // method 1;
    // // sob gula k  hide koro;
    // addMoneySection.classList.add('hidden');
    // cashOutSection.classList.add('hidden');


    // // id wala gula theke hidden class remove koro;

    // // method 1;
    // const selected =document.getElementById(id);
    // selected.classList.remove('hidden');

    // // method 2;
    // // getElementOrInput(id).classList.remove('hidden');



    
    // method 2; 
    addMoneySection.style.display='none';
    cashOutSection.style.display='none';
    historySection.style.display='none';
    
    document.getElementById(id).style.display='block';
}
