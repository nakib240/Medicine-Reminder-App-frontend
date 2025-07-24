import React from 'react';

const Reminder = () => {
  const reminders = [
    { id: 1, medication: 'Aspirin', time: '08:00 AM' },
    { id: 2, medication: 'Lisinopril', time: '12:00 PM' },
    { id: 3, medication: 'Metformin', time: '06:00 PM' },
  ];

  return (
    <div className="reminder">
      <h2>Your Medication Reminders</h2>
      <ul>
        {reminders.map(reminder => (
          <li key={reminder.id}>
            {reminder.medication} - {reminder.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reminder;