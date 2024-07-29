document.getElementById('reservation-form').addEventListener('submit', function(event) {
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const warningMessage = document.getElementById('warning-message');

    const selectedDate = new Date(dateInput.value);
    const selectedTime = timeInput.value;

    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    const openingTimes = {
        'Monday': { open: '10:00', close: '22:00' },
        'Tuesday': { open: '10:00', close: '22:00' },
        'Wednesday': { open: '10:00', close: '22:00' },
        'Thursday': { open: '10:00', close: '22:00' },
        'Friday': { open: '10:00', close: '23:00' },
        'Saturday': { open: '10:00', close: '23:00' },
        'Sunday': { open: '11:00', close: '21:00' }
    };

    const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    const openingTime = openingTimes[dayOfWeek].open;
    const closingTime = openingTimes[dayOfWeek].close;

    if (selectedDate < today) {
        event.preventDefault();
        warningMessage.textContent = 'The reservation date cannot be in the past.';
    } else if (selectedTime < openingTime || selectedTime > closingTime) {
        event.preventDefault();
        warningMessage.textContent = `The reservation time must be between ${openingTime} and ${closingTime}.`;
    } else {
        warningMessage.textContent = ''; 
    }
});