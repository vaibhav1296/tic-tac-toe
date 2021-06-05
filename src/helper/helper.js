const checkResult = (arr) => {
    console.log('helper called', typeof arr)
    console.log('helper called', arr.length)
    for (let i = 0; i < arr.length; i++) {
        console.log(`row check arr[i][0]=${arr[i][0]} arr[i][1]=${arr[i][1]} arr[i][2] = ${arr[i][2]}`)
        if ((arr[i][0] == arr[i][1]) && (arr[i][0] == arr[i][2])) {
            console.log('condition of winnig true')
            return true
        }
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(`column check arr[0][i]=${arr[1][i]} arr[1][i]=${arr[1][i]} arr[2][i] = ${arr[2][i]}`)
        if ((arr[0][i] == arr[1][i]) && (arr[0][i] == arr[2][i])) {
            console.log('condition of winnig true')
            return true
        }
    }
    if (arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2]) {
        return true
    }
    if (arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0]) {
        return true
    }
    console.log('condition of winnig false')
    return false
}

const checkTermination = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] == 'O' || arr[i][j] == 'X') {
                count++;
            }
        }
    }
    if (count === 9) {
        return true
    }
    return false
}

module.exports = {
    checkResult,
    checkTermination
}