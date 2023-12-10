const motivationMessages = [
    "You are capable of amazing things!",
    "Believe in yourself and all that you are.",
    "Every day is a new beginning, take a deep breath and start again.",
    "You have the power to make a difference.",
    "Your positive action combined with positive thinking results in success.",
    "You are stronger than you think.",
    "Keep your head high, keep your chin up, and most importantly, keep smiling.",
    "The only way to do great work is to love what you do."
];

function generateMotivation() {
    const motivationMessageElement = document.getElementById('motivationMessage');
    
    // Get a random message from the array
    const randomIndex = Math.floor(Math.random() * motivationMessages.length);
    const randomMessage = motivationMessages[randomIndex];

    // Display the random message
    motivationMessageElement.textContent = randomMessage;
}
