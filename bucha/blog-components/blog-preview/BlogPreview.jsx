import Image from "next/image";
import Link from "next/link";
import styles from "./BlogPreview.module.csss"
import Meta from "../meta/Meta";

export default function BlogPreview({ title, metaTag1, metaTag2, metaTag3, image, text, link, callToAction }) {
    return (
        <div className={styles.relatedXXL}>
            <strong className={styles.previewTitle}>{title}</strong>
            <Meta metaTag1={metaTag1} metaTag2={metaTag2} metaTag3={metaTag3} />
            <Image className={styles.heroImage} width={720} height={377} src={image} decoding="async"
                alt={title} />
            <p className={styles.text}>
                {text}
            </p>
            <Link className={styles.mainButton} href={link}>{callToAction}</Link>
        </div>
    );
}