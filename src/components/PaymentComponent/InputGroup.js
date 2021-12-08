import React , {useState , useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { shippingSliceActions } from '../../redux/shippingDetailsSlice'
const InputGroup = ({infor , type , invalue , name}) => {
    const [isActive , setIsActive] = useState(false)
    const dispatch = useDispatch()

    const onFocusHandller = ()=>{
        setIsActive(true)
    }
    const onBlurHandller = ()=>{
        if(invalue !== '' || type ==='date'){
            setIsActive(true)
        }else if(invalue === '' ){
            setIsActive(false)
        }
    }
    const onChangeHandller = (e)=>{
        let name = e.target.name 
        let value = e.target.value 
        console.log(name , value)
        dispatch(shippingSliceActions.ubdateShippingValues({name , value}))
    }
    useEffect(() => {
        onBlurHandller()
    }, [])
    return (
        <div className="input_group">
            <label htmlFor={infor} className = {`${isActive ? 'inputLabel active_inputLabel' : 'inputLabel'}`}>{infor}</label>
            <input 
            type={type} 
            id={infor} 
            required 
            value={invalue} 
            name = {name}
            onChange={onChangeHandller} 
            onFocus={onFocusHandller}
            onBlur={onBlurHandller}
            />
        </div>
    )
}

export default InputGroup
