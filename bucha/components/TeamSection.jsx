import Image from "next/image"
import styles from '@/styles/TeamSection.module.css'

export default function TeamSection() {
    return <div className={styles.section}>
        <div className={styles.container}>
            <div>
                <Image src={'/images/elipse.png'} width={501} height={501} alt="team picture" />

            </div>
            <div>
                <div className={styles.title}>
                    <h2>Hejj, ovo je tima iza</h2>
                    <div>
                        <Image src={'/images/bucha_logo.png'} width={215.378} height={60} alt="bucha logo" />
                    </div>
                </div>
                <div>
                    <p>Tri studenta na misiji da ljudima u Srbiji donesu flašu zabave i zdravlja. Ukoliko se nismo još upoznali, dobar dan mi smo Tamara (devojka sa šeširom), Ivana (devojka koja spontano gleda u stranu) i Uroš (momak u plavom) i upoznaćete se sa nama preko naših društvnih mreža gde svaki dan postavljamo neku novu anegdotu vezanu za kombuhu, ali voleli bismo i mi vas da upoznamo, tako da ukoliko ste kupili neki od naših proizvoda pišite nam vaša iskustva, šaljite slike i budite deo pozitivne energije.</p>
                </div>
            </div>
        </div>
    </div>
}