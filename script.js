const startButton = document.getElementById('startButton');
const videoPlayer = document.getElementById('videoPlayer');
const contentContainer = document.getElementById('contentContainer');

function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
        return document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        return document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        return document.document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        return document.document.documentElement.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        return document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        return document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        return document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        return document.msExitFullscreen();
    }
}

function playVideoFullscreen() {
    videoPlayer.style.display = 'block';
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const videoAspectRatio = videoPlayer.videoWidth / videoPlayer.videoHeight;

    if (screenWidth >= screenHeight) {
        videoPlayer.style.width = `${screenHeight * videoAspectRatio}px`;
        videoPlayer.style.height = `${screenHeight}px`;
        videoPlayer.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    } else if (screenHeight >= screenWidth){
        videoPlayer.style.width = `${screenHeight * videoAspectRatio}px`;
        videoPlayer.style.height = `${screenWidth}px`;
        videoPlayer.style.transform = 'translate(-50%, -50%) rotate(90deg)';
    }
    videoPlayer.play();
}

startButton.addEventListener('click', () => {
    contentContainer.style.display = 'none';
    enterFullscreen().then(() => {
        playVideoFullscreen();
    });
});

document.addEventListener('click', () => {
    if (videoPlayer.style.display === 'block') {
        videoPlayer.pause();
        videoPlayer.style.display = 'none';
        exitFullscreen();
        contentContainer.style.display = 'block';
    }
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        videoPlayer.pause();
        videoPlayer.style.display = 'none';
        contentContainer.style.display = 'block';
    }
});
