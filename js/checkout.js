var select;
var country;

window.addEventListener("load", function(e) {

    let price = this.localStorage.getItem("price");
    this.document.getElementById("price").textContent = "Total price: " + price;

    select = this.document.getElementById("state");
    var was = document.createElement('option');
    was.value = "washington";
    was.innerHTML = "Washington";
    select.appendChild(was);

    let la = document.createElement('option');
    la.value = 'la';
    la.innerHTML = "Los Angeles";
    select.appendChild(la);

    country = this.document.getElementById("country")
    country.addEventListener("change", changeSelect);
});

function changeSelect() {
    let val = country.value;

    var i, L = select.options.length - 1;
    for(i = L; i >= 0; i--) {
      select.remove(i);
    }

    if (val == "usa") {
        var was = document.createElement('option');
        was.value = "washington";
        was.innerHTML = "Washington";
        select.appendChild(was);
    
        let la = document.createElement('option');
        la.value = 'la';
        la.innerHTML = "Los Angeles";
        select.appendChild(la);
    }

    if ( val == "canada") {
        var was = document.createElement('option');
        was.value = "cc";
        was.innerHTML = "Central Canada";
        select.appendChild(was);
    
        let la = document.createElement('option');
        la.value = 'thc';
        la.innerHTML = "The West Coast";
        select.appendChild(la);
    }

    if ( val == "mexico") {
        var was = document.createElement('option');
        was.value = "bc";
        was.innerHTML = "Baja California";
        select.appendChild(was);
    
        let la = document.createElement('option');
        la.value = 'yp';
        la.innerHTML = "Yucatán Peninsula";
        select.appendChild(la);
    }
}


function validateForm() {
    console.log("aha");
    isValid = true;
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let street_adress = document.getElementById("street-adress");
    let email = document.getElementById("email");
    let zip_code = document.getElementById("zip-code")
    let phone_number = document.getElementById("phone-number");

    if (fname.value.trim().length == 0) {
        fname.classList.add("invalid");
        fname.classList.remove("valid");
        isValid = false;
    }

    if (lname.value.trim().length == 0) {
        lname.classList.add("invalid");
        lname.classList.remove("valid");
        isValid = false;
    }

    if (street_adress.value.trim().length == 0) {
        street_adress.classList.add("invalid");
        street_adress.classList.remove("valid");
        isValid = false;
    }

    if (email.value.trim().length == 0) {
        email.classList.add("invalid");
        email.classList.remove("valid");
        isValid = false;
    }

    if (zip_code.value.trim().length == 0) {
        zip_code.classList.add("invalid");
        zip_code.classList.remove("valid");
        isValid = false;
    }

    if (phone_number.value.trim().length == 0) {
        phone_number.classList.add("invalid");
        phone_number.classList.remove("valid");
        isValid = false;
    }
}