export function numberonly(input) {
    var num = /[^0-9]/gi;
    input.value = input.value.replace(num," ");
}

export function textonly(input) {
    var num = /[^A-Z]/gi;
    input.value = input.value.replace(num, "  ");
}

export function logout() {

    alert("Thank you  Visit again !");
}