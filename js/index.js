//------------Input--------------------

let dayInp = document.getElementById("day");
let monthInp = document.getElementById("month");
let yearInp = document.getElementById("year");

//------------Output--------------------
let dayOtp = document.getElementById("DD");
let monthOtp = document.getElementById("MM");
let yearOtp = document.getElementById("YY");

// -------------Form Element-----------
let form = document.querySelector("form");

//-------------Date---------------
let date = new Date();
// console.log(date);
let day = date.getDate();
// console.log(day);
let month = 1 + date.getMonth();
// console.log(month);
let year = date.getFullYear();
// console.log(year);
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
  let inputs = document.querySelectorAll("input");
  // console.log(inputs);

//-----------------Validator-----------------------
  let validator = true;
  inputs.forEach((i) => {
    let parent = i.parentElement;
    // console.log(parent);
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "This field is Required.";
      validator = false;
    } else if (monthInp.value > 12) {
      monthInp.style.borderColor = "red";
      monthInp.parentElement.querySelector("small").innerText =
        "Must be valid month.";
      validator = false;
    } else if (dayInp.value > 31) {
      dayInp.style.borderColor = "red";
      dayInp.parentElement.querySelector("small").innerText =
        "Must be valid day.";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

//--------------------Submit------------------------------

function handleSubmit(e) {
    e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    let DD = day - dayInp.value;
    let MM = month - monthInp.value;
    let YY = year - yearInp.value;

    dayOtp.innerHTML = DD;
    monthOtp.innerHTML = MM;
    yearOtp.innerHTML = YY;
  }
}


form.addEventListener("submit", handleSubmit);
