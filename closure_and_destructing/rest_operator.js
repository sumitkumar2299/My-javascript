//rest operator 

const add = (...nums) => {
    return nums.reduce((sum, num ) => sum+num)
}
console.log(add(1,2,3,4,5));