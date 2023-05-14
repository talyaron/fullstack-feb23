function SwitchBtns();
{
  const element = document.getElementById("FirstBtn");
  if (element?.className == "focus") {
    element.classList.remove("focus");
    document.getElementById("SecondBtn");
    element.classList.add("focus");
  } else {
    element.classList.add("focus");
    document.getElementById("SecondBtn");
    element.classList.remove("focus");
  }
}
