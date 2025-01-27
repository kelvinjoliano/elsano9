import CategoryList from "../src/components/CategoryList"
import NewProduct from "../src/components/NewProduct"
import ProductList from "../src/components/ProductList"
import Slider from "../src/components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Best Product</h1>
        <ProductList/>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Kategori</h1>
        <CategoryList/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Product</h1>
        <NewProduct/>
      </div>
    </div>
  )
}

export default HomePage