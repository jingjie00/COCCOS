var inputAmt = document.getElementById('inputAmount');
var inputPrice = document.getElementById('inputPrice');
var estCredit = document.getElementById('estCredit');
var estEarn = document.getElementById('estEarn');
var CurText = document.getElementById("remainCredit");
var CurCredit = CurText.textContent.match(/\d+\.\d+/);

inputAmt.addEventListener('change', function () {

  var price = parseFloat(inputPrice.value);
  let remainCredit = 0;
  let estimateEarn = 0;

  remainCredit = CurCredit[0] - parseFloat(inputAmt.value);
  estimateEarn = parseFloat(inputAmt.value) * price;

  estCredit.value = remainCredit.toFixed(3) + " kg"
  estEarn.value = "$ " + estimateEarn.toFixed(2)

});

$(document).ready(function () {
    // Add a click event listener to the submit button
    $("#shareForm").submit(function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      const form = document.getElementById("shareForm");
      const sharedCredit = document.getElementById("inputAmount").value;
      var alertType = "";
  
      if (form.checkValidity()) {
        if ((CurCredit[0] - sharedCredit) >= 0) {
          alertType = "#successAlert"
          CurText.innerHTML = (CurCredit[0] - sharedCredit).toFixed(3) + " kg"
        } else {
          alertType = "#insufficientAlert"
        }
  
        $(alertType).css("display", "block");
        $("html, body").animate({scrollTop: 0}, "slow");
        setTimeout(function () {
          $(alertType).css("display", "none");
        }, 3000); // 2000 milliseconds (2 seconds) delay
  
        // Trigger the reset button after a delay (you can adjust the delay time)
        setTimeout(function () {
          $("#resetButton").trigger("click");
        }, 0); // 2000 milliseconds (2 seconds) delay
  
      }
    });
  });
