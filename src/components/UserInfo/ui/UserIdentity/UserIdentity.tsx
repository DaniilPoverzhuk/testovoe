import styles from './UserIdentity.module.scss';

export const UserIdentity = () => {
    return (
        <div className={styles.root}>
            <div className={styles.avatar}>
                <img src='/user-avatar.svg' alt='user-avatar' />
            </div>
            <p className={styles.name}>Dmitriy Mentor</p>
            <p className={styles.id}>@mentor</p>
        </div>
    );
};
