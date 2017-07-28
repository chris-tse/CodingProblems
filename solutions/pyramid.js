const pyramid1 = base => {
    const startString = num => {
        let start = ""
        for (let i = 0; i < num - 1; i++) {
            start += " "
        }
        return start + "0"
    }
    const chars = num => Array(num+1).join("0")
    const spaces = num => Array(num+1).join(" ")

    const even = base % 2 === 0 ? true : false
    const lines = parseInt(base/2) + 1


    for (let line = even ? 1 : 0; line < lines; line++) {
        let charStr = chars(line)
        let spaceStr = spaces(lines - line - 1)
        let chunk = spaceStr + charStr
        let currLine = even ? chunk : chunk + "0"
        currLine += [...chunk].reverse().join("")
        console.log(currLine)
    }
}

const pyramid2 = base => {
    let strings = []

    let str = Array(base+1).join("0")
    strings.push(str)
    for(let i = 0, j = str.length - 1; i < j; i++, j--) {
        str = str.substr(0, i) + ' ' + str.substr(i + 1);
        str = str.substr(0, j) + ' ' + str.substr(j + 1);
        strings.unshift(str)
    }

    for (let i = base % 2 === 0 ? 1 : 0; i < strings.length; i++) {
        console.log(strings[i])
    }
}


const pyramid3 = base => {
    let str = Array(base+1).join(" ")
    let i, j

    if (base % 2 === 0) {
        i = base / 2 - 1
        j = base / 2
    } else {
        i = Math.floor(base/2)
        j = i
    }
    for(; i>= 0 && j < str.length; i--, j++) {
        str = str.substr(0, i) + '0' + str.substr(i + 1);
        str = str.substr(0, j) + '0' + str.substr(j + 1);
        console.log(str)
    }
}

pyramid(9)


//             4 spaces 0 char line 0
//    00       3 spaces 1 char line 1
//   0000      2 spaces 2 char line 2
//  000000     1 spaces 3 char line 3
// 00000000    0 spaces 4 char line 4

//     0      4 spaces 0 char
//    000     3 spaces 1 char
//   00000    etc
//  0000000
// 000000000