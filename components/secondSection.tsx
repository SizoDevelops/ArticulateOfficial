import Image from 'next/image'
import React, { useEffect } from 'react'
import find from '../public/find.png'
import add from '../public/add.png'
import search from '../public/Search.png'
import listen from '../public/Listen.png'
import star from '../public/starsvg.svg'
import styles from './styles/secondSection.module.css'

interface IObjectKeys {
    client_id: string,
    redirect_uri: string,
    response_type: string,
    scope: string,
    include_granted_scopes: string,
    state: string
  }

 

const arr = [1, 2, 3, 4, 5]
export default function SecondSection() {


useEffect(() => {

      
    fetch(`https://www.googleapis.com/androidpublisher/v3/applications/com.sizodevelops.Articulate/reviews?
access_token=168997585616-au6s0ko4iphdvagplq7arfq7b15jrqae.apps.googleusercontent.com`, {
  method: "GET"
}).then(data => data.json()).then(data => console.log(data))


},[])


  return (
    <div className={styles.mainCont}>
        <div className={styles.firstSection}>
            <div className={styles.features}>
                <span className={styles.feature}>
                    <div className={styles.Icons}>
                        <Image src={find} fill alt="Song"/>
                    </div>
                    <p className={styles.featureP}>Find Lyrics</p>
                </span>
                <span className={styles.feature}>
                <div className={styles.Icons}>
                        <Image src={search} fill alt="Song"/>
                    </div>
                    <p className={styles.featureP}>Search lyrics</p>
                </span>
                <span className={styles.feature}>
                <div className={styles.Icons}>
                        <Image src={listen} fill alt="Song"/>
                    </div>
                    <p className={styles.featureP}>Seamlessly request lyrics.</p>
                </span>
                <span className={styles.feature}>
                <div className={styles.Icons}>
                        <Image src={add} fill alt="Song"/>
                    </div>
                    <p className={styles.featureP}>Edit your favorite music lyrics.</p>
                </span>
            </div>
            <span className={styles.title}>
                Articulate: Music and Lyrics
            </span>
        </div>

 

        <div className={styles.secondS}>
{/* 
            <div className={styles.Image} style={{left: "", right: "40%", bottom: "", top: ""}}/>
  
            <div className={styles.Image} style={{left: "", right: "40px", bottom: "0%", top: "300px"}}/> */}
  

            <span>
                 <span className={styles.cat}>Music & Audio</span>
          

            <div className={styles.leftS}>
                <div className={styles.spanOne}></div>
                <div className={styles.spanTwo}></div>
                <div className={styles.spanThree}></div>
            </div>

            </span>
           
    
                <span className={styles.secondCircle}></span>
                <div className={styles.reviews}>
                    <p className={styles.rTitle}>Reviews</p>
                    <div className={styles.reviewCont}>
                    <p className={styles.reviewer}>Articulate User:</p>
                    
                    <p className={styles.review}>What a phenomenal experience I had with this app, I was even laughing at myself when I realized that many songs Ive been singing them the wrong way before I got Articulate 😂😂, get this app guys its helpful</p>

                    <div className={styles.stars}>
                        {
                            arr.map((item, index) => {
                                return(
                                    <span key={index} className={styles.star}>
                                            <Image src={star} fill alt="Stars" />  
                                    </span>
                                )
                            })
                        }
                       
                    </div>
                </div>
                {/* ..................................... */}
                    <div className={styles.reviewCont}>
                    <p className={styles.reviewer}>Articulate User:</p>
                    
                    <p className={styles.review}>This App is Brilliant, fresh, Easy to use, not Complicated at all and I`d advice everyone to get it! I love it, I love it, I love it!!</p>

                    <div className={styles.stars}>
                        {
                            arr.map((item, index) => {
                                return(
                                    <span key={index} className={styles.star}>
                                            <Image src={star} fill alt="Stars" />  
                                    </span>
                                )
                            })
                        }
                       
                    </div>
                </div>
                {/* ..................................... */}
                    <div className={styles.reviewCont}>
                    <p className={styles.reviewer}>Articulate User:</p>
                    
                    <p className={styles.review}>Outstanding! Great for finding lyrics and musical knowledge it provide accessibility to a world of expertise, musical knowledge, it has a great collection of lyrics... very suggested</p>

                    <div className={styles.stars}>
                        {
                            arr.map((item, index) => {
                                return(
                                    <span key={index} className={styles.star}>
                                            <Image src={star} fill alt="Stars" />  
                                    </span>
                                )
                            })
                        }
                       
                    </div>
                </div>

        
               
            </div>
        </div>
    </div>
  )
}
