function calculateParisTime() {
    const houstonHour = parseInt(document.getElementById('houstonTime').value);
    if (isNaN(houstonHour) || houstonHour < 0 || houstonHour > 23) {
        alert("Please enter a valid hour between 0 and 23.");
        return;
    }
    const parisHour = (houstonHour + 7) % 24;
    document.getElementById('parisTime').textContent = `${parisHour}:00`;
}

function calculateHoustonTime() {
    const parisHour = parseInt(document.getElementById('parisInputTime').value);
    if (isNaN(parisHour) || parisHour < 0 || parisHour > 23) {
        alert("Please enter a valid hour between 0 and 23.");
        return;
    }
    const houstonHour = (parisHour - 7 + 24) % 24;
    document.getElementById('houstonOutputTime').textContent = `${houstonHour}:00`;
}
