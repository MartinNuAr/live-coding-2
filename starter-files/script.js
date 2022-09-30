// API
const API_ENDPOINT = 'https://yesno.wtf/api';

// Se definen los campos del HTML

let ans = document.getElementById("answer");
let btn = document.getElementById("button");
let inputField = document.getElementById("input");
let error = document.getElementById("error");

const fetchAnswer = () => {
    fetch(API_ENDPOINT)
    .then(data => data.json())
    .then(data => showAnswer(data.answer))
}

const showAnswer = answer => {
    ans.innerHTML = `<p>${answer}</p>` // Función para añadir una etiqueta de parrafo con Yes/No
}

btn.addEventListener("click", function(event){
    event.preventDefault();
    if (inputField.value == null || inputField.value == ""){ // Validación para campo vacío
        error.innerHTML = "Please write something in the field";
    } else {
        error.innerHTML = ""; // Borra el mensaje de error
        fetchAnswer();
        inputField.value = ""; // Borra el campo para la respuesta
        setTimeout(function(){ans.innerHTML=""}, 5000); // Borra la respuesta en 5 segundos
    }
})

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
