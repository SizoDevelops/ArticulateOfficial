import Image from 'next/image'
import React from 'react'
import styles from './styles/Right.module.css'
import google from '../public/google.png'
import apkpure from '../public/apk.png'
export default function Right() {
  return (
    <div className={styles.rightCont}>
        <span className={styles.circle}></span>
       <div className={styles.details}>
       <p className={styles.title}>Articulate</p>
       <p className={styles.des}>The app that won’t leave you singing the incorrect lyrics, The app that won’t leave you singing the incorrect lyrics</p>
       </div>

       <div className={styles.btnsCont}>
        <p style={{color: '#B1D7EE'}}>Download Now!</p>
        <div className={styles.btns}>
            <span className={styles.google}>
              <div className={styles.iconHolder}>
                <Image src={google} fill alt={"Icon"}/>
              </div>
                <p>Google Play</p>
            </span>
            <span className={styles.apkpure}>
            <div className={styles.iconHolder}>
                <Image src={apkpure} fill alt={"Icon"}/>
              </div>
                <p>ApkPure</p>
            </span>
        </div>
            
       </div>
    </div>
  )
}
