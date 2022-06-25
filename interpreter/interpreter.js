'use strict'

const regs = {pc: 0}
const mem = []

const step = () => {
    console.log('step')
    return false
}

const interpret = () => {
    console.log('interpret')
    while (step()) { ; }
}

interpret()