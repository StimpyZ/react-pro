import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Layout () {

    const router = useLocation()
    const navigate = useNavigate()

    return (
        <div className="flex">
            <nav className='bg-slate-700 mr-[15px] overflow-y-auto text-center w-[250px] h-screen py-6 px-5'>
                <div className='px-5'>
                    <img onClick={() => navigate('/')} className='w-80 cursor-pointer' src="/vite.svg" alt="Vite Logo" />
                </div>
                <ul className='items-center flex flex-col justify-center text-2xl font-bold mt-10'>
                    <li>
                        <Link className={`${router.pathname === '/' ? 'text-gray-600 transition-colors' : ''}`} to='/'>
                        Shopping Page
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router.pathname === '/about' ? 'text-gray-600 transition-colors' : ''}`} to='/about'>
                        About
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router.pathname === '/users' ? 'text-gray-600 transition-colors' : ''}`} to='/users'>
                        Users
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className='flex-1 h-screen overflow-y-scroll p-[15px]'>
                <Outlet />
            </main>
        </div>
    )

}
