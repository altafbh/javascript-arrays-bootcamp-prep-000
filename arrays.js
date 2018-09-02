var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {return [element, ...array] }
function destructivelyAddElementToBeginningOfArray(array, element) { array.unshift(element) return array }
function addElementToEndOfArray(array, element) {return [...element, array]}
function destructivelyAddElementToEndOfArray(array, element) {return [array.push(element)]}
function accessElementInArray(array, index) {return (array[index])}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {return [array.shift(element)]}
function removeElementFromBeginningOfArray(array) {return [array.slice(1)]}
function destructivelyRemoveElementFromEndOfArray(array) {return [array.pop()]}
function removeElementFromEndOfArray(array) {return [array.slice(0, array.length -1)]}