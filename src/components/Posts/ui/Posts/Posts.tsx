import { PostItem } from '../PostItem';
import styles from './Posts.index.module.scss';
import { POSTS } from './constants';

export const Posts = () => {
    return (
        <div className={styles.root}>
            {POSTS.map((post) => (
                <PostItem key={post.id} {...post} />
            ))}
        </div>
    );
};
