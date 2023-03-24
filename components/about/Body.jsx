import React from 'react'
import styles from '../styles/aboutPage/Body.module.css'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import Cover from '../../public/Cover.svg'
import SizoDevelops from '../../public/SizoDevelops.svg'

export default function Body() {
  return (
    <>
    <h1 className={styles.title}>About Articulate</h1>
    <div className={styles.mainCont}>
        <div className={styles.mainContainer}>
            <div className={styles.picAndParas}>
                <div className={styles.Cover}>
                    <Image src={Cover} alt="Cover Image" fill/>
                </div>
                <div className={styles.topParas}>
                    <p className={styles.paragraph}>{"Articulate: Music and Lyrics, an app that brings your favourite SA music to your fingertips. You can also enjoy the lyrics with much convenience, confidence and pride."}</p>
                    <p className={styles.paragraph}>{"Made to help users understand the lyrics of their favourite songs, and feel a high sense of immersion to the songs they enjoy most."}</p>
                </div>
            </div>
            <div className={styles.bottomParas}>
            <p className={styles.paragraph}>{"Articulate's job is to increase enjoyment in music and trigger a deeper understanding of the lyrics. Users can create snippets from lyrics and share them on social media or save them as daily motivation."}</p>
            <p className={styles.paragraph}>{"Articulate does not only offer reading of lyrics you can also submit lyrics and your submitted song will be available instantly to all users. Articulate also allows for the ability to edit lyrics."}</p>
            </div>
        </div>

        <div className={styles.secImage}>
        <Image src={logo} alt="Logo Image" fill/>
        </div>

        <div className={styles.creater}>
            <p className={styles.createrP}>By</p>
            <div className={styles.sizoDevelops}>
            <Image src={SizoDevelops} alt="Sizo Develops Logo" fill/>
            </div>
            <p className={styles.createrP}>Sizo Develops</p>
        </div>
    </div>
    </>
    
  )
}
