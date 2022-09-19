
function Validar() {
        let checkBoxP=document.getElementById("p").checked;
        console.log(checkBoxP);
        let checkBoxQ=document.getElementById("q").checked;
        console.log(checkBoxQ);
        let resultado="p y q es: " + (checkBoxP&&checkBoxQ)+"<br>";
        resultado=resultado+"q o p es: " + (checkBoxP||checkBoxQ)+"<br>";
        resultado=resultado+"La negación o p es: " + (!checkBoxP)+"<br>";
        resultado=resultado+"La negación o q es: " + (!checkBoxQ)+"<br>";
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
                