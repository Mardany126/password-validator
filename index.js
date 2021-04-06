function validatePassword(password) {
    return hasLetter(password, true) && hasLetter(password, false) &&
    hasNumericValue(password) && hasSpecialCharacter(password) && isLongEnough(password)

}

function hasLetter (password, lower) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (lower) return password.split("").some(char => lowerCase.includes(char))

    return password.split("").some(char => upperCase.includes(char))
}

function hasNumericValue(password) {
 const digit = "0123456789"

 return password.split("").some(char => digit.includes(char))
}

function hasSpecialCharacter(password) {
    const characters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\\"

    return password.split("").some(char => characters.includes(char))
}

const isLongEnough = (password) => password.length >= 8


module.exports = validatePassword
