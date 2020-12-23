import React from 'react'

const Home = React.lazy(() => import('../pages/home/home'))
const Games = React.lazy(() => import('../pages/games/Games'))
const HayDay = React.lazy(() => import('../pages/hayday/HayDay'))

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/games',
        component: Games
    },
    {
        path: '/games/hayday',
        component: HayDay
    }
]

export default routes