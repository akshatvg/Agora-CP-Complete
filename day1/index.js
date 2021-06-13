// Validation function
function validate() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    if (email.value.match(/\S+@\S+/)) {
        email.className = ""
        if (password.value.length >= 8) {
            password.className = ""
            return true
        } else {
            password.className = "incorrect"
            return false
        }
    } else {
        email.className = "incorrect"
        return false
    }
}