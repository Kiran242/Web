function validate() {
  var x = document.forms["myForm"]["firstname"].value;
  if (x == null) {
    alert("Name must be filled out");
    return false;
  }
}