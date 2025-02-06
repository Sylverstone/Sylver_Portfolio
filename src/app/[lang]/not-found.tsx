import Link from 'next/link'
import styles from '@/style/styles.module.scss'
import { getTexts } from '../Scripts/getTexts';
import { GetServerSideProps } from 'next';


export default async function NotFound({ params } : {params : { lang : 'en' | 'fr'}}) {

    return ( 
    
    <div className={styles.notFound}>
        <h1>Not found – 404!</h1>
        <Link href="/">Go back to Home</Link>
    </div>

    );
}
