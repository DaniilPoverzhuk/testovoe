import { Navigation } from './components/Navigation';
import { Posts } from './components/Posts';
import { UserInfo } from './components/UserInfo/ui/UserInfo';

import styles from './index.module.scss';

const App = () => {
    return (
        <div className={styles.root}>
            <UserInfo />
            <Posts />
            <Navigation />
        </div>
    );
};

export default App;
