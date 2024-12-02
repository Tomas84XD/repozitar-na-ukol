function showNumberAndVideo() {
    const input = document.getElementById('numberInput').value;  // Get the number from input
    const output = document.getElementById('output');            // The div to display the number
    const videoDisplay = document.getElementById('videoDisplay'); // Video iframe element to display the YouTube video

    output.innerHTML = '';  // Clear any previous output
    videoDisplay.style.display = 'none';  // Keep the video hidden initially

    // Show the number with typing effect
    let index = 0;  // To keep track of which character to display
    const typingSpeed = 300;  // Delay in milliseconds between characters (adjust for longer load)

    // Start by typing the "Your number is: " message
    output.innerHTML = "Your number is: ";
    index = 0;

    // Start typing the input number after the message
    function typeCharacter() {
        if (index < input.length) {
            output.innerHTML += input[index];  // Append one character at a time
            index++;
            setTimeout(typeCharacter, typingSpeed);  // Call the function recursively with delay
        } else {
            // After typing is finished, show the video after a short delay
            setTimeout(function() {
                videoDisplay.style.display = 'block';  // Make the video visible
            }, 500);  // Adjust the 500 ms delay as needed
        }
    }

    // Add a delay before typing the actual number
    setTimeout(typeCharacter, typingSpeed * 5);  // You can adjust the *5 for a longer delay before typing
}
