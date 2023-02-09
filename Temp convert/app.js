const cel = document.querySelector('#cel')
const fah = document.querySelector('#fah')

cel.addEventListener('input', function () {
    let celData = this.value;
    let fahData = (celData * 9 / 5) + 32;
    fah.value = fahData;
});
fah.addEventListener('input', function () {
    let fahData = this.value;
    let celData = (fahData - 32) * 5 / 9;
    cel.value = celData;
});