const add = (num1, num2) => {
    const ans = num1 + num2
    return ans
}

const mult = (num1,num2) => {
    const ans = num1 * num2
    return ans
}

const div = (num1,num2) => {
    const ans = num1 / num2
    return ans
}

const sub = (num1,num2) => {
    const ans = num1 - num2
    return ans
}

let num1, num2, operator


const getNum = (num) => {
    console.log("clicked", num)
    if (num1 == undefined) {
        num1 = num
    } else {
        num2 = num
    } 
}

const getOpt= (opt) => {
    console.log("clicked", opt)
    operator = opt
}

console.log({num1, num2})

const calculator = (num1, operator, num2) => {
    let ans = 0

    if (operator == "+") { 
        ans = add(num1, num2)
    } else if (operator=="*") {
         ans = mult(num1, num2)
    } else if (operator=="-") {
        ans = sub(num1, num2)
    } else if (operator=="/") {
        ans = div(num1, num2)
    }
  return ans  
}
 
