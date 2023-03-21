import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Header() {
  return (
    <div className={styles.header}>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Blog</Link>
    </div>
  )
}
