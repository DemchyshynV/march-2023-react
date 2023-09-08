// import {useAppSelector} from "../../hooks/useAppSelector";
// import {User} from "./User";
// import {useEffect, useRef} from "react";
// import {userService} from "../../services/userService";
// import {useAppDispatch} from "../../hooks/useAppDispatch";
// import {userActions} from "../../redux/slices/userSlice";
//
// const Users = () => {
//     const {users, error} = useAppSelector(state => state.users);
//     const dispatch = useAppDispatch();
//     const selectRef = useRef<HTMLSelectElement>();
//     useEffect(() => {
//         dispatch(userActions.getAll())
//     }, [])
//
//     const handleSelect = ():void => {
//         // const currentUser = users.find(user=>user.id === +selectRef.current.value);
//         // // console.log(currentUser);
//         // dispatch(userActions.setCurrent(currentUser))
//
//         const selectedUsers = Array.from(selectRef.current.selectedOptions)
//             .reduce((acc, option)=>[...acc, users.find(user=>user.id === +option.value)],[]);
//         dispatch(userActions.setCurrent(selectedUsers))
//     };
//
//     return (
//         <div>
//             <select ref={selectRef} onChange={handleSelect} multiple style={{height:'200px'}}>
//                 {/*<option value="">please select user</option>*/}
//                 {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
//             </select>
//             {users.map(user => <User user={user} key={user.id}/>)}
//         </div>
//     );
// };
//
// export {Users};

import {useAppSelector} from "../../hooks/useAppSelector";
import {User} from "./User";
import {useEffect, useRef, MouseEvent} from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {userActions} from "../../redux/slices/userSlice";
import {SubmitHandler, useForm} from "react-hook-form";

const Users = () => {
    const {users, error} = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();
    const {register, handleSubmit, setValue} = useForm<{users:string[]}>();

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [])


    const save:SubmitHandler<{users:string[]}> = (formData) => {
        dispatch(userActions.setCurrent(formData.users.map(item=>users.find(user=>user.id===+item))))
    };

    const handleMouseClick = (e:MouseEvent<HTMLOptionElement>) => {
        e.preventDefault()
        e.currentTarget.selected = !e.currentTarget.selected
        const select = e.currentTarget.parentElement as HTMLSelectElement;
        setValue("users", Array.from(select.selectedOptions).map(option=>option.value))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <select {...register('users')} multiple>
                    {users.map(user=> <option key={user.id} value={user.id} onMouseDown={handleMouseClick}>{user.name}</option>)}
                </select>
                <button>set</button>
            </form>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {Users};