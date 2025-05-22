import { lazy } from 'react'

const Buy = lazy(() => import('../pages/buy/Buy'))
const Offering = lazy(() => import('../pages/buy/Offering'))


const AllMenu = [
    {
        path: '/buy/',
        name: 'buy',
        element: <Buy />,
    },
    {
        path: '/offering/',
        name: 'offering',
        element: <Offering />,
    }
]

export default AllMenu