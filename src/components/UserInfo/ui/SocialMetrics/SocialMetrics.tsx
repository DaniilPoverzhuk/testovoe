import styles from './SocialMetrics.module.scss';

export const SocialMetrics = () => {
    return (
        <div className={styles.root}>
            <div className={styles.item}>
                <div className={styles.top}>
                    <img src='/notification.svg' alt='subscription' />
                    <span>9 794</span>
                </div>
                <p className={styles.label}>Subscriptions</p>
            </div>
            <div className={styles.item}>
                <div className={styles.top}>
                    <img src='/people.svg' alt='subscribers' />
                    <span>721,8K</span>
                </div>
                <p className={styles.label}>Subscribers</p>
            </div>
            <div className={styles.item}>
                <div className={styles.top}>
                    <img src='/heart.svg' alt='likes' />
                    <span>14,4M</span>
                </div>
                <p className={styles.label}>Likes</p>
            </div>
        </div>
    );
};
