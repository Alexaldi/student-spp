import React from 'react'
import { Business, Footer, Hero, Navbar, Stats } from '../../components'
import styles from '../../style'

export const Home = () => {
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
