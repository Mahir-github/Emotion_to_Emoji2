predection_1 = "";
predection_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quaity: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json', modelLoaded);
function modelLoaded() {
    console.log('model loaded');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first predection is "+predection_1;
    speak_data_2 = "The second predection is "+predection_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}