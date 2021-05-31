let btn=document.getElementById('btn');
let output=document.getElementById('output');
let quote=[

    '"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',
'"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt',
'"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead',
'"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',
'"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin',
'"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller',
'"It is during our darkest moments that we must focus to see the light." -Aristotle',
'"Whoever is happy will make others happy too." -Anne Frank',
'"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson',
    '"You learn more from failure than from success. Do not let it stop you . Failure builds character"-Unknown',
'“First, solve the problem. Then, write the code.” – John Johnson',
'“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler',
'“Experience is the name everyone gives to their mistakes.” – Oscar Wilde',
'“ In order to be irreplaceable, one must always be different” – Coco Chanel',
'“Knowledge is power.” – Francis Bacon',
'“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon',
'“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” – Antoine de Saint-Exupery',
'“ Code is like humor. When you have to explain it, it’s bad.” – Cory House',
'“Fix the cause, not the symptom.” – Steve Maguire',
'“Optimism is an occupational hazard of programming: feedback is the treatment. “ Kent Beck',
'“When to use iterative development? You should use iterative development only on projects that you want to succeed.” – Martin Fowler',
'“Simplicity is the soul of efficiency.” – Austin Freeman',
'“Before software can be reusable it first has to be usable.” – Ralph Johnson',
'“Make it work, make it right, make it fast.” – Kent Beck',

];
btn.addEventListener('click',function(){
    var randomQuote=quote[Math.floor(Math.random()* quote.length)]
    output.innerHTML=randomQuote;

})



