/////////////////// Display Success Message After Submit ///////////////////
$(document).ready(function () {
    $("#submitButton").click(function () {

      event.preventDefault();
      $("#successAlert").fadeIn();
      $("html, body").animate({scrollTop: 0}, "slow");
      $("#message").text("Form submitted successfully!");

      setTimeout(function () {
        $("#resetButton").trigger("click");
      }, 2000); // 2000 milliseconds (2 seconds) delay
    });
  });


  ///////////////////// Scan QR button  ///////////////////
  document.getElementById('chooseQRbtn').addEventListener('click', function () {
    document.getElementById('inputQR').click();
  });

  document.getElementById('inputQR').addEventListener('change', function () {
    const selectedFile = this.files[0];
    const errorMessage = document.getElementById('errorMessage');
    const estimateCarbon = document.getElementById('estimateCarbon');
    const claimingCode = document.getElementById('inputCode');

    if (selectedFile) {

      const fileNameWithoutExtension = selectedFile.name.replace(/\.[^/.]+$/, '');

      // Check if the selected file is an image
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (e) {
          const image = new Image();

          image.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0, image.width, image.height);

            const imageData = ctx.getImageData(0, 0, image.width, image.height);
            const qrCodeData = jsQR(imageData.data, image.width, image.height);

            if (qrCodeData) {
              // It's a valid QR code
              errorMessage.style.display = 'none';
              // You can access QR code data in 'qrCodeData.data' property
              // console.log('QR Code Data:', qrCodeData.data);
              estimateCarbon.textContent = qrCodeData.data + " kg";
              claimingCode.value = fileNameWithoutExtension

            } else {
              errorMessage.style.display = 'block';
            }
          };
          image.src = e.target.result;
        };

        reader.readAsDataURL(selectedFile);
      } else {
        // It's not an image
        errorMessage.style.display = 'block';
      }
    } else {
      // No file selected
      errorMessage.style.display = 'none';
    }
  });

  const inputReport = document.getElementById('inputReport');      
  const inputKg = document.getElementById('inputKg');
  const inputRecycle = document.getElementById('inputRecycle');
  const estimateCarbon = document.getElementById('estimateCarbon');
  const RenewElec = document.getElementById('inputRenewEnergy');
  const curElec = document.getElementById('inputCurElec');
  const inputTransport = document.getElementById('inputTransport');
  const inputDistance = document.getElementById('inputDistance');

  ///////////////////// Report Type change field  ////////////////////////////////////
  inputReport.addEventListener('change', function () {
    const selectedOption = inputReport.value;
    const recycleFields = document.getElementById('RecycleDiv');
    const electricFields = document.getElementById('ElectricDiv');
    const transportFields = document.getElementById('TransportDiv');
    var supportFields = document.getElementById('supportText');

    recycleFields.style.display = 'none';
    electricFields.style.display = 'none';
    transportFields.style.display = 'none';

    estimateCarbon.textContent = '0.000 kg';

    // Show the relevant input fields based on the selected option
    if (selectedOption === 'recycle') {
      recycleFields.style.display = 'block';
      supportFields.textContent = 'Supporting Document (weight measurement, etc.)'
      inputKg.value = null;

    } else if (selectedOption === 'electric') {
      electricFields.style.display = 'block';
      supportFields.textContent = 'Supporting Document (watt meter / electric bill, etc.)'
      RenewElec.value = 0;
      curElec.value = null;

    } else if (selectedOption === 'transport') {
      transportFields.style.display = 'block';
      supportFields.textContent = 'Supporting Document (receipt, etc.)'
      inputDistance.value = 0;

    } else {
      supportFields.textContent = 'Supporting Document (receipt, etc.)'
    }

  });


  ///////////////////// Function to update recycle carbon calculation  ////////////////////////////////////
  function updateRecycleCarbon() {
    //Baseline Emission (transport,landfill,production) - Recycling Emission (collection,recycle process) = carbon footprint reduction / 1000kg if in tons
    const paperCFR = 0.1 //0.1kg CO2 per kg recycle
    const canCFR = 0.25
    const plasticCFR = 0.2
    const wasteCFR = 0.4

    // Get the selected recycle type
    const selectedRecycleType = inputRecycle.value;

    // Get the weight in Kg
    const weight = parseFloat(inputKg.value);

    // Calculate the carbon credit based on the selected type
    let carbonCredit = 0;

    switch (selectedRecycleType) {
      case 'paper':
        carbonCredit = paperCFR * weight;
        break;
      case 'can':
        carbonCredit = canCFR * weight;
        break;
      case 'plastic':
        carbonCredit = plasticCFR * weight;
        break;
      case 'waste':
        carbonCredit = wasteCFR * weight;
        break;
      default:
        carbonCredit = 0; // Default to 0 if no type is selected
    }

    // Update the estimateCarbon span with the calculated value
    estimateCarbon.textContent = carbonCredit.toFixed(3) + ' kg';
  }

  inputKg.addEventListener('input', updateRecycleCarbon);
  inputRecycle.addEventListener('change', updateRecycleCarbon);



  ///////////////////// Function to update Electric Calculation  ////////////////////////////////////
  function updateElectricCarbon() {

    // Get the values of RenewElec and curElec as numbers
    const renewElectric = parseFloat(RenewElec.value);
    const currentElectric = parseFloat(curElec.value);
    const perCapita2022 = 416;

    // Calculate the new electric consumption
    const newElectricConsumption = currentElectric * (1 - (renewElectric / 100));

    // Check if new electric consumption is less than perCapita2020
    if (newElectricConsumption < perCapita2022) {
      const result = (perCapita2022 - newElectricConsumption) * 0.001;
      estimateCarbon.textContent = result.toFixed(3) + ' kg';
    } else {
      estimateCarbon.textContent = '0.000 kg';
    }
  }

  RenewElec.addEventListener('input', updateElectricCarbon);
  curElec.addEventListener('input', updateElectricCarbon);

  
  ///////////////////// Function to update electric carbon calculation  ////////////////////////////////////
  function updateTransportCarbon() {
    const transportConstants = {
      'walk': 0.007,
      'bicycle': 0.005,
      'train': 0.003,
      'bus': 0.002,
      'others': 0.001,
    };

    const selectedTransport = inputTransport.value;
    const distance = parseFloat(inputDistance.value);

    // Check if the selected transport type is in the constants
    if (selectedTransport in transportConstants) {
      // Calculate the result using the selected transport's constant
      const result = transportConstants[selectedTransport] * distance;
      estimateCarbon.textContent = result.toFixed(3) + ' kg';
    }
  }

  inputDistance.addEventListener('input', updateTransportCarbon);
  inputTransport.addEventListener('change', updateTransportCarbon);
