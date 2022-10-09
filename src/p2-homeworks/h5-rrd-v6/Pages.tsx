import React from 'react'
import {Link, Navigate, Route, Routes} from 'react-router-dom'
import PreJunior from './pages/PreJunior'
import p from './pages/Pages.module.css'
import Error404 from '../h5/pages/Error404';
import Junior from "./pages/Junior";
import {JuniorPlus} from "./pages/Junior_plus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+'
}

function Pages() {
    return (
        <div>
            <div className={p.wrapper}>
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
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
