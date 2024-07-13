function analyzeText() {
    const text = document.getElementById('userInput').value.trim();
    
    let regex = /^[a-zA-Z]+$/;
    if (regex.test(text)) { 

      
        const letterCount = text.replace(/[\s\.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').length;
        let letter = letterCount;
        console.log(letter); 
        
        document.getElementById('letterCount').textContent = letterCount;
        const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

        document.getElementById('wordCount').textContent = wordCount;

        const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

        document.getElementById('sentenceCount').textContent = sentenceCount;
    } else {
        console.error('Input is not a string.');
    }

    console.log(text);
}
function ChangeColor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
