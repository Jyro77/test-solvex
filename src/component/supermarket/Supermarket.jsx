import { Link } from "wouter";
import MarketCard from "./MarketCards";
import { marketData } from "../../marketData";

export default function Supermarket() {
    return (
        <div>
            <Link to='/supermarket/add'>
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Add Supermarket
                </button>
            </Link>

            <div className='mt-5 flex'>
                {marketData.map(e => (
                    <MarketCard
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
