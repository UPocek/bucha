import styles from '@/styles/Related.module.css'
import MainButton from './MainButton'

export default function Related() {
    return <div className={styles.related}>
        <div>
            <p>Pročitajte sledeće ➡️</p>
            <MainButton buttonText={'Druga fermentacija'} link={'/uputstva/druga-fermentacija'} color={'whiteOut'} />
        </div>
    </div>
}