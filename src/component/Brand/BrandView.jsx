import { Link } from "wouter";
//import ProductCard from "../product/ProductCard";
//import brandData from "../../brandData";

export default function BrandView() {
    const currentBrand = localStorage.getItem("currentBrand");
    //const singleBrand = brandData.filter(e => e.id === id);

    const deleteLS = () => {
        localStorage.setItem("currentBrand", {});
    };

    return (
        <div>
            <img src={currentBrand.image} alt='This is not an image' />
            <h3>{currentBrand.name}</h3>
            {/* {currentBrand.products.map(e => (
                <ProductCard
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    type={e.type}
                    price={e.price}
                />
            ))} */}

            <Link
                to={`/supermarket/${currentBrand.id}/edit`}
                onClick={deleteLS}>
                <button className='text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'>
                    Edit
                </button>
            </Link>
        </div>
    );
}
