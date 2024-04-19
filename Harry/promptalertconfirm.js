// Confirm , alert and prompt 
alert("Enter a number : ")
let a = prompt("Enete rthe number here ..");
a = Number.parseInt(a)
let write = confirm("Are you sure you want to type this number?")
if (write) {
    document.write(a)
} else {
    document.write("Please  allow me to write")
}
