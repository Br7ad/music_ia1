let m1;
let m2;

function preload() {
    // Carrega os arquivos de música
    m1 = loadSound('assets/music1.mp3');
    m2 = loadSound('assets/music2.mp3');
}

function setup() {
    createCanvas(400, 200);
    background(200);
    
    // Botões para tocar as músicas
    let playButton1 = createButton('Tocar Música 1');
    playButton1.position(10, 10);
    playButton1.mousePressed(() => {
        if (m1.isPlaying()) {
            m1.stop();
        } else {
            m1.play();
        }
    });

    let playButton2 = createButton('Tocar Música 2');
    playButton2.position(10, 40);
    playButton2.mousePressed(() => {
        if (m2.isPlaying()) {
            m2.stop();
        } else {
            m2.play();
        }
    });
}

function draw() {
    // Você pode adicionar visualizações de música aqui
}
function setup() {
    // Cria a tela e centraliza
    let canvas = createCanvas(640, 480);
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);

    // Acessa a webcam
    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide(); // Oculta o componente extra criado pelo p5.js
    poseNet = ml5.poseNet(capture, modelReady);
    poseNet.on('pose', function(results) {
        poses = results;
});
function modelReady() {
    console.log('Modelo PoseNet está pronto')};

function draw() {
    background(200);
    image(capture, 0, 0, width, height); // Exibe a imagem da webcam na tela
}
var x  = 0
var y = 0
var x2 = 0
var y2 = 0


function got_poses () {
if (poses.length > 0) {
    let pose = poses[0].pose;

    // Verifica se os pontos de confiança são maiores que 0
    if (pose.keypoints.length > 0) {
        // Busca as coordenadas X e Y dos pulsos esquerdo e direito
        leftWristX = pose.keypoints.find(point => point.part === 'leftWrist').position.x;
        leftWristY = pose.keypoints.find(point => point.part === 'leftWrist').position.y;
        rightWristX = pose.keypoints.find(point => point.part === 'rightWrist').position.x;
        rightWristY = pose.keypoints.find(point => point.part === 'rightWrist').position.y;}
        fill(0, 255, 0);
        ellipse(leftWristX, leftWristY, 10, 10);
        ellipse(rightWristX, rightWristY, 10, 10);
    }