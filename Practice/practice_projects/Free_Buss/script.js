const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  let feedback;
  if (isSeatAvailable) {
    feedback = "seat avilable ";
    if (isAgeAbove50) {
      feedback = feedback + " aged above 50 ";
      if (hasAadharCard) {
        feedback = "Has adhaar card";
        confirm(`Are you sure? Doy you want to come inside`);
        alert("Please get in bus");
      } else {
        feedback = feedback + `.But you don't have adhaar card`;
      }
    } else {
      feedback =
        feedback +
        `.But your age is not above 50. and you dont have adhaar card`;
    }
  } else {
    feedback = `seat is not avilable`;
  }

  passengerStatus.textContent = feedback;
});
