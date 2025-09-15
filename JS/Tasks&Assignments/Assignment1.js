
function validate() {
    a = document.getElementById("age").value;



    console.log(a);

    if (a >= 0 && a <= 120)
        alert(a + " years is a valid age.")
    else
        alert("Not a valid age. Please enter valid age (0-120)")
}