import React from 'react'
import styles from './styles/Phone.module.css'

export default function Buttons() {
  return (
    <div className={styles.Buttons}>
    <span className={styles.btnOne}>
        <span className={styles.btnHeader}>
            <span className={styles.btnNumber}>1</span>
            <p className={styles.btnTitle}>Find Lyrics</p>
        </span>
       
       <p className={styles.btnDes}>Find over 1000 lyrics of your favorite songs</p>

    </span>
    {/* B-2 */}
    <span className={styles.btnTwo}>
        <span className={styles.btnHeader}>
            <span className={styles.btnNumber}>2</span>
            <p className={styles.btnTitle}>Request Lyrics</p>
        </span>
       
       <p className={styles.btnDes}>Request lyrics with ease and never be left out, on trends</p>

    </span>

    {/* B-3 */}
    <span className={styles.btnThree}>
        <span className={styles.btnHeader}>
            <span className={styles.btnNumber}>3</span>
            <p className={styles.btnTitle}>Search Lyrics</p>
        </span>
       
       <p className={styles.btnDes}>Request lyrics with ease and never be left out, on trends</p>

    </span>
  </div>
  )
}
