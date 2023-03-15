import React, { useEffect } from 'react'
import { Business, Footer, Hero, Navbar, Stats } from '../../components'
import styles from '../../style'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-primary w-full overflow-hidden relative">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Hero />
                    </div>
                </div>
                <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Stats />
                        <Business />
                    </div>
                </div>
            </div>
        </>
    )
}
