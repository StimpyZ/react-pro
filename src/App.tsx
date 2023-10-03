import { Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LazyLayout from './01-lazyload/layouts/LazyLayout'
import { routes } from './01-lazyload/layouts/routes'

function App (): JSX.Element {

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LazyLayout />}>
                        <Route path="/" index element={<h1>Home</h1>} />
                        {routes.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))}
                        <Route path="/*" element={<Link to='/lazy1' replace/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    )

}

export default App
