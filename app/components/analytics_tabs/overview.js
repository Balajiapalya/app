import { useEffect, useState, useContext } from 'react';
import styles from '../../styles/analytics_tabs.module.css';
import Api from '../api/api';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { EnvValue } from '../../pages/analytics/index'


ChartJS.register(ArcElement, Tooltip, Legend);

export default function Overview() {
    const valueEnv = useContext(EnvValue)
    const [usagestatistics, set_usagestatistics] = useState([]);
    const [viewsStatistics, set_viewsStatistics] = useState([]);
    const [deviceviews, setdeviceviews] = useState([]);
    const [countryviews, setcountryviews] = useState([]);

    useEffect(() => {
        Usage_statistics_data();
        Views_statistics_data();
    }, [valueEnv]);

    const Usage_statistics_data = () => {
        if (valueEnv) {
            Api.Usage_statistics(valueEnv)
                .then(res => {
                    set_usagestatistics(res.data.data.totalUsageRecords)
                })
        }
    };
    const Views_statistics_data = () => {
        if (valueEnv) {
            Api.Views_statistics(valueEnv)
                .then(res => {
                    // console.log(res.data.data.deviceViews)
                    set_viewsStatistics(res.data.data)
                    setdeviceviews(res.data.data.deviceViews)
                    setcountryviews(res.data.data.countryViews)
                    // console.log(res.data.data.countryViews)
                })
        }
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    };
    const doughnutdata = {
        labels: deviceviews.map((device, key) => device?.key),
        datasets: [
            {
                label: '# of Votes',
                data: deviceviews.map((device, key) => device?.count),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                barThickness: 5,
            },
        ],
    };

    return (
        <div className={styles.container}>
            <div className={styles.video_type_container}>
                {usagestatistics.map((item, key) =>
                    <div key={key} className={styles.encoded_video}>
                        <h5 className={styles.video_type_heading}>{item.usage}</h5>
                        <div className={styles.video_type_content}>
                            <h5>{(item.amountInSecs/60).toFixed(2)} mins</h5>
                            <div className={styles.timeperiod}>
                                <span >Total minutes of videos <br></br>encoded in last 7 days.</span>
                            </div>
                        </div>
                    </div>)}
            </div>
            {[viewsStatistics].map((items, keys) => <>
                <div className={styles.real_time_views_container}>
                    <h4 className={styles.heading}>Real-Time Views</h4>
                    <div className={styles.viewers_details}>
                        <h5 className={styles.totalViews}>{items.totalViews}</h5>
                        <span className={styles.watching_viewers}>users are watching content right now.</span>
                    </div>
                </div>
                <div className={styles.countries_devices_container}>
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
                        <div className={styles.more_insights}>
                            <a>More Insights&gt;</a>
                        </div>
                    </div>
                    <div className={styles.devices_container}>
                        <h4 className={styles.heading}>Devices</h4>
                        <div className={styles.doughnut_graph}>
                            <Doughnut options={options} data={doughnutdata} />
                        </div>
                        <div className={styles.more_insights}>
                            {/* <a>More Insights&gt;</a> */}
                        </div>
                    </div>
                </div>
            </>)}

        </div>
    )
}