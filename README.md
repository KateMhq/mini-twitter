# Mini-Twitter

For this small pair project. We are going to create a reduced version of the twitter interface.

## Tasks

- [ ] Create an HTML page in `index.html` which should contain `form` with a `textarea` and submit `button`. Add a `div` underneath which will contain our tweets 
timeline. The HTML should import `index.js` from `src` folder.

- [ ] Use preventDefault to prevent the `form` from being submitted. A good way to do it is by setting a `submit` event listener on the `form`.
^^^  const forms = document.querySelector('form'); 

forms.addEventListener('submit', function(event){
    
    event.preventDefault();

}) ^^^


- [ ] When we detect a `submit` on the `form` element, take the Tweet from the text area and place it at the top of the timeline underneath.

something similar? ^^^^^ const navBar = document.querySelector('.nav-items'); 
const about = document.querySelector('#about-link-container')

const remove = navBar.removeChild(about); 

navBar.appendChild(about);  ^^^^^^





- [ ] After a tweet is posted, clear the textarea.
textArea.addEventListener

## Stretch goals

- [ ] Add a character counter underneath the `textarea` which should update every time the content of `textarea` changes. A good way to do it is by setting a `input` event listener on the `textarea`. The `event` object passed to the event listener will have the `textarea` as the `event.target` property. We can then pull out the contents of the `textarea` by using the `event.target.value`.
- [ ] When `textarea` content goes over 280 characters, display the counter in red. When the contents go back below 280 set it back to default colour. Prevent tweets from being posted when character limit is over 280 characters.
- [ ] Add a delete icon to each tweet. On click, it should remove the corresponding tweet from the timeline.
- [ ] A Twitter handle starts with an `@` symbol and can only contain alpha-numeric characters. When posting a new tweet to the timeline, turn handles into links. for example if a tweet contains @dmitrigrabov it should be turned into `<a href="/dmitrigrabov">@dmitrigrabov</a>`.

## Setup

- Fork and clone this repo
- Work in pairs and make sure you swap the keyboard every half an hour
- Commit your code after each task is complete and push
- Create a Pull Request after first push
- If you are stuck for more than 20 mins ask for help
- Don't worry too much about making it look pretty, focus on getting the core functionality to work. It is easier to apply to apply visual polish at the end than at the beginning while you are still moving things around.
