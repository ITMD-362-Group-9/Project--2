function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function confirmSubmit(){
  var fullname = document.getElementById("firstname");
  alert("Thanks " + firstname.value + " for joining ISUD XII World Congress!");
}