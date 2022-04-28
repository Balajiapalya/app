import { useEffect, useState, useContext } from 'react';
import styles from '../../styles/analytics_tabs.module.css';
import Api from '../api/api';
import { EnvValue } from '../../pages/analytics/index'
import { useRouter } from 'next/router';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    circle
} from "react-simple-maps";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    Filler,
    ArcElement,
);
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
export default function Metrics() {
    const valueEnv = useContext(EnvValue)
    const [amountstreamed, set_amountstreamed] = useState([]);
    const [viewsStatistics, set_viewsStatistics] = useState([]);
    const [videoviews, setvideoviews] = useState([]);
    const [countryviews, setcountryviews] = useState([]);
    const [divicesviews, setdeviceviews] = useState([]);
    const [Osviews, setOsviews] = useState([]);
    const [applicationsviews, setapplicationsviews] = useState([]);
    const [playerviews, setplayerviews] = useState([]);
    const [toggleposition,settoggleposition]=useState(2)
    const [date,setdate]=useState();
    useEffect(() => {
        Usage_statistics_data();
        Views_statistics_data();
    },[valueEnv])


    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    };
    const videos_data = {
        labels: videoviews.slice(0, 5).map((videos, key) => videos?.key.substring(0, 20)),
        datasets: [
            {
                data: videoviews.map((item, key) => item?.count),
                backgroundColor: 'rgba(53, 162, 235, 1)',
                barThickness: 20,
                borderRadius: 2,
            },
        ],
    };
    const device_data = {
        labels: divicesviews.slice(0, 5).map((videos, key) => videos?.key),
        datasets: [
            {
                data: divicesviews.map((item, key) => item?.count),
                backgroundColor: 'rgba(53, 162, 235, 1)',
                barThickness: 20,
                borderRadius: 2,
            },
        ],
    }
    const player_data = {
        labels: playerviews.slice(0, 5).map((player, key) => player?.key.substring(0, 7)),
        datasets: [
            {
                data: playerviews.map((item, key) => item?.count),
                backgroundColor: 'rgba(53, 162, 235, 1)',
                barThickness: 20,
                borderRadius: 2,
            },

        ],
    }
    const Os_data = {
        labels: Osviews.slice(0, 5).map((player, key) => player?.key),
        datasets: [
            {
                data: Osviews.map((item, key) => item?.count),
                backgroundColor: 'rgba(53, 162, 235, 1)',
                barThickness: 20,
                borderRadius: 2,
            },
        ],
    }
    const application_data = {
        labels: applicationsviews.slice(0, 5).map((application, key) => application?.key),
        datasets: [
            {
                data: applicationsviews.map((item, key) => item?.count),
                backgroundColor: 'rgba(53, 162, 235, 1)',
                barThickness: 20,
                borderRadius: 2,
            },
        ],
    }
    const togglebtn = (index)=>{
        settoggleposition(index);
    }
    const setday = () =>{
       let yesterday= new Date().setDate(new Date().getDate() - 1)
        setdate(yesterday)
        if(setdate(yesterday)!=""){
            Views_statistics_data()
        }

    }
    const setweek = ()=>{
        let sevendaybeforedate= new Date().setDate(new Date().getDate() - 7);
        setdate(sevendaybeforedate);
        if(setdate(sevendaybeforedate)!=""){
            Views_statistics_data();
        }
    }
    const setmonth = ()=>{
        let monthbeforedate = new Date().setDate(new Date().getDate() - 28);
        setdate(monthbeforedate)
        if(setdate(monthbeforedate)!=""){
            Views_statistics_data();
        }
    }
    const Usage_statistics_data = () => {
        if (valueEnv) {
            Api.Usage_statistics(valueEnv,date)
                .then(res => {
                    set_amountstreamed(res && res.data && res.data.data && res.data.data.totalUsageRecords && res.data.data.totalUsageRecords.filter(record => record.usage == 'RecordStreamingUsage')[0] && res.data.data.totalUsageRecords.filter(record => record.usage == 'RecordStreamingUsage')[0].amountInSecs)
                })
        }
    };
    const Views_statistics_data = () => {
        
        Api.Views_statistics(valueEnv,date)
            .then(res => {
                set_viewsStatistics(res.data.data);
                setvideoviews(res.data.data.videoViews);
                setcountryviews(res.data.data.countryViews);
                setdeviceviews(res.data.data.deviceViews);
                setOsviews(res.data.data.osViews);
                setapplicationsviews(res.data.data.applicationViews);
                setplayerviews(res.data.data.playerViews)
            })
    }
    return (
        <div className={styles.container}>
            <div className={styles.Metrics_heading}>
                <h3>Viewership Insights</h3>
                <div>
                    <div className={styles.date_toggle}>
                        <button className={toggleposition==1?`${styles.date_toggle_btn} ${styles.active_btn}`:`${styles.date_toggle_btn}`} onClick={()=>[togglebtn(1),setday()]}>Day</button>
                        <button className={toggleposition==2?`${styles.date_toggle_btn} ${styles.active_btn}`:`${styles.date_toggle_btn}`} onClick={()=>[togglebtn(2),setweek()]}>Week</button>
                        <button className={toggleposition==3?`${styles.date_toggle_btn} ${styles.active_btn}`:`${styles.date_toggle_btn}`} onClick={()=>[togglebtn(3),setmonth()]}>Month</button>
                    </div>
                    <div></div>
                </div>
            </div>
            {[viewsStatistics].map((item, key) => <>

                <div className={styles.views_cards}>
                    <div className={styles.cards_container}>
                        <div className={styles.cards_details}>
                            <h4>No.of Views</h4>
                            <div className={styles.totalViews}>
                                <h5>{item.totalViews}</h5>
                                <span>Number of views that started playback</span>
                            </div>
                        </div>
                        <div className={styles.card_logo}>
                            <img src='/images/metrics-views.png' alt='img' />
                        </div>
                    </div>
                    <div className={styles.cards_container}>
                        <div className={styles.cards_details}>
                            <h4>No.of Unique Views</h4>
                            <div className={styles.UniqueViews}>
                                <h5>{item.uniqueViews}</h5>
                                <span>Unique viewers that started playback,based on User ID.</span>
                            </div>
                        </div>
                        <div className={styles.card_logo}>
                            <img src='/images/metrics-unique-views.png' alt='img' />
                        </div>
                    </div>
                    <div className={styles.cards_container}>
                        <div className={styles.cards_details}>
                            <h4>Watched Time</h4>
                            <div className={styles.UniqueViews}>
                                <h5>{(amountstreamed / 3600).toFixed(0)}hrs</h5>
                                <span>Time (in hours) that viewers watched videos.</span>
                            </div>
                        </div>
                        <div className={styles.card_logo}>
                            <img src='/images/metrics-watched-time.png' alt='img' />
                        </div>
                    </div>
                    <div className={styles.cards_container}>
                        <div className={styles.cards_details}>
                            <h4>Errors</h4>
                            <div className={styles.UniqueViews}>
                                <h5>{item.errors}</h5>
                                <span>Number of playback errors detected by Videograph.</span>
                            </div>
                        </div>
                        <div className={styles.card_logo}>
                            <img src='/images/metrics-views.png' alt='img' />
                        </div>
                    </div>
                </div>
                <div className={styles.Countries_videos}>
                    <div className={styles.countries_container}>
                        <div className={styles.countries_map} >
                            <div className={styles.countries_heading}>
                                <div className={styles.countries_heading_content}>
                                    <h4 className={styles.heading}>Countries</h4>
                                    <div className={styles.export_img}>
                                        <img src='/images/export.png' />
                                    </div>
                                </div>
                                <span>Viewership in the last 7 days.</span>
                            </div>
                            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                                <ZoomableGroup>
                                    <Geographies geography={geoUrl}>
                                        {({ geographies }) =>
                                            geographies.map(geo => (
                                                <Geography
                                                    key={geo.rsmKey}
                                                    geography={geo}

                                                    style={{
                                                        default: {
                                                            fill: geo.properties.ISO_A2 === `${countryviews.map((i, key) => i.key)}` ? "#89abff" : "#e6e9f4",
                                                            outline: "none"
                                                        },
                                                        hover: {
                                                            fill: geo.properties.ISO_A2 === `${countryviews.map((i, key) => i.key)}` ? "#89abff" : "#e6e9f4",
                                                            outline: "none"
                                                        },
                                                    }}
                                                />
                                            ))
                                        }
                                    </Geographies>
                                </ZoomableGroup>
                            </ComposableMap>
                        </div>
                        <div className={styles.countries_table} >
                            <table>
                                <thead>
                                    <tr>
                                        <th >Country</th>
                                        <th>Percentage</th>
                                        <th>Views</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countryviews.map((country, key) =>
                                        <tr key={key}>
                                            <td className={styles.countries_name}>{country.key}</td>
                                            <td>{country.percentage}%</td>
                                            <td>{country.count}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.metric_cards}>
                        <div className={styles.metric_card_heading}>
                            <h4>Popular Videos</h4>
                            <div className={styles.export_img}>
                                <img src='/images/export.png' />
                            </div>
                        </div>

                        <span>Viewership in the last 7 days.</span>
                        <div>
                            <Bar options={options} data={videos_data} />
                        </div>

                    </div>
                </div>
                <div className={styles.graphs_container}>
                    <div className={styles.devices_card}>
                        <div className={styles.metric_card_heading}>
                            <h4>Devices</h4>
                            <div className={styles.export_img}>
                                <img src='/images/export.png' />
                            </div>
                        </div>
                        <span>Viewership in the last 7 days.</span>
                        <div>
                            <Bar options={options} data={device_data} />
                        </div>
                    </div>
                    <div className={styles.player_card}>
                    <div className={styles.metric_card_heading}>
                            <h4>Players</h4>
                            <div className={styles.export_img}>
                                <img src='/images/export.png' />
                            </div>
                        </div>
                        <span>Viewership in the last 7 days.</span>
                        <div>
                            <Bar options={options} data={player_data} />
                        </div>
                    </div>
                    <div className={styles.applications_card}>
                    <div className={styles.metric_card_heading}>
                            <h4>Applications</h4>
                            <div className={styles.export_img}>
                                <img src='/images/export.png' />
                            </div>
                        </div>
                        <span>Viewership in the last 7 days.</span>
                        <div>
                            <Bar options={options} data={application_data} />
                        </div>
                    </div>
                </div>
                <div className={styles.Os_views_card}>
                    <div className={styles.Os_views}>
                    <div className={styles.metric_card_heading}>
                            <h4>Operating System</h4>
                            <div className={styles.export_img}>
                                <img src='/images/export.png' />
                            </div>
                        </div>
                        <span>Viewership in the last 7 days.</span>
                        <div>
                            <Bar options={options} data={Os_data} />
                        </div>
                    </div>
                </div>
            </>)}
        </div>
    )
}