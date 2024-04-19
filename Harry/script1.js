let age = prompt("Enter your age : ")
age = Number.parseInt(age)
//write a function to check if he can drive
if (age < 0) {
    console.error("Please enetr a valid age")
}

let runAgain = true;
while (runAgain) {
    const canDrive = (age) => {
        return age > 18 ? true : false;
    }
    if (canDrive(age)) {
        alert("You can drive ")
    } else {
        console.log("You cannot drive")
    }

    runAgain = confirm("Do you want to run again?")
}
