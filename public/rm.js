(function(scope){
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var musicPlayer, backgroundPlayer;
    scope.onYouTubeIframeAPIReady = function() {
        backgroundPlayer = new YT.Player('backgroundPlayer', {
            height: '100',
            width: '100',
            videoId: 'NiqM3lVirkw',
            controls: 0,
            events: {
                onReady: onPlayerReady,
                onStateChange: function(event){
                    if(event.data == YT.PlayerState.PLAYING){
                        Init();
                    }
                }
            },
            playerVars: { controls: 0, loop: 1, showinfo: 0 }
        });

        musicPlayer = new YT.Player('musicPlayer', {
            height: '0',
            width: '0',
            videoId: 'HMnrl0tmd3k',
            events: {
                onReady: onPlayerReady
            },
            playerVars: { loop: 1 }
        });
    }

    function onPlayerReady(event){
        event.target.setLoop(true);
        event.target.playVideo();
    }

    function Init(){
        document.querySelectorAll('#backgroundPlayer')[0].style.webkitAnimationPlayState = "running";
    }
})(window);