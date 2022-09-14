
function Validar() {
        let checkBoxP=document.getElementById("p").checked;
        console.log(checkBoxP);
        let checkBoxQ=document.getElementById("q").checked;
        console.log(checkBoxQ);
        let resultado="p AND q es: " + (checkBoxP&&checkBoxQ)+"<br>";
        resultado=resultado+"q or p es: " + (checkBoxP||checkBoxQ)+"<br>";
        resultado=resultado+"La negación or p es: " + (!checkBoxP)+"<br>";
        resultado=resultado+"La negación or q es: " + (!checkBoxQ)+"<br>";
        document.getElementById("message").innerHTML=resultado;
    }

    
    // function Validar() {
        //     if(Validar) {
            //         let checkBoxP=document.getElementById("p").checked;
            //         console.log(checkBoxP);
            //     }
            //     else if(Validar) {
                //         let checkBoxQ=document.getElementById("q").checked;
                //         console.log(checkBoxQ);
                //     }
                // }
                