import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Layout () {

    const router = useLocation()
    const navigate = useNavigate()

    return (
        <div className="flex">
            <nav className='bg-slate-700 mr-[15px] overflow-y-auto text-center w-[250px] h-screen px-10 py-6'>
                <img onClick={() => navigate('/')} className='w-80 cursor-pointer' src="/vite.svg" alt="Vite Logo" />
                <ul className='items-center flex flex-col justify-center text-lg'>
                    <li>
                        <Link className={`${router.pathname === '/register' ? 'text-gray-600 transition-colors' : ''}`} to='/register'>
                        Register Page
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router.pathname === '/formik-basic' ? 'text-gray-600 transition-colors' : ''}`} to='/formik-basic'>
                        Formik basics
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router.pathname === '/formik-yup' ? 'text-gray-600 transition-colors' : ''}`} to='/formik-yup'>
                        Formik Yup
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router.pathname === '/formik-components' ? 'text-gray-600 transition-colors' : ''}`} to='/formik-components'>
                        Formik Components
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router.pathname === '/formik-abstractation' ? 'text-gray-600 transition-colors' : ''}`} to='/formik-abstractation'>
                        Formik Abstractation
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router.pathname === '/formik-page' ? 'text-gray-600 transition-colors' : ''}`} to='/formik-page'>
                        Formik Register
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router.pathname === '/dynamic-form' ? 'text-gray-600 transition-colors' : ''}`} to='/dynamic-form'>
                        DynamycForm
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
