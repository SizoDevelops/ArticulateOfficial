import React from 'react'
import styles from '@/styles/Home.module.css'
import Phone from './Phone'
import Right from './Right'
import SecondSection from './secondSection'

export default function Body() {
  return (
    <div className={styles.mainBody}>
        <div className={styles.topSection}>
            <Phone/>
            <Right/> 
        </div>
       
        <SecondSection/>
    </div>
  )
}
