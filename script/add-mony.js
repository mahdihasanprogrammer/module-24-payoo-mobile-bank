
document.getElementById('addMoney-btn').addEventListener('click',
    function(event){
        event.preventDefault();

         //1 select a bank;
        const addMoneyBank = getValueFromInput("add-money-bank");
     
        if(addMoneyBank === 'Select A Bank') {
            return alert(' Please Select a bank')
        }

       
        // 2. get account number;
        const accountNumber = getValueFromInput('account-number');
        if(accountNumber.length !== 11){
            return alert('Invalid Number')
        }
        
        //3. get add amount;
        const addAmount = getValueFromInput('add-amount');

        if(addAmount.trim().length === 0){
            return alert('please Enter Amount to add')
        }
        
        //4. get current balance;
        const currentBalance = getBalance();

        //5. get new balance;
        const newBalance = currentBalance + Number(addAmount);
      
        //6. get pin and verify
        const addMoneyPin = getValueFromInput('addMoney-pin');

        if(Number(addMoneyPin) === 5024){
            alert(`
            Add Money ${ Number(addAmount)} taka successfully 
            from ${addMoneyBank}
            at ${new Date().toLocaleString('en-GB')}`);

            // empty add money value;
            setValueWithEmpty('add-money');

            // return new balance and set display;
             setBalance(newBalance);
             

               // -------------------- added add money history;--------------------
             // 1. get parent.
            const historyContainer = document.getElementById('history-container');
            historyContainer.classList.add('p-4')
            // 2. create new div;
            const newDiv = document.createElement('div');
            newDiv.innerHTML=`
                <div id="transaction" class="bg-base-200 p-5 rounded-2xl">
                   <p>Add Money ${Number(addAmount)} success from ${addMoneyBank},</p>
                     <p>to ${accountNumber}</p>
                     <p>at ${new Date()}.</p>
                     <p>current balance: ${newBalance}.</p>
                </div>
            `
            // 3. append child with parent;
            historyContainer.appendChild(newDiv)
        }
        
        else{
            return alert('wrong pin')
        }
    }
)