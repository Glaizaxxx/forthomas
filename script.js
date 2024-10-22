document.getElementById('revealBtn').addEventListener('click', function() {
    var message = document.getElementById('message');
    message.style.opacity = '1';
    
    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});
