const btn = document.getElementById("btn")


const data = (e) => {
    const name = document.getElementById("name")
    const number = document.getElementById("number")
    const email = document.getElementById("email")
    if (name.value.length === 0 || number.value.length === 0 || email.value.length === 0) {
        alert("Please Enter all Details Before Submitting")
        e.preventDefault()
    } else if (number.value.length < 10) {
        alert("Please Enter Valid Phone Number")
    } else if (!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        alert("Please Enter Valid Email ID")
    } else {
        alert("You have been Successfully Registered")
        e.preventDefault()
    }
}

btn.addEventListener("click", data)