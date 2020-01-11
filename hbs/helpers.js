const hbs = require('hbs')

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (texto) => {
    let letras = texto.split(' ')
    letras.forEach( (letra, id) => {
        letras[id] = letra.charAt(0).toUpperCase() + letra.slice(1).toLowerCase()
    })

    return letras.join(' ')
})