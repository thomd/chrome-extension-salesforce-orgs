import { printLine } from './modules/print'

console.log('Content script works!')
console.log('Must reload extension for modifications to take effect.')

window.onload = () => {
    printLine(`Using the printLine function from the Print Module`)
}

