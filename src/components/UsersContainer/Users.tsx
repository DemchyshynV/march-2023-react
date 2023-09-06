import {useAppSelector} from "../../hooks/useAppSelector";
import {User} from "./User";
import {useEffect} from "react";
import {userService} from "../../services/userService";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {userActions} from "../../redux/slices/userSlice";

const Users = () => {
    const {users} = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        userService.getAll().then(({data})=>{
            dispatch(userActions.setAll(data))
        })
    }, [])

    return (
        <div>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {Users};