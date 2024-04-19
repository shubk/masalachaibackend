const el = {
    '1': 'button',
    '2': "phone",
    "3": "cup",
    "4": "book",
    '5': "glass"
}

// function getEelId(id) {
//     return el[id]
// }
// console.log(getEelId('2'))
// Now we will us eQuesrySelector

// function querySelector(id) {
//     const keys = Object.keys(el);
//     return keys.find(e => e === id)
// }
// console.log(querySelector('3'))

// Another way is by Objects entries of keys and value pairs
function querySelectorByEntries(id) {
    return Object.entries(el).find(([key, value]) => {
        if (key === id)
            return value

    })
}
console.log(querySelectorByEntries('5'))