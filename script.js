const buttons = document.querySelectorAll(".key");

let string = "";

let display = (keyword)=>{
    document.querySelector(".screen").innerText = keyword;
}

let operations = (id)=>{
    if (id === 'plus') {
        id = '+';
    }
    if (id === 'minus') {
        id = '-';
    }
    if (id === 'multiply') {
        id = '*';
    }
    if (id === 'divide') {
        id = '/';
    }
    if (id=== 'percent') {
        id = '/100'
    }
    if (id==='dot') {
        id = '.'
    }
    return id;
}

buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        let id = button.getAttribute("id");

        id = operations(id);
        
        if (id==='ac') {
            display('0');
            string = '';
            return;
        }
        if (id==='plus-minus') {
            id = '';
            if (string[0]=='-') {

                // To do - how to remove first index in string


                // To do - search how to use continue keyword for if-else statement


                string+=id;
                display(string);
                return;
            }
            string = '-'+ string;
        }
        if (id === 'NW') {
            setTimeout(()=>{display(string)} ,500);
            display("Not working");
            return;
        }
        if (id==='equals') {
            string = eval(string);
            display(string);
            string = '';
            return;
        }
        string+=id;
        display(string);
    });
});