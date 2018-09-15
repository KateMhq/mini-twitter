// Element.prototype.appendAfter = function (element) {
//     element.parentNode.insertBefore(this, element.nextSibling);
//    };


const form = document.querySelector('form');
const tweetInput = document.querySelector('.tweet-input');
const timeline = document.querySelector('.timeline');
const submit=document.querySelector(".tweet-button");
let count = document.querySelector('.characterCount');

form.addEventListener('submit', function(event){
    event.preventDefault();

    if (count.textContent<=280){
    let tweetOutput=document.createElement("div");
    tweetOutput.className = 'tweet';

    //tweetOutput.innerHTML = `<p>${tweetInput.value}</p>`
    let n=tweetInput.value.indexOf("@");
    if (n!==-1){
      let newString = tweetInput.value;

      let newN=n;
      let count=(newString.match(/@/g)).length;
      console.log(count);
      for (i=0;i<count;i++){
      let m=tweetInput.value.indexOf(" ",newN)
      let name=tweetInput.value.slice(newN+1,m);
      newN=tweetInput.value.indexOf("@",newN+1);
      newString=newString.replace(`@${name}`,`<a href="/${name}">@${name}</a>`)
    }
    tweetOutput.innerHTML = `<p>${newString}</p>`;
    }

    let deleteTweet=document.createElement("button");
    deleteTweet.innerHTML=`Delete`;
    deleteTweet.onclick=function(event){
      timeline.removeChild(tweetOutput);
    }
    tweetOutput.appendChild(deleteTweet);

    let refTweet = document.querySelector('.tweet')
    if (timeline == null) {
        timeline.appendChild(tweetOutput);
    } else {
        timeline.insertBefore(tweetOutput, refTweet);
    }
    tweetInput.value = "";
    count.textContent = 0;

  };
});



tweetInput.addEventListener('input', function(event){
    count.textContent = event.target.value.length;
    if (event.target.value.length>280){
        count.style.color = "red";
    } else {
        count.style.color="black";
    }
})
