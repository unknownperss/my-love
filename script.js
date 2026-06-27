function showYesMessage() {
    document.getElementById("messageText").innerText = 
        "YAYYY IM SO HAPPY YOU DESERVE TO FEEL AMAZINGG please only ever be happy you deseerve to only feel happiness i love you my baby. i love your eyes your nose your eyebrows your laugh your smile your hair your skin your nose again your beauitful green eyes your face shape your chest your arms your legs your back your stomach your peenar your everything my handsome boy also this is lit rally us";
    document.getElementById("messageGif").src = 
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjZpdHVyaDE1emxnY3M2cWpoa2lmeXQ5eTY2aXBzaHllZHY3Zm95dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4rONkkYKUUDe0/giphy.gif";
    
    // Hide buttons and show message
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("messageContainer").style.display = "block";
}

function showNoMessage() {
    document.getElementById("messageText").innerText = 
        "Im so sorry you don't feel well:( You deserve to feel amazing because you're the most amazing person ever. No one compares to you. I love you and I always will even if you make mistakes. Even when you don't feel your best and when youre overthinking.  I'll always be here for you when you need me. You never annoy me. I love everything you do. I love when you say anything. Stay safe my love <3";
    document.getElementById("messageGif").src = 
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmQxZTg3aHE5N3UwejlncjZ5c3luenQ0ZGc2dWZ0a25jdThndzBzOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eKfpB6WZeKC1DiGrj8/giphy.gif";
    
    // Hide buttons and show message
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("messageContainer").style.display = "block";
}
