function calculateAmount() {
  const rates = {
    suite: 10000,
    delux: 6000,
    ac: 1500,
    nonAc: 700,
    extraPerson: 1000,
  };
  const roomTypes = document.getElementById("room_type").value;
  const totalDays = parseInt(document.getElementById("total_days").value);
  const totalPersons = parseInt(document.getElementById("total_persons").value);
  const isAc = document.getElementById("ac").checked;
  const isNonAc = document.getElementById("non_ac").checked;
  const advanceAmount = parseFloat(
    document.getElementById("advance_amount").value
  );

  let roomCost = rates[roomTypes] * totalDays;
  let roomFacilities = 0;

  if (isAc) roomFacilities += rates.ac * totalDays;
  if (isNonAc) roomFacilities += rates.nonAc * totalDays;

  let extraPersonCharge = 0;
  if (totalPersons > 1) {
    extraPersonCharge = rates.extraPerson * (totalPersons - 1) * totalDays;
  }

  const totalCost = roomCost + roomFacilities + extraPersonCharge;
  const balance = totalCost - advanceAmount;

  document.getElementById("total_cost").value = `₹${totalCost.toFixed(2)}`;
  document.getElementById("balance").value = `₹${balance.toFixed(2)}`;
}

function stopSubmit() {
  return false;
}
