var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (i in names) {
    if (names[i][0] === 'J' || names[i][0] === 'j') {
        byeSpeaker(names[i]);
    } else {
        helloSpeaker(names[i]);
    }
}