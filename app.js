function getQuote(){
    let quotes = [
        {
            quote:'War is peace. Freedom is slavery Ignorance is strength',
            author:'George Orwell, 1984'
        },
        {
            quote:'Some tourists think Amsterdam is a city of sin, but in truth it is a city of freedom. And in freedom, most people find sin',
            author:'John Green, The Fault in Our Stars'
        },
        {
            quote:'Freedom is not worth having if it does not include the freedom to make mistakes.',
            author:'Mahatma Gandhi'
        }
    ]
    for(let i=0;i<=quotes.length;i++){
            document.getElementById('quote-item').innerHTML=quotes[i].quote
            document.getElementById('author-item').innerHTML=quotes[i].author
    }
   
}

