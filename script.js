function calculateParalelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  const area = base * height;
  setValue("parallelogram-area", area);
}

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputText = inputField.value;
  const value = parseFloat(inputText);
  return value;
}

function setValue(id, area) {
  const field = document.getElementById(id);
  field.innerText = area;
}
