import React from 'react'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom'
import PreJunior from './pages/PreJunior'
import p from './pages/Pages.module.css'
import {Link} from 'react-router-dom';
import Error404 from '../h5/pages/Error404';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+',
    // add paths
}

function Pages() {
    return (
        <div>
            <div className={p.wrapper}>
                {/*<h1>Home work</h1>*/}
                <nav className={p.navlink}>
                    <Link className={p.nav} to="/pre-junior">  pre-junior  </Link> |
                    <Link className={p.nav} to="/junior">  junior  </Link> |
                    <Link className={p.nav} to="/junior+">  junior+ =) </Link>
                </nav>
            </div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
