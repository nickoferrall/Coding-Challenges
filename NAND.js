// For this coding challenge you will be recreating low level logic gates.

// You will first create the NAND function and then you will create

// NOT, OR, AND, and XOR all using the NAND function that you created.

// Implement NAND however you would like and then use NAND to implement the

// other logic gates.



// See the link below for the truth tables for these logic gates.

// https://en.wikipedia.org/wiki/NAND_logic#NAND

// All functions should return a 1 for true and a 0 for false.

function NAND(x, y) {
	// You can use whatever JS operators that you would like: &&, ||, !
	if (x === 0 && y === 0) {
	  return 1
	} else if (x !== y) {
	  return 1
    }
    else {
        return 0
    }
}

function NOT(n) {
    if (n === 1) {
        return 0
    }
    else {
        return 1
    }
}

function AND(x, y) {
	// Do not use &&, ||, or !
    // You can use any of the functions that you have already written
    if (x + y === 2) {
        return 1
    } else {
        return 0
    }
}

function OR(x, y) {
	// Do not use ||, &&, or !
    // You can use any of the functions that you have already written
    if (x + y < 1) {
        return 0
    }
    else {
        return 1
    }
}

function XOR(x, y) {
	// Do not use ||, &&, or !
    // You can use any of the functions that you have already written
    if (x > y) {
        return 1
    }
    else if (x < y) {
        return 1
    }
    else {
        return 0
    }
}


console.log(NAND(0, 0))
console.log(NAND(0, 1))
console.log(NAND(1, 0))
console.log(NAND(1, 1))