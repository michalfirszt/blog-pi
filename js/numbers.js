$(document).ready(() => {

    let currentValue = $('#result').val();

    $('#addOne').click(() => {
        currentValue++;
        $('#result').val(currentValue);
    });

    $('#subtractOne').click(() => {
        currentValue--;
        $('#result').val(currentValue);
    });
});
