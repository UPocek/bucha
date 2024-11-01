import styles from './Related.module.css'
import LinkButton from '../../buttons/LinkButton'

export default function Related() {
    return (
        <div className={styles.related}>
            <div>
                <p>Pročitajte sledeće ➡️</p>
                <LinkButton buttonText={'Druga fermentacija'} link={'/uputstva/druga-fermentacija'} main={false} />
            </div>
        </div>
    )
}