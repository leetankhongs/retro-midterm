import { useEffect, useState } from 'react'

import BoardList from './boardList/index'
import Header from './../../components/header/index'
import { Redirect } from 'react-router-dom';
import Authorization from './../../until/callAuth'

const BoardPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        Authorization('profile', JSON.parse(localStorage.getItem('token')))
        .then(res => { console.log(res); setIsLogin(true); setIsAuth(true)})
        .catch(err =>{ console.log("Lỗi");setIsLogin(false); setIsAuth(true) } )
    }, []);

    if(!isAuth) return <></>;

    if (!isLogin) return <Redirect to='/login' />

    return (
        <>
            <Header />
            <BoardList />
        </>
    )
}

export default BoardPage;