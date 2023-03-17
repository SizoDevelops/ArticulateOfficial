import React from 'react'
import styles from '@/styles/Home.module.css'
import Phone from './Phone'

export default function Body() {
  return (
    <div className={styles.mainBody}>
        <Phone/>
    </div>
  )
}
