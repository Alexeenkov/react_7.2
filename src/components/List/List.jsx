import wrapsCountViews from './wrapsCountViews';
import Video from './Video/Video';
import Article from './Article/Article';

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    wrapsCountViews(Video)({ ...item })
                );
            case 'article':
                return (
                    wrapsCountViews(Article)({ ...item })
                );
            default:
                return null;
        }
    });
};

export default List;