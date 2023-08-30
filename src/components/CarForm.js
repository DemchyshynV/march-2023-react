import {useForm} from "react-hook-form";
import {carService} from "../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";
import {useEffect} from "react";

const CarForm = ({setTrigger, setCarForUpdate, carForUpdate}) => {
    const {reset, register, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all'
    });


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])


    const save = async (car) => {
        try {
            const {data} = await carService.create(car);
            setTrigger(prev => !prev)
            reset()
        } catch (e) {
            console.log(e.response.data);
        }
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev=>!prev)
        setCarForUpdate(null)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <div><input type="text" placeholder={'brand'} {...register('brand')}/></div>
            {errors.brand && <div>{errors.brand.message}</div>}
            {/*<div><input type="text" placeholder={'price'} {...register('price', {*/}
            {/*    valueAsNumber: true,*/}
            {/*    min:{value:0,message:'min 0'},*/}
            {/*    max:{value:1000000, message:'max 1 000 000'}*/}
            {/*})}/></div>*/}
            <div>
                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                })}/>
            </div>
            {errors.price && <div>{errors.price.message}</div>}
            <div><input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/></div>
            {errors.year && <div>{errors.year.message}</div>}
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};