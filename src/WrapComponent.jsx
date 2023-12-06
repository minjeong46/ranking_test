import React from 'react';
import TopModalComponent from "./wrap/TopModalComponent";
import MainModalComponent from './wrap/MainModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from "./wrap/MainComponent";
import FooterComponent from './wrap/FooterComponent';
import SubLoginComponent from './wrap/sub/SubLoginComponent';
import SubSignupAgreementComponent from './wrap/sub/SubSignupAgreementComponent';
import SubSignupComponent from './wrap/sub/SubSignupComponent';
import Sub3Component from './wrap/sub/Sub3Component';
import SubSignInIdSearchComponent from './wrap/sub/SubSignInIdSearchComponent';
import SubSignInIdSearchResultComponent from './wrap/sub/SubSignInIdSearchResultComponent';
import SubSignInPwResetComponent from './wrap/sub/SubSignInPwResetComponent';
import SubSignInPwSearchComponent from './wrap/sub/SubSignInPwSearchComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { topModal } from "./reducer/topModal";
import { signIn } from './reducer/signIn';


export default function WrapComponent() {

    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        if(localStorage.getItem('RANKING_SIGNIN_DATA')!==null) {                        
            const res = JSON.parse(localStorage.getItem('RANKING_SIGNIN_DATA'));
            dispatch(signIn(res));
        }
    },[]);


    React.useEffect(()=>{
        let toDay = new Date();
        if(localStorage.getItem('RANKING_TOP_MODAL') !== null){
            const res = JSON.parse(localStorage.getItem('RANKING_TOP_MODAL'));
            let setDay = new Date(res.expires);

            if(toDay <= setDay){
                dispatch(topModal(false));
        
            }
            else {
                dispatch(topModal(true));
        
            }
        }
        
    },[]);


    return (
        <div id="wrap">
            {
                selector.topModal.isTopModal && <TopModalComponent />
            }
            { 
                selector.mainModal.isMainModal && <MainModalComponent />
            }
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>

                    <Route path='/' element={<HeaderComponent />}>
                        <Route index element={<MainComponent />}/>
                        <Route path='/index' element={<MainComponent />}/>
                        <Route path='/login' element={<SubLoginComponent />}/>
                        <Route path='/signupAgree' element={<SubSignupAgreementComponent />}/>
                        <Route path='/signup' element={<SubSignupComponent />}/>
                        <Route path='/sub3' element={<Sub3Component />}/>
                        <Route path='/signinIdSearch' element={<SubSignInIdSearchComponent />}/>
                        <Route path='/signinIdSearchResult' element={<SubSignInIdSearchResultComponent />}/>
                        <Route path='/signinPwSearch' element={<SubSignInPwSearchComponent />}/>
                        <Route path='/signinPwReset' element={<SubSignInPwResetComponent />}/>

                    </Route>

                </Routes>

            </BrowserRouter>
            <FooterComponent />
        </div>
    );
}
