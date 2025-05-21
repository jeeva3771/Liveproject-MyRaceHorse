import { lazy } from 'react'

const Buy = lazy(() => import('../pages/Buy'))

const AllMenu = [
    {
        path: '/buy/',
        name: 'buy',
        element: <Buy />,
    }
]

export default AllMenu