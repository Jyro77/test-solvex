import { useState } from "react";
import { useLocation, Link } from "wouter";
import brandData from "../../brandData";

export default function AddBrand() {
    const newID = brandData.length + 1;

    const [, setLocation] = useLocation();
    const [form, setForm] = useState({
        id: newID,
        name: "",
        image: "",
        products: [],
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        brandData.push(form);
        setForm({
            id: newID,
            name: "",
            image: "",
            products: [],
        });
        setLocation("/brand");
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
                        placeholder='Brand'
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
            <Link to='/brand'>
                <button
                    type='submit'
                    className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                    Back
                </button>
            </Link>
        </div>
    );
}
