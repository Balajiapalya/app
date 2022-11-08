import React, { Component ,useRef, useState, useEffect} from 'react';
import Hls from 'hls.js';
import Api from './api/api';
import videojs from 'video.js'
import 'video.js/dist/video-js.css';
// used to set quality level
import qualitySelector from 'videojs-hls-quality-selector';
import qualityLevels from 'videojs-contrib-quality-levels'



// class Livestream_Player extends Component {
//     componentDidMount() {
//         this._getVideoURL();
//     }
//    componentDidUpdate(){
//     this._getVideoURL
//    }
//     _getVideoURL = () => {

//         var url =this.props?.playback_url;
//         if (Hls.isSupported() && this.player && this.props?.playback_url) {
//             const video = this.player;
//             const hls = new Hls({ enableWorker: false });
//             hls.loadSource(url);
//             hls.attachMedia(video);
//             hls.on(Hls.Events.MANIFEST_PARSED, function () {
//                 video.play();
//             });
//         }else{
           
//         }
//     }

//     render() {
       
//         const pausedvideo = (e) => {
//             this.props.handlethumnail(e.target.currentTime)
//         }
//         return (
//             <div>
//                 <video
//                     width="100%"
//                     height="230px"
//                     ref={(player) => (this.player = player)}
//                     controls
//                     onSeekedCapture={(e) => pausedvideo(e)}
//                     onPause={(e) => pausedvideo(e)}

//                 />
//             </div>
//         );
//     }
// }




const Livestream_Player = (props) => {
  const videoRef = useRef()
  const [player, setPlayer] = useState(undefined)
  
  useEffect(() => {
    
    var url =props?.playback_url;
    // Api.Get_Env_item()
    //   .then((response) => {
    //     if (response && response.data && response.data.data && response.data.data.playbackUrl) {
    //       var url = response.data.data.playbackUrl;
          const videoJsOptions = {
            html5: {
              vhs: {
                overrideNative: true
              },
              nativeAudioTracks: false,
              nativeVideoTracks: false
            },
            playbackRates: [0.5, 1, 1.5, 2],
            autoplay: false,
            controls: true,
            fluid: true,
            muted: true,
            responsive: true,
            sources: [{
              src: url,
              
            }],
          }

          // videojs.registerPlugin('hlsQualitySelector', qualitySelector);
          // videojs.registerPlugin('qualitylevel', qualityLevels);

          const p = videojs(videoRef.current, videoJsOptions, function onPlayerReaady() {
            this.src({
              src: url,
              type: 'application/x-mpegURL',
            })
          })
          setPlayer(p)
          return () => {
            if (player) player.dispose()
          };
      //   }
      // })
  }, [])

  const pausedvideo =(e)=>{
        props.handlethumnail(e.target.currentTime)
        }
  useEffect(() => {

    if (player) {
      let qualityLevels = player.qualityLevels();
      console.log(qualityLevels)
      qualityLevels.on('addqualitylevel', function (event) {
        let qualityLevel = event.qualityLevel;
        if (qualityLevel.height) {
          qualityLevel.enabled = true;
        } else {
          qualityLevels.removeQualityLevel(qualityLevel);
          qualityLevel.enabled = false;
        }
      });
    
      player.hlsQualitySelector({ displayCurrentQuality: true })
    }
  }, [player])


  return (
    <div data-vjs-player>
      <video ref={videoRef} className={"video-js vjs-default-skin vjs-big-play-centered"}
       onContextMenu={(e) => e.preventDefault()}
        width="100%"
        height="230px"
        onSeekedCapture={(e)=>pausedvideo(e)}
        onPause={(e)=>pausedvideo(e)}
      ></video >
    </div>
  );
}

export default Livestream_Player;