const inputs = document.querySelectorAll(".controls input");

function controlUpdate() {
const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
console.log(suffix)
}

inputs.forEach(input => input.addEventListener('change', controlUpdate));
inputs.forEach(input => input.addEventListener('mousemove', controlUpdate));
