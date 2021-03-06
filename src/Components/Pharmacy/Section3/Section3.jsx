import React from 'react';
import { Row } from 'react-bootstrap';
import './Section3.css';
import AppStoreLogo from '../../../Images/pharmacy/app-store'
import GooglePlayLogo from '../../../Images/pharmacy/google-play'
import { useTranslation } from 'react-i18next';

export default function Section3() {
    const { t } = useTranslation();
    return (
        <>
            <Row className="section3">
                <h3>
                    {t('Section3_Title')}
                </h3>
                <p>
                    {t('Section3_SubTitle')}
                </p>
                <div>
                    <a href="https://itunes.apple.com/eg/app/vezeeta/id1010281314?" rel="noreferrer" target="_blank">
                        <img src={AppStoreLogo} alt="icon" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.ionicframework.vezeetapatientsmobile694843&hl"
                        target="_blank" rel="noreferrer" >
                        <img src={GooglePlayLogo} alt="icon" />
                    </a>
                </div>
            </Row >
        </>
    );
}
