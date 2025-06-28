"use client"
import React from 'react'
import Buttons from './Buttons'
import styles from './styles/Phone.module.css'

export default function Phone() {
    // Millitary Time
    const [time, setTime] = React.useState("");
    React.useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setTime(`${hours}:${minutes}`);
        }, 1000);
        return () => clearInterval(interval);
    })
  return (
    <div className={styles.body}>
        <span className={styles.outerCover}>
            <span className={styles.outerShine}>
                <span className={styles.timeAndDate}>
                    <span className={styles.time}>
                        {time}
                    </span>
                    <span className={styles.date}></span>
                </span>
            </span>
        <span className={styles.semiIntCover}>
            <span className={styles.screen}>
                <span className={styles.camera}>
                    <span className={styles.innerCam1}>
                    <span className={styles.innerCam2}>
                    <span className={styles.innerCam3}>

</span>
</span>
                    </span>
                </span>
            </span>
            </span>
        </span>
      


      {/* This is the button section */}
        <Buttons/>
    </div>
  )
}
