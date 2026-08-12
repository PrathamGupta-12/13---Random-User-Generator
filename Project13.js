const btn = document.getElementById('generateUserBtn');

let name = document.getElementById('fullName');

let age = document.getElementById('age');

let gender = document.getElementById('gender');

let email = document.getElementById('email');

let phone = document.getElementById('phone');

let country = document.getElementById('country');

let profileImage = document.getElementById('profileImage');

let baseUrl = "https://randomuser.me/api/";

btn.addEventListener("click" , async (e) => {

    e.preventDefault();

    try {

        let response = await fetch(baseUrl);

        if (!response.ok) {
            throw new Error("FAILED to load User.");
        }

        let data = await response.json();

        let UserInfo = data.results;

        displayUser(UserInfo);
    }

    catch (error) {
        alert('Some Error occured.');
        console.log(error);
    }


})

function displayUser(UserDetails) {

    if (!UserDetails || UserDetails.length === 0) {
        return;
    }

    let user = UserDetails[0]

    name.innerText = `${user.name.title}. ${user.name.first} ${user.name.last}`;
    
    age.innerText = user.dob.age;
    
    gender.innerText = user.gender;
    
    email.innerText = user.email;
    
    phone.innerText = user.phone;
    
    country.innerText = user.location.country;
    
    profileImage.src = user.picture.large || " ";

}
