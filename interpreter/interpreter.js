'use strict'

const step = () => {
    console.log('step')
    return false
}

const interpret = () => {
    console.log('interpret')
    while (step()) { ; }
}

interpret()