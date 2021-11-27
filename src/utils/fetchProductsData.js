import axios from 'axios'
import {useSelector , useDispatch} from 'react-redux'
import { useGlopalContext } from '../ContextAPI/context';
import {productsSliceActions} from '../redux/ProductSlice'

const FetchProductsData = async()=>{
    const {setLoading} = useGlopalContext()
    const API = useSelector((state)=>state.products.apiUrl)
    const dispatch = useDispatch()
    setLoading(true)
    await axios({
        method:'GET',
        url:API,
     }).then((response)=>{
       console.log(response.data)
        dispatch(productsSliceActions.fetchData({data:response.data}))
        setLoading(false)
     }).catch((error)=>{
        console.log(error)
     })
}
export default FetchProductsData
