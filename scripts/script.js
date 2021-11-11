document.getElementById("mainIcon").addEventListener("click", cycleSlate);

function teamExpandDY() {
  let toggled = document.getElementById("Dytext");
  if (toggled.innerHTML == "") {
    document.getElementById("Dytext").innerHTML =
      "The nation in control of the South, Dynasty focuses on oriental builds. The current leader is Woolington. ";
  } else {
    document.getElementById("Dytext").innerHTML = "";
  }
}

function cycleSlate() {
  let icon = document.getElementById("mainIcon");

  if (icon.src == "Images/mainIcon/deepslate.png") {
    document.getElementById("mainIcon").src =
      "Images/mainIcon/Chiseled_Deepslate_JE2_BE1.png";
  } else if (
    icon.attr.src == "Images/mainIcon/Chiseled_Deepslate_JE2_BE1.png"
  ) {
    document.getElementById("mainIcon").src =
      "Images/mainIcon/Cobbled_Deepslate_JE2_BE1.png";
  } else {
    document.getElementById("mainIcon").src = "Images/mainIcon/deepslate.png";
  }
}
