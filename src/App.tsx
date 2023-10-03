import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'

function App () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" index element={<h1>Home</h1>} />
                    <Route path="/about" index element={<h1>About</h1>} />
                    <Route path="/users" index element={<h1>Users</h1>} />
                    <Route path="/*" element={<Link to='/lazy1' replace/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App
