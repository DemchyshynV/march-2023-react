import {FC} from "react";
import {IUser} from "../../interfaces/userInterface";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {userActions} from "../../redux/slices/userSlice";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    const dispatch = useAppDispatch();

    const {id, name, username, email} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={()=>dispatch(userActions.setCurrent(name))}>select</button>
        </div>
    );
};

export {User};