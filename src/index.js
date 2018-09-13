// Element.prototype.appendAfter = function (element) {
//     element.parentNode.insertBefore(this, element.nextSibling);
//    };


         

const form = document.querySelector('form'); 
const tweetInput = document.querySelector('.tweet-input')
const timeline = document.querySelector('.timeline')
const submit=document.querySelector(".tweet-button")
//let characterCount = document.createElement('p');
let count = document.querySelector('.characterCount')


form.addEventListener('submit', function(event){
    event.preventDefault()
    if (count.textContent<=280){
    
    
    let tweetOutput=document.createElement("div");
    tweetOutput.className = 'tweet'
    tweetOutput.innerHTML = `<p>${tweetInput.value}</p> 
                            <input class="delete-button" type="submit" value="Delete">`;
        
        tweetOutput.addEventListener('submit', function(event){
            event.preventDefault(); 
            timeline.removeChild(tweetOutput)
        })


    let refTweet = document.querySelector('.tweet')
    if (timeline == null) {
        timeline.appendChild(tweetOutput);
    } else {
        timeline.insertBefore(tweetOutput, refTweet);
    }
    tweetInput.value = "";
    count.textContent = 0; 
    
}
})

    
// form.insertBefore(characterCount,submit);

tweetInput.addEventListener('input', function(event){
    count.textContent = event.target.value.length;
    if (event.target.value.length>280){
        count.style.color = "red";
    } else {
        count.style.color="black";
    }
    //characterCount.className="count";
    //characterCount.innerHTML=`${count}`
})

console.log(timeline)




