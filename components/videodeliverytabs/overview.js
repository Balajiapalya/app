import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import { useState } from 'react'
import Link from 'next/link';

export default function Overview() {

    return (
        <Fragment>

            <div className={styles.overview}>
                <div className={styles.geturl}>

                <p>GET/videos/v1/assets/kH67tWxjPHW7c8J3Xd02N5W01v09hRkp4b4qnsijByKTm4</p>
                </div>
                <div className={styles.functional_buttons}>
                <div className={styles.actions}>
                        <button className='btn'>Activities</button>
                                <img src="Icon awesome-file-alt.png" alt="file"></img>
                            </div>
                            <div className={styles.delete_stream}>
                            <button className='btn'>Delete</button>
                                <img src="Icon material-delete.png" alt="delete"></img>
                            </div>
                           
                </div>
                <div className={styles.asset_detials}>
                
                </div>
                <div className={styles.playback}>

                </div>
                <div className={styles.video_urls}>
                    <h2>Video URLs</h2>
                    <div className={styles.link_copy}>
                        <div className={styles.link_video}>
                 <h4>Link to video</h4>
                 <p></p>
                 </div>
                 <div className={styles.link_hls}>
                 <h4>Link to HLS</h4>
                 <p></p>
                 </div>
                 <div className={styles.link_embedcode}>
                 <h4>Embed code</h4>
                 <p></p>
                 </div>
                 <div className={styles.link_thumbnail}>
                 <h4>Link to Thumbnail</h4>
                 <p></p>
                 </div>
                 </div>
                </div>
                
                <div className={styles.input_file}>
                <h2>Input File Media Info</h2>
                    <div className={styles.media_info}>
                    <h4>Video URL</h4>
                    <p>https://d70jkbWEDJkdjcJNDKJDNJSDCNvnbkj.mp4</p>
                  
                    <h4>Video Info</h4>
                    
                    <table>
                                <thead>
                                    <tr>
                                        <th>Width</th>
                                        <th>Height</th>
                                        <th>Frame Rate</th>
                                        <th>Encoding</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1280px</td>
                                        <td>720px</td>
                                        <td>25 fps</td>
                                        <td>H.264</td>
                                        <td>29:56:07</td>
                                    </tr>
                                </tbody>
                            </table>
        
                    <h4>Audio Info</h4>
                    <table>
                    <thead>
                                    <tr>
                                        <th>Sample Rate</th>
                                        <th>Encoding</th>
                                        <th>Channels</th>
                                       
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>44 Khz</td>
                                        <td>ACC</td>
                                        <td>2</td>
                                
                                        <td>29:56:07</td>
                                    </tr>
                                </tbody>
                    </table>
                    </div>
                </div>
                </div>
             

            
           

        </Fragment >
    )
}