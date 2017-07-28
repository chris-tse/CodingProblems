// Solution using string replacement and JavaScript array shifting
const pyramid1 = base => {
    // Initialize array to store strings to print
    let strings = []

    // Create base line
    let str = Array(base+1).join("0")
    strings.push(str)

    // For each line, replace the character on either end
    // with a space and push to beginning of array
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        str = str.substr(0, i) + ' ' + str.substr(i + 1);
        str = str.substr(0, j) + ' ' + str.substr(j + 1);
        strings.unshift(str)
    }

    // Check if first line is empty string for pyramids that have point of width 2
    for (let i = base % 2 === 0 ? 1 : 0; i < strings.length; i++) {
        console.log(strings[i])
    }
}

// Solution calculating number of required characters and spaces per line
const pyramid2 = base => {
    // Functions to create strings of spaces or 0's of length num
    const chars = num => Array(num+1).join("0")
    const spaces = num => Array(num+1).join(" ")

    const even = base % 2 === 0 ? true : false
    const lines = parseInt(base/2) + 1

    // Calculate number of spaces and characters for the left half
    // then duplicate to the right and print it
    for (let line = even ? 1 : 0; line < lines; line++) {
        let charStr = chars(line)
        let spaceStr = spaces(lines - line - 1)
        let chunk = spaceStr + charStr
        let currLine = even ? chunk : chunk + "0"
        currLine += charStr + spaceStr
        console.log(currLine)
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