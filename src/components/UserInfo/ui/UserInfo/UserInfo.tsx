import { BtnSubscribe } from '../BtnSubscribe';
import { Description } from '../Description';
import { SocialMetrics } from '../SocialMetrics';
import { UserIdentity } from '../UserIdentity';

import styles from './UserInfo.module.scss';

export const UserInfo = () => {
    return (
        <div className={styles.root}>
            <UserIdentity />
            <SocialMetrics />
            <BtnSubscribe />
            <Description />
        </div>
    );
};
