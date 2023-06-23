$(document).ready(function () {
    $('.submit').click(function (event) {
        const email = $('.email').val();
        const message = $('.message').val();
        const name = $('.name').val();
        let statusElement = $('.status');
        statusElement.empty();

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElement.append('<div>email is valid</div>');
        } else {
            event.preventDefault()
            statusElement.append('<div>email is not valid</div>')
        }

        if(name.length > 1) {
            statusElement.append('<div>name is valid</div>');
        } else {
            event.preventDefault()
            statusElement.append('<div>name is not valid</div>');
        }

        if(message.length > 1) {
            statusElement.append('<div>message is valid</div>');
        } else {
            event.preventDefault()
            statusElement.append('<div>message is not valid</div>');
        }

    })
})