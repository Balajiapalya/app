import { useEffect, useState } from 'react';
import styles from '../../styles/analytics_tabs.module.css';
import Api from '../api/api';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function Metrics() {
    const [viewsStatistics, set_viewsStatistics] = useState([]);
    const [videoviews, setvideoviews] = useState([]);
    const [countryviews, setcountryviews] = useState([]);
    const [divicesviews, setdeviceviews] = useState([]);
    const [playerviews, setplayerviews] = useState([]);
    const [applicationsviews, setapplicationsviews] = useState([]);
    useEffect(() => {
        Views_statistics_data()
    }, [])
    const Views_statistics_data = () => {
        Api.Views_statistics()
            .then(res => {
                set_viewsStatistics(res.data.data);
                setvideoviews(res.data.data.videoViews);
                setcountryviews(res.data.data.countryViews);
                setdeviceviews(res.data.data.deviceViews);
                setplayerviews(res.data.data.playerViews);
                setapplicationsviews(res.data.data.applicationViews)
            })
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
            },
            title: {
                position: 'bottom',
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },
    };
    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const videos_data = {
        labels: videoviews.map((videos, key) => videos?.key),
        datasets: [
            {

                data: videoviews.map((item, key) => item?.percentage),
                backgroundColor: 'rgba(53, 162, 235, 1)',
            },
        ],
    };
    const device_data = {
        labels: divicesviews.map((videos, key) => videos?.key),
        datasets: [
            {
                data: divicesviews.map((item, key) => item?.percentage),
                backgroundColor: 'rgba(53, 162, 235, 1)',
            },
        ],
    }
    const player_data = {
        labels: playerviews.map((player, key) => player?.count),
        datasets: [
            {
                data: playerviews.map((item, key) => item?.percentage),
                backgroundColor: 'rgba(53, 162, 235, 1)',
            },
        ],
    }
    const application_data = {
        labels: applicationsviews.map((application, key) => application?.key),
        datasets: [
            {
                data: applicationsviews.map((item, key) => item?.percentage),
                backgroundColor: 'rgba(53, 162, 235, 1)',
            },
        ],
    }
    return (
        <div className={styles.container}>
            <div className={styles.Metrics_heading}>
                <h3>Viewership Insights</h3>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {[viewsStatistics].map((item, key) => <>

                <div className={styles.views_cards}>

                    <div className={styles.cards_container}>
                        <h4>No. of Views</h4>
                        <div className={styles.totalViews}>
                            <h5>{item.totalViews}</h5>
                            <span>Number of views that <br></br> started playback</span>
                        </div>
                    </div>
                    <div className={styles.cards_container}>
                        <h4>No. of Unique Views</h4>
                        <div className={styles.UniqueViews}>
                            <h5>{item.uniqueViews}</h5>
                            <span>Unique viewers that started<br /> playback,based on User ID.</span>
                        </div>
                    </div>
                    <div className={styles.cards_container}>
                        <h4>Watched Time</h4>
                    </div>
                    <div className={styles.cards_container}>
                        <h4>Errors</h4>
                    </div>
                </div>
                <div className={styles.Countries_videos}>
                    <div className={styles.countries_container}>
                        <div className={styles.countries_heading}>
                            <h4 className={styles.heading}>Countries</h4>
                            <span>Viewership in the last 7 days.</span>
                        </div>
                        <div className={styles.countries_map} ></div>
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
                        <h4>
                            Videos
                        </h4>
                        <span>Viewership in the last 7 days.</span>
                        <div>
                            <Bar options={options} data={videos_data} />
                        </div>

                    </div>
                </div>
                <div className={styles.graphs_container}>
                    <div className={styles.devices_card}>
                        <h4>Devices</h4>
                        <span>Viewership in the last 7 days.</span>
                        <div>
                            <Bar options={options} data={device_data} />
                        </div>
                    </div>
                    <div className={styles.player_card}>
                        <h4>Player</h4>
                        <span>Viewership in the last 7 days.</span>
                        <div>
                            <Bar options={options} data={player_data} />
                        </div>
                    </div>
                    <div className={styles.applications_card}>
                        <h4>Applications</h4>
                        <span>Viewership in the last 7 days.</span>
                        <div>
                            <Bar options={options} data={application_data} />
                        </div>
                    </div>
                </div>
            </>)}
        </div>
    )
}