// 1. API URL
const url = "https://jsonplaceholder.typicode.com/users";
// const url = "https://fakestoreapi.com/users"

// 2. Fetch users data from the API URL
function fetchUsers() {
  // 2.1 Now we wll make use of the browsers fetch API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // 2.2 passing the users data to the renderUsers function
        renderUsers(data);
    });
}

// 3. Render the users in the DOM
function renderUsers(usersData){
    console.log(usersData);
    const ul = document.getElementById("user_list_container");
    console.log(ul);
    
    // 3.1 Now let render an li for each of d user
    usersData.forEach((user, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;
        
        // 3.2 Appending the current user li tag the ul tag
        ul.appendChild(li);
    });
}


// 4. Add a search function to to the DOM
function searchUserByUsername(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user_list_container");
    const inputValue = input.value.toUpperCase();
    const usersList = ul.querySelectorAll("li"); //array of all the li tags

    // Now let loop through all the users and render the ones that match the search
    for (let index= 0; index < usersList.length; index++){
        const usernameSpanTag = usersList[index].querySelector(".username");
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf (inputValue) > -1;

        if (isMatch) {
            usersList[index].style.display = "block";
        } else {
            usersList[index].style.display = "none";
        }
    }

}


// 5.Calling the fetch function to display the latest result
fetchUsers();
