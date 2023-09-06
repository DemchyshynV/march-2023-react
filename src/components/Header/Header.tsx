import css from "./Header.module.css";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";

const Header = () => {
    const {count} = useAppSelector(state => state.count);
    const {user} = useAppSelector(state => state.users);
    return (
        <div className={css.Header}>
            <div className={css.links}>
                <Link to={'users'}>users</Link>
                <Link to={'posts'}>posts</Link>
                <Link to={'count'}>count</Link>
            </div>
            <div>
                <div>user: {user}</div>
                <div>post</div>
                <div>count: {count}</div>
            </div>
        </div>
    );
};

export {Header};