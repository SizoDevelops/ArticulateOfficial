import Image from 'next/image'
import React from 'react'
import styles from './styles/Right.module.css'
import google from '../public/google.png'
import apkpure from '../public/apk.png'
import Link from 'next/link'
export default function Right() {
  return (
    <div className={styles.rightCont}>
        <span className={styles.circle}></span>
       <div className={styles.details}>
       <p className={styles.title}>Articulate</p>
       <p className={styles.des}>The app that won’t leave you singing the incorrect lyrics, Wrap your tongue around good music and sing out loud with utmost confidence.</p>
       </div>

       <div className={styles.btnsCont}>
        <p style={{color: '#B1D7EE'}} className={styles.download}>Download Now!</p>
        <div className={styles.btns}>
            <Link href={"https://play.google.com/store/apps/details?id=com.sizodevelops.Articulate"} target={"_blank"} className={styles.google}>
              <div className={styles.iconHolder}>
                <Image src={google} fill alt={"Icon"}/>
              </div>
                <p>Google Play</p>
            </Link>
            <Link href={"https://apkpure.com/articulate-music-and-lyrics/com.sizodevelops.Articulate"} target={"_blank"} className={styles.apkpure}>
            <div className={styles.iconHolder}>
                <Image src={apkpure} fill alt={"Icon"}/>
              </div>
                <p>ApkPure</p>
            </Link>
        </div>
            
       </div>
    </div>
  )
}
