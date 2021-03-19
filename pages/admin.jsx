import { useRouter } from 'next/router'
import { useEffect } from 'react'

import styles from '../styles/pages/Admin.module.scss'

export default function Admin() {
    const router = useRouter()

    useEffect(() => {
        const secret = localStorage.getItem('_homepage_auth_secret_')

        if (secret !== process.env.NEXT_PUBLIC_AUTH_SECRET) router.push('/')
    }, [])

    return (
        <div className={styles.container}>
            <section>Estatísticas de uso</section>
            <section>CRUD de projetos</section>
        </div>
    )
}