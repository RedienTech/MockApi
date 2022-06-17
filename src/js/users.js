//Card to show the gifs

const UserElement = document.getElementById("users-table");

class UserList {
    constructor(users) {
        this.users = users;
    }

    render() {
        const userList= this.users.map(user => {
            return `<tr>
                        <th scope="row">${user.id}</th>
                        <td>${user.name}</td>
                        <td>${user.gender}</td>
                        <td>
                        <img src="${user.avatar}" class="img-thumbnail" alt="${user.id}">
                        </td>
                    </tr>`;
        }).join('');
        return userList
    }
}

fetch("https://62aa7e933b3143855447f1ca.mockapi.io/api/v1/Users", {method: "GET"})
    .then(response => {
        response.json()
         .then(res => {
            const userList = new UserList(res);
            UserElement.innerHTML = userList.render();
        })
    })