/* eslint-disable react/prop-types */
import { Link } from "wouter";

export default function BrandCard({ id, image, name }) {
    const handleClick = () => {
        //localStorage.setItem("currentBrand", JSON.stringify());
    };

    return (
        <Link to={`/brand/${id}`} onClick={handleClick}>
            <div className='cursor-pointer flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                <img
                    className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
                    src={image}
                    alt='This is not an image'
                />
                <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        {name}
                    </h5>
                </div>
            </div>
        </Link>
    );
}
