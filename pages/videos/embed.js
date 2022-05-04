import React, { Component } from 'react';
import Hls from 'hls.js';
import Api from '../../components/api/api';
import { withRouter, NextRouter, useRouter } from 'next/router'
import {WithRouterProps} from 'next/dist/client/with-router'


class Embed extends React.Component{
    constructor(props){
        super(props);
        this.state={
          vdo:this.props.item,
          
        }
    }
    
    componentDidMount() {
        this._getVideoURL();

    }
    
    _getVideoURL = () => {
       console.log(this.props)
        // const jwt_token = localStorage.getItem('Jwt-token');
        // const key = 'd46919bc-add2-46cf-afca-ae01f93bea99';
        // Api.Get_vdo_player(key)
        //     .then((response) => {
        //         // if (response && response.data && response.data.data && response.data.data.playbackUrl) {
        //         //     // var url = response.data.data.playbackUrl;
                    
        //         // }
                
        //     });
        var url = 'https://videographond.akamaized.net/enc/04237f82-1436-44a6-9dc1-0fff309112c0/f5e2dfb5-1d3d-4b77-bead-c6f89d1db8d0/yupptv/2098/master.m3u8'
                    console.log(url)
                    if (Hls.isSupported() && this.player) {
                        const video = this.player;
                        const hls = new Hls({ enableWorker: false });
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, function () {
                            var fl = document.getElementById('videoelement');
                        });
                    }

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
export default Embed;