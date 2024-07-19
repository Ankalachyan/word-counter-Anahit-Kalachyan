function analyzeText() {

    document.getElementById('letterCount').textContent = 0;
    document.getElementById('wordCount').textContent = 0;
    document.getElementById('sentenceCount').textContent = 0;

   
    const text = document.getElementById('userInput').value.trim();


    
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(text)) {
        const letterCount = text.replace(/[^a-zA-Z]/g, '').length;
        const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
        const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
        
        document.getElementById('letterCount').textContent = letterCount;
        document.getElementById('wordCount').textContent = wordCount;
        document.getElementById('sentenceCount').textContent = sentenceCount;
        document.getElementById('userInput').value = ""

    } else {
        alert('Input is not a string containing only letters and spaces.');
    }
}

function ChangeColor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
