import styles from './Navigation.module.scss';

import { ICON_PAGES } from './constants';

export const Navigation = () => {
    return (
        <div className={styles.root}>
            {ICON_PAGES.map((page) => (
                <a key={page.id} href={page.href}>
                    <img src={page.img} alt={page.alt} />
                </a>
            ))}
        </div>
    );
};
