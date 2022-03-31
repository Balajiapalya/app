import styles from '../../../styles/billings.module.css';
import { useEffect } from 'react';
import Api from '../../api/api';
import { useState } from 'react';




export default function Billing_plans() {
    const [plans, setplans] = useState([]);
    useEffect(() => {
        Api.Org_list_billing_plans()
            .then(res => {
                setplans(res.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div className={styles.container1}>
            {plans.map((items, id) =>
                <div key={id} className={styles.plans_container}>
                   
                    <div className={styles.plans_card}>
                        <h2 className={styles.plan_heading}> {items.name}</h2>
                        <div className={styles.plans_content}>
                            <h3>Period: <span>1 month</span></h3>
                        </div>
                        <div className={styles.plans_content}>
                            <h3 className={styles.content_key}>Price: <span>{items.pricing[0].unitAmount} {items.pricing[0].currency}</span></h3>
                        </div>
                        <div className={styles.plan_subscribe}>
                            <a href={items.hostedPage}><button className={`${styles.plan_subscribe_btn} btn`}>Subscribe</button></a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}