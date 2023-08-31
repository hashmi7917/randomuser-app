const generateUserBtn = document.querySelector('#getuser');
const avatar = document.querySelector('#avatar');
const userName = document.querySelector('.name');
const email = document.querySelector('.email');
const contact = document.querySelector('#contact');
const userlocation = document.querySelector('#location');
const gender = document.querySelector('#gender');
const bg = document.querySelector('body');

avatar.src = 'https://randomuser.me/api/portraits/women/29.jpg';

function getUser() {
  fetch('https://randomuser.me/api/', { credentials: 'omit' })
    .then((response) => response.json())
    .then((data) => {
      const userObj = data.results[0];

      userName.textContent = `${userObj.name.first} ${userObj.name.last}`;
      email.textContent = `${userObj.email}`;
      contact.textContent = `${userObj.phone}`;
      userlocation.textContent = `${userObj.location.city}`;
      if (userObj.gender === 'male') {
        bg.style.backgroundColor = '#257dd7';
      } else {
        bg.style.backgroundColor = '#b938db';
      }
      gender.textContent = `${userObj.gender}`;
      avatar.src = `${userObj.picture.thumbnail}`;
    })
    .catch((error) => console.log('Something went wrong', error));
}
generateUserBtn.addEventListener('click', getUser);
