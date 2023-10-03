import { type LazyExoticComponent, lazy } from 'react'

type JSXComponent = () => JSX.Element

interface Routes {
    to: string
    path: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

const Lazy1 = lazy(async () => await import('../pages/LazyPage1'))
const Lazy2 = lazy(async () => await import('../pages/LazyPage2'))
const Lazy3 = lazy(async () => await import('../pages/LazyPage3'))

export const routes: Routes[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'LazyPage1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'LazyPage2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'LazyPage3'
    }
]
