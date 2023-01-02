const form = document.forms.change;
const arrayForms = Array.from(form.elements);

arrayForms.forEach((el) => el.addEventListener("mousemove", showValue));
arrayForms.forEach((el) => el.addEventListener("change", showValue));

function showValue() {
  const suffix = this.dataset.sizing ? this.dataset.sizing : "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
