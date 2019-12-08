$(document).ready(() => {
    let posts = [];

    $.get('https://jsonplaceholder.typicode.com/users', (response) => {

        for (let i = 0; i < 6; i++) {
            posts[i] = response[i];
        }

        posts.forEach((element) => {
            $('.response-list').append('<li>' + element.username + '</li>');
        });
    });
});
