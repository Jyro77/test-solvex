import { useLocation, Link } from "wouter";
import { marketData } from "../../marketData";

export function MarketView() {
    const [location] = useLocation();
    const id = location.slice(13, location.length);
    const singleMarket = marketData.filter(e => e.id === id);
    /*     const id = localStorage.getItem("id");
    const name = localStorage.getItem("name");
    const image = localStorage.getItem("image"); */

    return (
        <div>
            <img src={singleMarket[0].image} alt='This is not an image' />
            <h3>{singleMarket[0].name}</h3>

            <Link to={`/supermarket/${id}/edit`}>
                <button className='text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'>
                    Edit
                </button>
            </Link>
        </div>
    );
}
