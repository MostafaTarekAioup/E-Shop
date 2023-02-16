import React from 'react'
import { Filters, BreadCrumb, ProductsContainer, Loading } from '../components'
import '../components/FiltersComponent/Filters.style.scss'
import { FaCog } from 'react-icons/fa'
import { useGlopalContext } from '../ContextAPI/context'
import { useGetAllProductsQuery } from '../redux/apiSlice'
const ProductsPage = () => {
  const { isFilterActive, setIsFilterActive } = useGlopalContext()
  const { isLoading } = useGetAllProductsQuery()
  return (
    <main>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className='main'>
          <div className='bread_crumb'>
            <BreadCrumb title='products' />
          </div>
          <div
            className='second_filters_icon'
            onClick={() => setIsFilterActive(!isFilterActive)}
          >
            <FaCog />
          </div>
          <div className='container'>
            <div className='products_page_container'>
              <div
                className={`${
                  isFilterActive
                    ? ' filters_container active_filter_container'
                    : 'filters_container'
                }`}
              >
                <Filters />
              </div>
              <div className='products_container'>
                <ProductsContainer />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default ProductsPage
