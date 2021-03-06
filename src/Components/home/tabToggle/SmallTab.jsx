import React, {useEffect} from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAreas, getCities, getCommonCity, getOtherCities } from '../../../ReactRedux/Actions/CitiesActionRedux';
import {getCommonDept, getDepts, getOtherDept} from '../../../ReactRedux/Actions/DeparmentsAction';
import {useHistory} from 'react-router-dom'
import style from './smallTab.module.css';
import { useContext } from 'react';
import { langContext } from '../../../Context/LangContext';
import { useTranslation } from 'react-i18next';


export default function SmallTab() {
    const [t, i18n] = useTranslation();
    const dispatch = useDispatch();
    const depts = useSelector((state) => state.deptReducer);
    const [count, setCount] = useState(1);
    const [selectedDpts, setSelectedDpts] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    //query param
    const history = useHistory();
    //for localization
    const {lang, setLang} = useContext(langContext);
    useEffect(() => {
        //da ll depts
        dispatch(getDepts());
    }, [])

    //useEfect
    useEffect(() => {
        dispatch(getCommonDept(count));
        dispatch(getOtherDept(count));
    }, [count]);
    const nextDpts = (e) => {
        e.preventDefault();
        const nextCount = count===3 ? 3 : count+1; 
        setCount(nextCount);
    }
    const prevDpts = (e) => {
        e.preventDefault();
        const nextCount = count===1 ? 1 : count-1; 
        setCount(nextCount)
    }
    const setDpts = (e) => {
        setSelectedDpts(e.target.outerText)
    } 
    const setDoctorName = (e) => {
        setSelectedDoctor(e.target.value);
    }
    const goToDoctorPage = () => {
        history.push({
            pathname: '/DoctorCall',
            search: `?dpt=${selectedDpts}`
        });
    }
    // tab-pane fade
    return <>
        <div className={`d-flex align-items-center
                    ${style.reserveID}`} id={style.reserve}>
            <div className="dropdown">
                <button className="btn dropdown-toggle" 
                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" 
                aria-expanded="false">
                    <h5>
                    {t('part7.browse')}
                    </h5>
                    <h3>
                        <i className="fas fa-stethoscope"></i>
                        <span className="deptTitle">
                        {selectedDpts==''?  (
                            t('part7.specialty2')
                        ) : selectedDpts}
                        </span>
                    </h3>
                </button>
                <ul className={`dropdown-menu ${style.deptMenu}`}
                aria-labelledby="dropdownMenuButton1">
                    <div className={style.ulContainer}>
                        <div className="right">
                            <span>
                                <li className='mx-2' disabled id="sItem">
                                    {t('part7.popular')}
                                </li>
                            </span>
                            {
                            depts.commonDpts.map(el => (
                                <li key={el.name} onClick={(e) => setDpts(e)}>
                                    <a className={`dropdown-item ${style.common}`} 
                                    href="#" style={{'color': '#0070cd'}}>
                                        {lang=='en'? el.nameAR : el.name} 
                                    </a>
                                </li>
                                ))
                            } 
                            
                            {/* <!----awel part x el-t5sosat------> */}
                        </div>
                        <div className="left">
                            <span>
                            <li className='mx-3' style={{width: 'max-content'}}>
                                {t('part7.other')}
                            </li>
                        </span>
                        {
                        depts.otherDpts.map(el => (
                            <li key={el.name} onClick={(e) => setDpts(e)}>
                                <a className={`dropdown-item ${style.common}`} 
                                href="#" style={{'color': '#0070cd'}}>
                                {lang=='en'? el.nameAR : el.name}
                                </a>
                            </li>
                            ))
                            }
                            {/* <!----awel part x el-t5sosat------> */}
                        </div>
                    </div>
                    <div className={style.footer}>
                        <button className={style.sliderBtn}
                        onClick={(e) => prevDpts(e)}>
                            <i className='fas fa-arrow-right mx-2'></i>
                        </button>
                        <span>{t('part7.page')} {count}\3</span>
                        <button className={style.sliderBtn} 
                        onClick={(e) => nextDpts(e)}>
                            <i className='fas fa-arrow-left mx-2'></i>
                        </button>
                    </div>
                </ul>
            </div>
            
           
            <div className="text-light d-flex">
                <button className='btn btn-danger' id={style.btn1} onClick={goToDoctorPage}>
                    {/* <i className="fas fa-search"></i> */}
                    {t('part7.search2')}
                </button>
            </div>
        </div>
    </>;
}
