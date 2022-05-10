import React, { Component } from 'react';
import Hls from 'hls.js';
import Api from '../../components/api/api';
import { withRouter, NextRouter, useRouter } from 'next/router'



class Embed extends React.Component {
   
    
    componentDidMount() {
        this._getVideoURL();

    }

    _getVideoURL = () => {
        // const jwt_token = localStorage.getItem('Jwt-token');
        // const key = 'd46919bc-add2-46cf-afca-ae01f93bea99';
        // const key = this.props.router.query.videoId;
        // console.log(this.props)
        // console.log(key)
        
        Api.Get_Playback_URL(window.location.search.split("videoId=")[1].split("&")[0])
            .then((response) => {
                if (response && response.data && response.data.data) {
                    var url = response.data.data;
                    // console.log(url)
                    if (Hls.isSupported() && this.player) {
                        const video = this.player;
                        const hls = new Hls({ enableWorker: false });
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, function () {
                            // var fl = document.getElementById('videoelement');
                        });
                    }
                }

            });
    };

    render() {
    //    console.log(window.innerHeight)
        return (
            <div>
                <video
                    width="100%"
                    height="617px"
                    ref={(player) => (this.player = player)}
                    controls
                    id='videoelement'

                />
                
            </div>
        );
    }
}
export default withRouter(Embed);