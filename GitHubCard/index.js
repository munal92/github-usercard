/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards");
const axiosPromise = axios.get('https://api.github.com/users/munal92');

axiosPromise.then(response => {
  //console.log(cards);
  const newPerson = response.data;
  console.log(myProfileData(newPerson));
  cards.appendChild(myProfileData(newPerson));
//console.log(response)



});

//console.log(axiosPromise);


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/




/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

const axiosPromise2 = axios.get('https://api.github.com/users/munal92/followers');


axiosPromise2.then(response => {

console.log('yenifonk', response.data[0].login);

response.data.forEach(follower => {

  const axiosPromise3 = axios.get(`https://api.github.com/users/${follower.login}`);
  console.log('yeniax', axiosPromise3);    
    axiosPromise3.then(response => {
          const newPerson = response.data;
         // console.log(myProfileData(newPerson));
          cards.appendChild(myProfileData(newPerson));

          // response.data.url.forEach(follower => {
          // const newFollowers = myProfileData(follower)
          // cards.appendChild(newFollowers);
          
        });
     
  
     });

});


// axiosPromise2.then(response => {
//   console.log(response.data);
//   response.data.forEach(follower => {
//     const newFollowers = myProfileData(follower)
//     cards.appendChild(newFollowers);

//    });

// });


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info"> +
    <h3 class="name">{users name}</h3>  +
    <p class="username">{users user name}</p> +
    <p>Location: {users location}</p> +
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


function myProfileData (profileData) {
  const newData = document.createElement('div');
  const imgUrl = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const usersUserName = document.createElement('p');
  const usersLoc = document.createElement('p');
  const userProf = document.createElement('p');
  const usersAdressGit = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');
  
  newData.appendChild(imgUrl);
  newData.appendChild(cardInfo);
  cardInfo.appendChild(userName);  
  cardInfo.appendChild(usersUserName);  
  cardInfo.appendChild(usersLoc);  
  cardInfo.appendChild(userProf);  
  cardInfo.appendChild(userFollowers);  
  cardInfo.appendChild(userFollowing);  
  cardInfo.appendChild(userBio);  

  userProf.appendChild(usersAdressGit);

  
  newData.classList.add('card');
  cardInfo.classList.add('card-info');
  userName.classList.add('name');
  usersUserName.classList.add('username');


 




   imgUrl.src = profileData.avatar_url
   userName.textContent = profileData.name;
   usersUserName.textContent = profileData.login;
   usersLoc.textContent = `Location: ${profileData.location}`;
   usersAdressGit.textContent = profileData.html_url;
   userFollowers.textContent = `Followers: ${profileData.followers}`;
   userFollowing.textContent = `Following: ${profileData.following}`;
   userBio.textContent = `Bio: ${profileData.bio}`;




return newData;

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
