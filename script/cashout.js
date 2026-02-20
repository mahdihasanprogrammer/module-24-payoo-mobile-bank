
document.getElementById('cashout-btn').addEventListener('click',
    function(event){
        event.preventDefault();

        //1. get the agent number and validate;
        const agentNumberInput = document.getElementById("agent-number");
        const agentNumber = agentNumberInput.value;
        
        if(agentNumber.length != 11){
            return alert('Invalid agent number');
        }

        // 2. get the cashout balance;
        const balanceInput =document.getElementById("cashout-amount");
        const balance = balanceInput.value;
        // console.log(balance);


        // 3. get the current balance;
        const currentBalanceText =document.getElementById("current-balance");
        const currentBalance = currentBalanceText.innerText;
        // console.log(currentBalance);


        // 4. calculate new balance;
        const newBalance = Number(currentBalance) - Number(balance);
        // console.log(newBalance);

        if(newBalance < 0 ){
            return alert('Invalid balance')
        }

        // 5. verify pin;
       const cashoutPinInput = document.getElementById("cashout-pin");
       const cashoutPin = Number(cashoutPinInput.value);
    //    console.log(cashoutPin)

        if(cashoutPin === 5024){
             alert('Cash Out Successfully');
             balanceInput.value='';
             currentBalanceText.innerText=newBalance;

                  // -------------------- added add money history;--------------------
             // 1. get parent.
            const historyContainer = document.getElementById('history-container');
            historyContainer.classList.add('p-4')
            // 2. create new div;
            const newDiv = document.createElement('div');
            newDiv.innerHTML=`
                <div id="transaction" class="bg-base-200 p-5 rounded-2xl">
                   <p>Cash Out ${Number(balance)} success from ${agentNumber},</p>
                     <p>at ${new Date()}.</p>
                     <p>current balance: ${newBalance}.</p>
                </div>
            `
            console.log(newDiv)
            // 3. append child with parent;
            historyContainer.appendChild(newDiv)

           
        }
        else{
            return alert('invalid pin')
        }
           

    }
)