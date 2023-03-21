import React from 'react'
import styles from '../styles/aboutPage/Body.module.css'
import Image from 'next/image'
import logo from '../../public/logo.svg'

export default function Body() {
  return (
    <>
    <h1 className={styles.title}>About Articulate</h1>
    <div className={styles.mainCont}>
        <div className={styles.aboutCont}>
            <div className={styles.paraCont2}>
                <div className={styles.divCont}>
                    <div className={styles.divParaOne3}></div>
                    <div className={styles.divParaOne22}></div>
                </div>
                <p className={styles.para}>The app that won’t leave you singing the incorrect lyrics The app that won’t leave you singing the incorrect lyrics</p>
            </div>

            <div className={styles.paraCont1}>
                <div className={styles.divCont}>
                    <div className={styles.divParaOne1}></div>
                    <div className={styles.divParaOne11}></div>
                </div>
                <p className={styles.para}>The app that won’t leave you singing the incorrect lyrics The app that won’t leave you singing the incorrect lyrics </p>
            </div>

            <div className={styles.paraCont2}>
                <div className={styles.divCont}>
                    <div className={styles.divParaOne3}></div>
                    <div className={styles.divParaOne22}></div>
                </div>
                <p className={styles.para}>The app that won’t leave you singing the incorrect lyrics The app that won’t leave you singing the incorrect lyrics</p>
            </div>

            <div className={styles.paraCont3}>
                <div className={styles.lastDivCont}>
                    <div className={styles.divParaOne2}></div>
                    <div className={styles.divParaOne11}></div>
                </div>
                <p className={styles.para}>The app that won’t leave you singing the incorrect lyrics The app that won’t leave you singing the incorrect lyrics</p>
            </div>
        </div>
        <div className={styles.image}>
            <Image src={logo} alt="Logo" fill/>
        </div>
       
    </div>
    </>
    
  )
}
