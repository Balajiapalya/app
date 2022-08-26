import { useEffect, useState, useContext } from 'react';
import styles from '../../styles/analytics_tabs.module.css';
import "react-datepicker/dist/react-datepicker.css";
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
import DatePicker from "react-datepicker";
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
export default function Metrics({ id }) {
    const valueEnv = useContext(EnvValue)
    const [amountstreamed, set_amountstreamed] = useState([]);
    const [viewsStatistics, set_viewsStatistics] = useState([]);
    const [videoviews, setvideoviews] = useState([]);
    const [countryviews, setcountryviews] = useState([]);
    const [divicesviews, setdeviceviews] = useState([]);
    const [Osviews, setOsviews] = useState([]);
    const [applicationsviews, setapplicationsviews] = useState([]);
    const [playerviews, setplayerviews] = useState([]);
    const [toggleposition, settoggleposition] = useState(2);
    const [Today, setToday] = useState();
    const [fromdate, set_fromDate] = useState();
    const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() - new Date().getDay())).setHours(0, 0, 0, 0));
    const [endDate, setEndDate] = useState(Date.now());
    const options = {
        maintainAspectRation: false,
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
                    minRotation: 0,
                    font: {
                        size: 12,

                    },
                    color: '#5d6381'
                }
            },
            y: {
                grid: {
                    display: false
                },
                max: 5,
                min: 0,
                ticks: {
                    stepSize: 1,
                    font: {
                        size: 12,

                    },
                    color: '#5d6381'
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
    const togglebtn = (index) => {
        settoggleposition(index);
    }
    const setday = () => {
        let toDate = Date.now();
        // let yesterday = new Date().setDate(new Date().getDate() - 1)
        let yesterday = new Date().setHours(0, 0, 0, 0)
        Views_statistics_data(toDate, yesterday);
        Usage_statistics_data(toDate, yesterday);
        setToday(toDate);
        set_fromDate(yesterday);
        setStartDate(yesterday);
        setEndDate(toDate);
    }
    const setweek = () => {
        let toDate = Date.now();
        // let sevendaybeforedate = new Date().setDate(new Date().getDate() - 7);
        let sevendaybeforedate = new Date(new Date().setDate(new Date().getDate() - new Date().getDay())).setHours(0, 0, 0, 0);
        Views_statistics_data(toDate, sevendaybeforedate);
        Usage_statistics_data(toDate, sevendaybeforedate);
        setToday(toDate);
        set_fromDate(sevendaybeforedate);
        setStartDate(sevendaybeforedate);
        setEndDate(toDate);
    }
    const setmonth = () => {
        let toDate = Date.now();
        // let monthbeforedate = new Date().setDate(new Date().getDate() - 28);
        let monthbeforedate = new Date(new Date().setHours(0, 0, 0, 0)).setDate(1);
        Views_statistics_data(toDate, monthbeforedate);
        Usage_statistics_data(toDate, monthbeforedate);
        setToday(toDate);
        set_fromDate(monthbeforedate);
        setStartDate(monthbeforedate);
        setEndDate(toDate);
    }
    // const handleStartDate=(date)=>{
    //     if(date>new Date()){
    //         setStartDate(new Date())
    //     }

    //     if(date<new Date(new Date(new Date().setHours(0, 0, 0, 0)).setDate(1))){
    //         setStartDate(new Date(new Date(new Date().setHours(0, 0, 0, 0)).setDate(1)))
    //     }
    // }
    const datepicker = (date) => {
        // if(date>new Date()){
        //     setEndDate(new Date)
        // }
        // if(date<new Date(new Date(new Date().setHours(0, 0, 0, 0)).setDate(1))){
        //     setEndDate(new Date(new Date(new Date().setHours(0, 0, 0, 0)).setDate(1)))
        // }
        let toDate = new Date(date).getTime();
        let fromDate = new Date(startDate).getTime();
        Views_statistics_data(toDate, fromDate);
        Usage_statistics_data(toDate, fromDate);
        setToday(toDate)
        set_fromDate(fromDate)
    }

    const Usage_statistics_data = (toDate, fromDate) => {
        if (valueEnv) {
            Api.Usage_statistics(valueEnv, toDate, fromDate)
                .then(res => {
                    set_amountstreamed(res && res.data && res.data.data && res.data.data.totalUsageRecords && res.data.data.totalUsageRecords.filter(record => record.usage == 'RecordStreamingUsage')[0] && res.data.data.totalUsageRecords.filter(record => record.usage == 'RecordStreamingUsage')[0].amountInSecs);
                })
        }
    };
    const Views_statistics_data = (toDate, fromDate) => {
        Api.Views_statistics(valueEnv, toDate, fromDate)
            .then(res => {
                set_viewsStatistics(res.data.data);
                setvideoviews(res.data.data.videoViews);
                setcountryviews(res.data.data.countryViews);
                setdeviceviews(res.data.data.deviceViews)
                setOsviews(res.data.data.osViews);
                setapplicationsviews(res.data.data.applicationViews);
                setplayerviews(res.data.data.playerViews)
            })
    }
    useEffect(() => {
        if (id) {
            settoggleposition(2)
            setweek()
        }
        Usage_statistics_data();
        Views_statistics_data();
    }, [valueEnv])
    let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

    const from_Date = (date) => {

        if (date == undefined) {
            var fd = new Date(new Date(new Date().setDate(new Date().getDate() - new Date().getDay())).setHours(0, 0, 0, 0));
            return fd.toLocaleString("en-AU", { month: "short", day: "2-digit", year: "numeric" });

        } else {
            var t = new Date(date)
            // console.log(t.toLocaleString("en-AU", { month: "short", day: "2-digit", year: "numeric" }));
            return t.toLocaleString("en-AU", { month: "short", day: "2-digit", year: "numeric" });
        }

    }
    const to_day = (data) => {
        if (data == undefined) {
            var td = new Date(new Date().setDate(new Date().getDate()));
            return td.toLocaleString("en-AU", { month: "short", day: "2-digit", year: "numeric" });
        } else {
            var td = new Date(data)
            return td.toLocaleString("en-AU", { month: "short", day: "2-digit", year: "numeric" });
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.Metrics_heading}>
                <h3>Viewership Insights</h3>
                <div className={styles.date_toggle}>
                    <div className={styles.date_toggle_container}>
                        <div className={styles.toggle_date_week_month}>
                            <button className={toggleposition == 1 ? `${styles.date_toggle_btn} ${styles.active_btn}` : `${styles.date_toggle_btn}`} onClick={() => [togglebtn(1), setday()]}>Day</button>
                            <button className={toggleposition == 2 ? `${styles.date_toggle_btn} ${styles.active_btn}` : `${styles.date_toggle_btn}`} onClick={() => [togglebtn(2), setweek()]}>Week</button>
                            <button className={toggleposition == 3 ? `${styles.date_toggle_btn} ${styles.active_btn}` : `${styles.date_toggle_btn}`} onClick={() => [togglebtn(3), setmonth()]}>Month</button>
                        </div>
                        <div className={styles.date_picker}>
                            <img src='/images/calender.png' />
                            <DatePicker
                                filterDate={d => {
                                    return d >= new Date(new Date(new Date().setHours(0, 0, 0, 0)).setDate(1)) && new Date() > d;
                                }}
                                maxDate={endDate}
                                onFocus={e => e.target.blur()}
                                selected={startDate}
                                onChange={(date) => [setStartDate(date)]}
                                // selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                dateFormat="dd/MM/yyyy"
                            // showMonthYearPicker
                            // onSelect={(date) => handleStartDate(date)}
                            />
                            <DatePicker
                                filterDate={d => {
                                    return d >= new Date(new Date(new Date().setHours(0, 0, 0, 0)).setDate(1)) && new Date() > d;
                                }}
                                minDate={startDate}
                                onFocus={e => e.target.blur()}
                                selected={endDate}
                                onChange={(date) => [setEndDate(date)]}
                                // selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                dateFormat="dd/MM/yyyy"
                                // showMonthYearPicker
                                onSelect={(date) => datepicker(date)}
                            />
                        </div>
                    </div>

                </div>
            </div>
            {[viewsStatistics].map((item, key) => <>

                <div className={styles.views_cards}>
                    <div className={styles.cards_container}>
                        <div className={styles.cards_details}>
                            <h4>No.of Views</h4>
                            <div className={styles.totalViews}>
                                <h5>{item.totalViews}</h5>

                            </div>
                        </div>
                        <div className={styles.card_logo}>
                            <img src='/images/metrics-views.png' alt='img' />
                        </div>
                        <span className={styles.card_info}>Number of views that started playback</span>
                    </div>
                    <div className={styles.cards_container}>
                        <div className={styles.cards_details}>
                            <h4>No.of Unique Views</h4>
                            <div className={styles.UniqueViews}>
                                <h5>{item.uniqueViews}</h5>
                            </div>
                        </div>
                        <div className={styles.card_logo}>
                            <img src='/images/metrics-unique-views.png' alt='img' />
                        </div>
                        <span className={styles.card_info}>Unique viewers that started playback,based on User ID.</span>
                    </div>
                    <div className={styles.cards_container}>
                        <div className={styles.cards_details}>
                            <h4>Watched Time</h4>
                            <div className={styles.UniqueViews}>
                                {amountstreamed == null ? <h5>0 hrs</h5> : <h5>{(amountstreamed / 3600).toFixed(0)} hrs</h5>}

                            </div>
                        </div>
                        <div className={styles.card_logo}>
                            <img src='/images/metrics-watched-time.png' alt='img' />
                        </div>
                        <span className={styles.card_info}>Time (in hours) that viewers watched videos.</span>
                    </div>
                    <div className={styles.cards_container}>
                        <div className={styles.cards_details}>
                            <h4>Errors</h4>
                            <div className={styles.UniqueViews}>
                                <h5>{item.errors}</h5>
                            </div>
                        </div>
                        <div className={styles.card_logo}>
                            <img src='/images/metrics-views.png' alt='img' />
                        </div>
                        <span className={styles.card_info}>Number of playback errors detected by Videograph.</span>
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
                                <span className={styles.card_info}>Views from {from_Date(fromdate)} to {to_day(Today)}</span>
                            </div>
                            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }} style={{
                                height: '34vh',
                                width: '100%',
                            }}>
                                <ZoomableGroup>
                                    <Geographies geography={geoUrl}>
                                        {({ geographies }) =>
                                            geographies.map(geo => (
                                                <Geography
                                                    key={geo.rsmKey}
                                                    geography={geo}

                                                    style={{
                                                        default: {
                                                            // fill:`${countryviews.map((i,key)=>geo.properties.ISO_A2==i.key)}`?"#89abff":"#e6e9f4",
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
                                            <td className={styles.countries_name}> {regionNames.of(country.key)}</td>
                                            <td>{(country.percentage).toFixed()}%</td>
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
                                <img src='/images/export.png' alt='export' />
                            </div>
                        </div>
                        <span>Views from {from_Date(fromdate)} to {to_day(Today)}</span>
                        <div>
                            <Bar options={options} data={videos_data} style={{
                                height: '34vh',
                                width: '100%',
                            }} />
                        </div>
                    </div>
                    <div className={styles.devices_card}>
                        <div className={styles.metric_card_heading}>
                            <h4>Devices</h4>
                            <div className={styles.export_img}>
                                <img src='/images/export.png' alt='export' />
                            </div>
                        </div>
                        <span>Views from {from_Date(fromdate)} to {to_day(Today)}</span>
                        <div>
                            <Bar options={options} data={device_data} style={{
                                height: '34vh',
                                width: '100%',
                            }} />
                        </div>
                    </div>
                    <div className={styles.player_card}>
                        <div className={styles.metric_card_heading}>
                            <h4>Players</h4>
                            <div className={styles.export_img}>
                                <img src='/images/export.png' alt='export' />
                            </div>
                        </div>
                        <span>Views from {from_Date(fromdate)} to {to_day(Today)}</span>
                        <div>
                            <Bar options={options} data={player_data} style={{
                                height: '34vh',
                                width: '100%',
                            }} />
                        </div>
                    </div>
                    <div className={styles.applications_card}>
                        <div className={styles.metric_card_heading}>
                            <h4>Applications</h4>
                            <div className={styles.export_img}>
                                <img src='/images/export.png' alt='export' />
                            </div>
                        </div>
                        <span>Views from {from_Date(fromdate)} to {to_day(Today)}</span>
                        <div>
                            <Bar options={options} data={application_data} style={{
                                height: '34vh',
                                width: '100%',
                            }} />
                        </div>
                    </div>
                    <div className={styles.Os_views_card}>
                        <div className={styles.Os_views}>
                            <div className={styles.metric_card_heading}>
                                <h4>Operating System</h4>
                                <div className={styles.export_img}>
                                    <img src='/images/export.png' alt='export' />
                                </div>
                            </div>
                            <span>Views from {from_Date(fromdate)} to {to_day(Today)}</span>
                            <div>
                                <Bar options={options} data={Os_data} style={{
                                    height: '34vh',
                                    width: '100%',
                                }} />
                            </div>
                        </div>
                    </div>
                </div>


            </>)}
        </div>
    )
}