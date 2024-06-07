function calculateParisTime() {
    const houstonTime = document.getElementById('houstonTime').value;
    if (!houstonTime) {
        alert("Please enter a valid time in HH:MM format.");
        return;
    }

    const [houstonHour, houstonMinute] = houstonTime.split(':').map(Number);
    let parisHour = (houstonHour + 7) % 24;

    const parisTime = `${String(parisHour).padStart(2, '0')}:${String(houstonMinute).padStart(2, '0')}`;
    document.getElementById('parisTime').textContent = parisTime;
}

function calculateHoustonTime() {
    const parisTime = document.getElementById('parisInputTime').value;
    if (!parisTime) {
        alert("Please enter a valid time in HH:MM format.");
        return;
    }

    const [parisHour, parisMinute] = parisTime.split(':').map(Number);
    let houstonHour = (parisHour - 7 + 24) % 24;

    const houstonTime = `${String(houstonHour).padStart(2, '0')}:${String(parisMinute).padStart(2, '0')}`;
    document.getElementById('houstonOutputTime').textContent = houstonTime;
}
