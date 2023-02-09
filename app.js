const endDate = '20 july 2023 12:00 AM';
document.querySelector('#endDate').innerHTML = endDate;
const inputs = document.querySelectorAll("input")

/*
* 1 day = 24 hours
* 1 hour = 60 min
* 60 min = 3600 sec
*/

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()

    // convert Mil sec into seconds
    const diff = Math.floor((end - now) / 1000);

    if (diff < 0) return;

    // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24)

    // convert into Hours
    inputs[1].value = Math.floor(diff / 3600) % 24

    // convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;

    // convert into seconds
    inputs[3].value = Math.floor(diff) % 60;
}
setInterval(() => {
    clock()
}, 1000);