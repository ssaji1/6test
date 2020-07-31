var check = function () {
    if (document.getElementById('pswd').value ==
        document.getElementById('cpswd').value) {
        alert("You are signed up now log in")
    } else {
        alert('Password does not match signin latter');
    }
}