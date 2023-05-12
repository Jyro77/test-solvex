import { useState } from "react";
import { Link, useLocation } from "wouter";
import { marketData } from "../../marketData";

export function EditSupermarket() {
    const [location, setLocation] = useLocation();
    const id = location.slice(13, location.length - 5);
    const singleMarket = marketData.filter(e => e.id === id);
    const update = marketData.findIndex(obj => obj.id === id);

    const [form, setForm] = useState({
        id: singleMarket[0].id,
        name: singleMarket[0].name,
        image: singleMarket[0].image,
        products: singleMarket[0].products,
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        marketData[update].name = form.name;
        marketData[update].image = form.image;
        marketData[update].products = form.products;
        setLocation("/supermarket");
    };
    return (
        <div className='flex flex-col'>
            <form className='mb-5' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label
                        htmlFor='name'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Name
                    </label>
                    <input
                        name='name'
                        type='text'
                        id='name'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Supermarket'
                        onChange={handleChange}
                        value={form.name}
                        required
                    />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor='image'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Image URL
                    </label>
                    <input
                        name='image'
                        type='text'
                        id='image'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        onChange={handleChange}
                        value={form.image}
                        required
                    />
                </div>
                <button
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Submit
                </button>
            </form>
            <Link href='/supermarket'>
                <button
                    type='submit'
                    className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                    Back
                </button>
            </Link>
        </div>
    );
}
