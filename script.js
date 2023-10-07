// Here we are selecting the input box
let string = "";

// Here we are selecting the all buttons
let buttons = document.querySelectorAll('.button');

//Here we are going to make all the buttons working using things like addEventListener and etc...

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        //if someone clicks on '=' then evaluation should happen and its code is below
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('.output').value = string
        }

        //if someone clicks on 'RESET' then evaluation should happen and its code is below
        else if(e.target.innerHTML == 'RESET'){
            string = '';
            document.querySelector('.output').value = string
        }

        //if someone clicks on 'DEL' then evaluation should happen and its code is below
        else if(e.target.innerHTML == 'DEL'){
            string = string.slice(0, -1);
            document.querySelector('.output').value = string
        }

        else{
            // prints selected button in consol
            console.log(e.target) 
            // prints value in output box
            string = string + e.target.innerHTML;
            document.querySelector('.output').value = string; 
        }
        
    })
}
)