import { lazy } from 'react'

// const Buy = lazy(() => import('../pages/buy/Buy'))
// const Offering = lazy(() => import('../pages/buy/Offering'))
// const Dummy = lazy(() => import('../pages/dummy'))

// import Buy from '../pages/buy/Buy'
// import Offering from '../pages/buy/Offering'


const Buy = lazy(() => import('../pages/buy/Buy'))
const Offering = lazy(() => import('../pages/buy/Offering'))
// const Dummy = lazy(() => import('../pages/dummy'))

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
    },
    // {
    //     path: '/dummy/',
    //     name: 'offering',
    //     element: <Dummy />,
    // }
]

export default AllMenu