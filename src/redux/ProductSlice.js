import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    apiUrl:'https://course-api.com/react-store-products',
    categories:[],
    colors:[],
    companyes:[],
    filterdProducts:[], 
    isError:false,
    isProductsLoading:true,
    sort:'price-lowest',
    filtres:{
        search:'',
        companie:'All',
        categorie:'All',
        color:'All',
        min_price:0,
        max_price:0,
        price:0,
        shipping:false
        }
}
const productsSlice = createSlice({
    name:'products_slice',
    initialState:initialState,
    reducers:{
        // fetch all products
        fetchData(state,action){
            state.products = action.payload.data
            state.filterdProducts = action.payload.data
            let catagories = action.payload.data.map((product)=>product.category) 
            let companies = action.payload.data.map((product)=>product.company)
            let AllPrices = action.payload.data.map((product)=>product.price)
            let allcolors = [] 
            action.payload.data.map((product)=>{
                allcolors.push(...product.colors)
                return allcolors
            })
            // get all  catagories 
            state.categories = ['All' , ...new Set(catagories)]
            // get all companies 
            state.companyes = ['All' , ...new Set(companies)]
            // get all colors
            state.colors = ['All' , ...new Set(allcolors)]
            // get max price and min price from all products
            state.filtres.max_price = Math.max(...AllPrices)
            state.filtres.min_price = Math.min(...AllPrices)
            state.filtres.price=state.filtres.max_price
        },
        setIsError(state,action){
            state.isError = action.payload.error
        },
        // set is loading 
        setIsLoading(state,action){
            state.isProductsLoading = action.payload.loading
        },
        // set sort value
        setSortValue(state,action){
            state.sort = action.payload.sortValue
            let tempProduct = []
            if(state.sort === 'price-lowest'){
                tempProduct = state.filterdProducts.sort((a,b)=> a.price - b.price)
                state.filterdProducts = tempProduct
            }
            if(state.sort === 'highest-price'){
                tempProduct = state.filterdProducts.sort((a,b)=> b.price - a.price)
                state.filterdProducts = tempProduct
            }
            if(state.sort === 'name-a-z'){
                tempProduct = state.filterdProducts.sort((a,b)=> {
                    return a.name.localeCompare(b.name)
                })
                state.filterdProducts = tempProduct
            }
            if(state.sort === 'name-z-a'){
                tempProduct = state.filterdProducts.sort((a,b)=> {
                    return b.name.localeCompare(a.name)
                })
                state.filterdProducts = tempProduct
            }
        },
        // set filtres values 
        updateFilters(state , action){
            const {name , value} = action.payload
            state.filtres[name]= value
        },
        // set filtres to default values 
        defaultFilters(state){
            return {...state , filtres:{...state.filtres ,
            search:'',
            companie:'All',
            categorie:'All',
            color:'All',
            price:state.filtres.max_price,
            shipping:false }
            }
        },
        filterProduct(state){
            const {products} = state
            const {search , companie , categorie ,color , price ,shipping} = state.filtres
            let tempFiltredProducts = [...products]
            // search
            if(search){
                tempFiltredProducts = tempFiltredProducts.filter((product)=>{
                    return product.name.toLowerCase().startsWith(search)
                })
            }
            // categories
            if(categorie !== 'All'){
                tempFiltredProducts = tempFiltredProducts.filter((product)=> product.category === categorie)
            }
            // companies
            if(companie !== 'All'){
                tempFiltredProducts = tempFiltredProducts.filter((product)=> product.company === companie)
            }
            // colors
            if(color !== 'All'){
                tempFiltredProducts = tempFiltredProducts.filter((product)=> product.colors.includes(color))
            }
            // price
            tempFiltredProducts = tempFiltredProducts.filter((product)=> product.price <= price)
            // shipping
            if(shipping ){
                tempFiltredProducts = tempFiltredProducts.filter((product)=> product.shipping === true)
            }
             state.filterdProducts = tempFiltredProducts
        }
    }

})

export const productsSliceActions = productsSlice.actions
export default productsSlice