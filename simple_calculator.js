function calculate() {
  let nums = document.getElementsByClassName("num");
  let operator = document.getElementById("operator").value;

  if (nums.length < 2) {
    document.getElementById("result").innerHTML = "Result: Lägg in minst två tal!";
    return;
  }

  let result = parseFloat(nums[0].value);

  for (let i = 1; i < nums.length; i++) {
    let value = parseFloat(nums[i].value);

    if (operator === "+") {
      result = result + value;
    } else if (operator === "-") {
      result = result - value;
    } else if (operator === "*") {
      result = result * value;
    } else if (operator === "/") {
      result = result / value;
    }
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}

function addInput() {
  let input = document.createElement("input");
  input.type = "number";
  input.value = "0";
  input.className = "num";
  document.getElementById("inputs").appendChild(input);
}
