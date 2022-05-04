import React, { Component } from 'react';
import Hls from 'hls.js';
import Api from '../../components/api/api';



class embed extends Component {
    componentDidMount() {
        this._getVideoURL();
    }
    _getVideoURL = () => {
        Api.Get_Env_item()
            .then((response) => {
                if (response && response.data && response.data.data && response.data.data.playbackUrl) {
                    var url = response.data.data.playbackUrl;
                    if (Hls.isSupported() && this.player) {
                        const video = this.player;
                        const hls = new Hls({ enableWorker: false });
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, function () {
                            var fl = document.getElementById('videoelement');
                        });
                    }
                }
            });

    };

    render() {

        return (
            <div>
                <video
                    width="100%"
                    height="650px"
                    ref={(player) => (this.player = player)}
                    controls
                    id='videoelement'

                />
            </div>
        );
    }
}
export default embed;