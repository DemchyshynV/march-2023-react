import {useLocation, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {authService} from "../services/authService";
import {useAppReducer} from "../hooks/useAppReducer";
import {authActions} from "../reducers/authReducer";

const Login = () => {
    const {state} = useLocation();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null)
    const [, dispatch] = useAppReducer(state => state.auth);
    const navigate = useNavigate();
    const login = async (user) => {
        try {
            await authService.login(user)
            const {me} = await authService.me();
            dispatch(authActions.setMe(me))
            navigate(state||'/', {replace: true})
        } catch (e) {
            setError('wrong username or password')
        }
    }
    return (
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>login</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export {Login};