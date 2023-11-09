async function getData() {
    const myResponse = await fetch('http://localhost:3000/posts');
    console.log('myResponse', myResponse);
    const myPosts = await myResponse.json();
    console.log('myPosts', myPosts);
    
    document.getElementById('sports').innerHTML = '';
    document.getElementById('economics').innerHTML = '';
    document.getElementById('politics').innerHTML = '';
    document.getElementById('nonCatNews').innerHTML = '';



    for (let i=0; i < myPosts.length; i++) {
        let myDiv = document.createElement('div');
        myDiv.innerHTML = myPosts[i].title;
        let myText = document.createElement('div');
        myText.innerHTML = myPosts[i].text;

        let newsContainer = document.createElement('div');
        newsContainer.classList = 'news__item';
        
        newsContainer.appendChild(myDiv);
        newsContainer.appendChild(myText);

        if (myPosts[i].category === 'sports') {
            document.getElementById('sports').appendChild(newsContainer);
        } else if (myPosts[i].category === 'economics') {
            document.getElementById('economics').appendChild(newsContainer);
        } else if (myPosts[i].category === 'politics') {
            document.getElementById('politics').appendChild(newsContainer);
        } else {
            document.getElementById('nonCatNews').appendChild(newsContainer);
        }
        
    }
}