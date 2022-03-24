console.log('Js Ok');

const arrayIcone = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona,
// in cui è presente il nome dell'icona e l'icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà "color":
// utilizzare questa proprietà per visualizzare le icone del colore corrispondente.


const containerGenerale = document.getElementById('container-generale');


arrayIcone.forEach((elemento) => {
    elementoCreato(elemento);
})

function elementoCreato(arrayIndice) {

    const containerElemento = document.createElement('div');
    containerElemento.classList.add('col-2', 'text-center', 'py-4', 'lm-card');

    containerElemento.innerHTML = `
    <i class="${arrayIndice.family} ${arrayIndice.prefix}${arrayIndice.name} ${arrayIndice.color}"></i>
    <p>${arrayIndice.name}</p>`

    containerGenerale.appendChild(containerElemento);
}

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone
// (animal, vegetable, user).
// Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const select = document.getElementById('all-icon');

select.addEventListener('change', (event) => {

    containerGenerale.innerHTML = '';

    if (event.target.value === 'animal') {

        arrayIcone.filter((elemento) => {

            if (elemento.type === 'animal') {
                elementoCreato(elemento);
            }

        })
    } else if (event.target.value === 'vegetable') {

        arrayIcone.filter((elemento) => {

            if (elemento.type === 'vegetable') {
                elementoCreato(elemento);
            }

        })
    } else if (event.target.value === 'user') {

        arrayIcone.filter((elemento) => {

            if (elemento.type === 'user') {
                elementoCreato(elemento);
            }

        })
    } else if (event.target.value === 'all') {

        arrayIcone.forEach((elemento) => {
            elementoCreato(elemento);
        })
    }


});