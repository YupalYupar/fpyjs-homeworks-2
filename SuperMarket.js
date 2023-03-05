const weapons = {
    1: {
        id: 1,
        name: 'Colt-M1911',
        description: 'gun',
        size: [45],
        price: 500,
        available: true,
    },
    2: {
        id: 2,
        name: 'Beretta-92',
        description: 'gun',
        size: [9],
        price: 550,
        available: true,
    },
    3: {
        id: 3,
        name: 'Glock-17',
        description: 'gun',
        size: [9],
        price: 450,
        available: true,
    },
    4: {
        id: 4,
        name: 'TT',
        description: 'gun',
        size: [7.62],
        price: 400,
        available: true,
    },
    5: {
        id: 5,
        name: 'Desert Eagle',
        description: 'gun',
        size: [357],
        price: 600,
        available: true,
    },
}

let gunBelt = [
    {
        weapon: 2,
        amount: 1,
    },
    {
        weapon: 5,
        amount: 2,
    },
]

function addingGun(gunId, amount) {
    gunBelt.push({'weapon': gunId, 'amount': amount,})
    return gunBelt
}

function removingGun(gunId) {
    gunBelt.splice(gunId, 1);
    return gunBelt
}

function emptyGunBelt() {
    gunBelt.splice(0, gunBelt.length);
    return gunBelt
}

function qtySum() {
    let totalSumm = 0
    let totalAmount = 0

    for(let count = 0; count < gunBelt.length; count++) {
        
        totalAmount = totalAmount + gunBelt[count].amount
        totalSumm = totalSumm + gunBelt[count].amount * weapons[gunBelt[count].weapon].price
    }

    let allInfo = {
        'totalSumm': totalSumm,
        'totalAmount': totalAmount,
    }
    return allInfo;
}

addingGun(1, 3)
addingGun(3, 2)
console.log(gunBelt)

console.log(removingGun(process.argv[1]))

console.log("Сумма и количество арсенала", qtySum(), "\n")

console.log("Вы удалили все из арсенала", emptyGunBelt(), "\n")