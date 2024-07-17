function analyzeText() {
    const text = document.getElementById('userInput').value.trim();
    
    let regex = /\s+g^[a-zA-Z]+$/;
    if (regex.test(text)) { 

      console.log("okay");
        const letterCount = text.trim(/[\s\.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ').length;
        console.log(letterCount); 
        
        document.getElementById('letterCount').textContent = letterCount;
        // const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

        // document.getElementById('wordCount').textContent = wordCount;

        // const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

        // document.getElementById('sentenceCount').textContent = sentenceCount;
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
