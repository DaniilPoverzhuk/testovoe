import type { IPost } from '../types';

import styles from './PostItem.module.scss';

export const PostItem = ({ isPinned, views, img }: IPost) => {
    return (
        <div className={styles.root}>
            <img className={styles.img} src={img} alt='background-post' />
            {isPinned && (
                <div className={styles.pinned}>
                    <img src='/push-pin.svg' alt='pin' />
                </div>
            )}
            <div className={styles.views}>
                <img src='/views.svg' alt='views' />
                <span>{views}</span>
            </div>
        </div>
    );
};
