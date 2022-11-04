import React, { Component,useRef, useState, useEffect } from 'react';
import Hls from 'hls.js';
import Api from './api/api';
import videojs from 'video.js'
import 'video.js/dist/video-js.css';
import qualitySelector from 'videojs-hls-quality-selector';
import qualityLevels from 'videojs-contrib-quality-levels'



// class Player extends Component {
//   componentDidMount() {
//     this._getVideoURL();
//   }
//   _getVideoURL = () => {
//     Api.Get_Env_item()
//       .then((response) => {
//         if (response && response.data && response.data.data && response.data.data.playbackUrl) {
//           var url = response.data.data.playbackUrl;
//           if (Hls.isSupported() && this.player) {
//             const video = this.player;
//             const hls = new Hls({ enableWorker: false });
//             hls.loadSource(url);
//             hls.attachMedia(video);
//             hls.on(Hls.Events.MANIFEST_PARSED, function () {
//               // video.play();
//             });
//           }
//         }
//       });
    
//   };
  
//   render() {
//     const pausedvideo =(e)=>{
//       this.props.handlethumnail(e.target.currentTime)
//     }
//     return (
//       <div>
//         <video
//           width="100%"
//           height="230px"
//           ref={(player) => (this.player = player)}
//           controls
//           onSeekedCapture={(e)=>pausedvideo(e)}
//           onPause={(e)=>pausedvideo(e)}
          
//         />  
//       </div>
//     );
//   }
// }

const Player=()=>{
  const videoRef = useRef()
  const [player, setPlayer] = useState(undefined)

  useEffect(() => {
    Api.Get_Env_item()
      .then((response) => {
        if (response && response.data && response.data.data && response.data.data.playbackUrl) {
          var url = response.data.data.playbackUrl;
      const videoJsOptions = {
        playbackRates:[0.5,1,1.5,2],
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
        
          console.log(qualityLevels,videoRef.current,'onPlayerReady')
      })
      setPlayer(p)
      return () => {
          if (player) player.dispose()
      };
    }})
  }, [])

  useEffect(() => {
   
      if (player) {
        let qualityLevels = player.qualityLevels();
        qualityLevels.on('addqualitylevel', function (event) {
          let qualityLevel = event.qualityLevel;
          if (qualityLevel.height) {
            console.log(qualityLevel)
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
              <video ref={videoRef} className="video-js"></video>
      </div>
  );
}
export default Player;