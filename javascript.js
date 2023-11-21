let totalCalories = 0;

function calculateCalories(foodId, caloriePerGram) {
    const weightInput = document.getElementById(`${foodId}-weight`);
    const grams = parseFloat(weightInput.value);
    const calories = grams * caloriePerGram;
    totalCalories += calories;
    updateStatus();
}

function updateStatus() {
    const statusBox = document.getElementById('status');
    statusBox.innerHTML = '';

    if (totalCalories < 180) {
        statusBox.textContent = 'Still Hungry';
        statusBox.classList.add('still-hungry');
    } else if (totalCalories >= 180 && totalCalories <= 220) {
        statusBox.textContent = 'Maybe';
        statusBox.classList.add('maybe');
    } else {
        statusBox.textContent = 'Full';
        statusBox.classList.add('full');
    }
}