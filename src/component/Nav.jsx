import { Link } from "wouter";
export default function Nav() {
    return (
        <div className='sticky top-0 w-full py-5 flex justify-around'>
            <Link href='/'>
                <h2 className='cursor-pointer'>Home</h2>
            </Link>
            <div className='flex justify-around gap-5'>
                <Link href='/supermarket'>
                    <span className='cursor-pointer'>Supermarkets</span>
                </Link>
                <Link href='/product'>
                    <span className='cursor-pointer'>Products</span>
                </Link>
                <Link href='/brand'>
                    <span className='cursor-pointer'>Brands</span>
                </Link>
            </div>
        </div>
    );
}
