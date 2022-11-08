import React, { Component } from 'react';
import Hls from 'hls.js';
import Api from './api/api';




class Livestream_Player extends Component {
    componentDidMount() {
        this._getVideoURL();
    }
   componentDidUpdate(){
    this._getVideoURL
   }
    _getVideoURL = () => {

        var url =this.props?.playback_url;
        if (Hls.isSupported() && this.player && this.props?.playback_url) {
            const video = this.player;
            const hls = new Hls({ enableWorker: false });
            hls.loadSource(url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        }else{
           
        }
    }

    render() {
       
        const pausedvideo = (e) => {
            this.props.handlethumnail(e.target.currentTime)
        }
        return (
            <div>
                <video
                    width="100%"
                    height="230px"
                    ref={(player) => (this.player = player)}
                    controls
                    onSeekedCapture={(e) => pausedvideo(e)}
                    onPause={(e) => pausedvideo(e)}

                />
            </div>
        );
    }
}
export default Livestream_Player;