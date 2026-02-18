
document.getElementById('login-btn').addEventListener('click',
    function (){

        //1. get the input mobile number
        const inputNumber = document.getElementById('input-number');
        const contactNumber = inputNumber.value;
        
        //2. get the input pin;
        const inputPin = document.getElementById('input-pin');
        const pin = Number(inputPin.value);
       
       
        if(contactNumber=='01400596304'){
            if(pin === 1234){

                alert('login success')
                window.location.assign("./home-page.html");
                // window.location.href="./home-page.html";
            }
            else{
                alert('wrong pin')
            }
          
        }
        else{
            alert('please enter the 11 digit number')
        }
        
        
    }
)