import Image from "next/image"
import styles from './BlogImage.module.css'
export default function BlogImage({ src, alt, priority = false }) {
    return (<div className={styles.image}>
        <Image priority={priority} src={src} width={510} height={371} alt={alt} decoding="async" />
    </div>)
}