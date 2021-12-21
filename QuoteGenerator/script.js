const quoteText = document.querySelector('#quote');
const authorName = document.querySelector('#author');
const newQuotemButton = document.querySelector('#new-quote');
const twitterButton = document.querySelector('#twitter');

const quotesUrl = 'https://type.fit/api/quotes'
let phrases = [];

const fetchPhrases = async () =>{
    try{
        const res = await axios.get(quotesUrl);
        phrases = Array.from(res.data);
    }
    catch (e){
        alert(`Something went wrong... + ${e}`)
    }
}

const getNewQuote = () =>{
    let quoteNumber = getRamdomNumber();
    
    quoteText.innerText = phrases[quoteNumber].text;
    if(quoteText.length > 120)
        quoteText.classList.add('long-quote')
    else
        quoteText.classList.remove('long-quote')
        
    
    authorName.innerText = phrases[quoteNumber].author || 'Unknown';
}

function getRamdomNumber(){
    return Math.floor(Math.random() * (phrases.length));
}

newQuotemButton.addEventListener('click', (e) => getNewQuote())

twitterButton.addEventListener('click', (e) => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorName.innerText}`;
    window.open(twitterUrl, '_blank');
})

fetchPhrases();
