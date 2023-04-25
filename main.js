//https://teachablemachine.withgoogle.com/models/obpHsH3F_/
function Recognise(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/obpHsH3F_/model.json', modelReady);
    start_prompt = new Audio("Default iPhone Notification Sound Apple Sound - Sound Effect for Editing.mp3");
    start_prompt.play();
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        window.alert(error);
    } else {
        console.log(results);
        document.getElementById("Sound").innerHTML = "Sound Recognised: " + results[0].label;
        document.getElementById("Accuracy").innerHTML = "Accuracy: " + (results[0].confidence*100).toFixed(2) + "%";

        if (results[0].label == "Dog Barking"){
            document.getElementById("img").src = "dog.gif";
        } else if (results[0].label == "Cat Meowing"){
            document.getElementById("img").src = "cat.gif";
        } else if (results[0].label == "Bird Chirping"){
            document.getElementById("img").src = "bird.gif"
        } else if (results[0].label == "Lion Roaring"){
            document.getElementById("img").src = "lion.gif"
        } else {
            document.getElementById("img").src = "bg.gif"
        }
    }
}