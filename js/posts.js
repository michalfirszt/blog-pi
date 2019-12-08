$(document).ready(() => {
    let users = [];

    $.get('https://jsonplaceholder.typicode.com/users', (response) => {

        for (let i = 0; i < 6; i++) {
            users[i] = response[i];
        }

        users.forEach((element) => {
            $('.response-list').append('<li>' + element.username + '</li>');
        });
    });
});
