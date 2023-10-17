import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstractation } from './03-forms/pages'

function App () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/register" index element={<RegisterPage />} />
                    <Route path="/formik-basic" index element={<FormikBasicPage />} />
                    <Route path="/formik-yup" index element={<FormikYupPage />} />
                    <Route path="/formik-components" index element={<FormikComponents />} />
                    <Route path="/formik-abstractation" index element={<FormikAbstractation />} />
                    <Route path="/*" element={<Link to='/lazy1' replace/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App
