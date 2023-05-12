import brandData from "../../brandData";
import { Link } from "wouter";
import BrandCard from "./BrandCard";

export default function Brand() {
    return (
        <div>
            <Link to='/brand/add'>
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Add Brand
                </button>
            </Link>

            <div className='mt-5 flex'>
                {brandData.map(e => (
                    <BrandCard
                        key={e.id}
                        id={e.id}
                        image={e.image}
                        name={e.name}
                        products={e.products}
                    />
                ))}
            </div>
        </div>
    );
}
