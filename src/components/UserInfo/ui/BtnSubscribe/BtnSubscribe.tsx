import styles from './BtnSubscribe.module.scss';

export const BtnSubscribe = () => {
    return (
        <div className={styles.root}>
            <button className={styles.btn_subscribe}>Subscribe</button>
            <button className={styles.btn_short_more}>
                <img src='/short-arrow.svg' alt='short-arrow' />
            </button>
        </div>
    );
};
