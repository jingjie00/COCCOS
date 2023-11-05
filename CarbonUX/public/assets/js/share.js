$(document).ready(function () {
    // Add a click event listener to the submit button
    $("#shareForm").submit(function (event) {
      // Prevent the default form submission
      event.preventDefault();

      const form = document.getElementById("shareForm");
      const remainText = document.getElementById("remainCredit");
      const remainedCredit = remainText.textContent.match(/\d+\.\d+/);
      const sharedCredit = document.getElementById("inputAmount").value;
      var alertType = "";

      if (form.checkValidity()) {
        console.log(sharedCredit)
        console.log(remainedCredit[0])
        console.log((remainedCredit[0] - sharedCredit) >= 0)
        if ((remainedCredit[0] - sharedCredit) >= 0) {
          alertType = "#successAlert"
          remainText.innerHTML = (remainedCredit[0] - sharedCredit).toFixed(3) + " kg"
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


        //------------------------ Update dashboard Total Earning ----------------------------//
        if (alertType == "#successAlert"){
          // Retrieve Total Earn and Current Earn
          var total_earn = parseFloat(localStorage.getItem("total_earn")) || 0;
          var current_earn = parseFloat(localStorage.getItem("stored_current_earn"));
          var new_total_earn = parseFloat(total_earn + current_earn);

          // Update Total Earning to dashboard
          localStorage.setItem("total_earn", new_total_earn.toFixed(2));


          // Retrieve Total Carbon Credit Sold and Current Sold
          var total_sold = parseFloat(localStorage.getItem("credit_sold")) || 0;
          var current_sold = parseFloat(localStorage.getItem("stored_credit_sold"));
          var new_total_sold = parseFloat(total_sold + current_sold);

          // Update Carbon Credit Sold to dashboard
          localStorage.setItem("credit_sold", new_total_sold.toFixed(3));

          // Update Carbon Credit Balance to dashboard
          var credit_balance = parseFloat(localStorage.getItem("stored_credit_balance"));
          localStorage.setItem("credit_balance", credit_balance.toFixed(3));
        }

      }
    });
  });

  const inputAmt = document.getElementById('inputAmount');
  inputAmt.addEventListener('change', function () {
    var inputPrice = document.getElementById('inputPrice');
    var estCredit = document.getElementById('estCredit');
    var estEarn = document.getElementById('estEarn');

    var price = parseFloat(inputPrice.value);
    let remainCredit = 0;
    let estimateEarn = 0;

    var CurText = parseFloat(localStorage.getItem("credit_balance")) || 0;

    remainCredit = CurText - parseFloat(inputAmt.value);
    estimateEarn = parseFloat(inputAmt.value) * price;
    console.log(remainCredit)
    console.log(estimateEarn)

    estCredit.value = remainCredit.toFixed(3) + " kg"
    estEarn.value = "$ " + estimateEarn.toFixed(2)

    // Store Temporary Carbon Credit Balance
    localStorage.setItem("stored_credit_balance", remainCredit.toFixed(3));

    // Store Temporary Carbon Credit Sold
    var sold_amount = parseFloat(inputAmt.value);
    localStorage.setItem("stored_credit_sold", sold_amount.toFixed(3));

    // Store Temporary Earning amount
    localStorage.setItem("stored_current_earn", estimateEarn.toFixed(2));

  });