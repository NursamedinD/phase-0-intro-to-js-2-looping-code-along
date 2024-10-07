function writeCards(names, event) {
    var messages = [];
    
    for (var i = 0; i < names.length; i++) {
        var message = "Thank you, " + names[i] + ", for the wonderful " + event + " gift!";
        messages.push(message);
    }

    return messages;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num = num - 1;
    }
}