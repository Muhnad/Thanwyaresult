var form = document.forms[0],
    degreeInput = document.querySelector(".form__degree"),
    finalDegree = document.querySelector(".final-degree"),
    formSubmit = document.querySelector(".form__submit"),
    formCongrats = document.querySelector(".final__congrats");
    show = document.querySelector(".final__precent");

var prResult = function(val) { return ( val / 410 ) * 100 }

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var degreeVal = prResult(degreeInput.value),
  	  degreeRound = degreeVal.toFixed(2);

  show.innerHTML = degreeRound + "%";

  if (isNaN(degreeVal)) {
    finalDegree.style.display = "block";
    formCongrats.style.display = "none";
    show.innerHTML = "من فضلك ادخل نتيجتك بالارقام فقط";
  } else {
    finalDegree.style.display = "block";
    formCongrats.style.display = "block";
    show.innerHTML = degreeRound + "%";
  }

});