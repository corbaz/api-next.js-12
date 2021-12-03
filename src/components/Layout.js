import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsPlusLg as Plus} from 'react-icons/Bs'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Layout({children}) {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Head>
                <title>Tareas de JCC</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <nav className="flex flex-nowrap w-100 justify-between items-center
                            bg-teal-500 p-6">
                <div className="flex text-white">
                    <Link href="/">
                        <span className="font-semibold text-xl tracking-tight">Notebo-OK</span>
                    </Link>
                </div>
                <div className="flex justify-between items-center gap-4 text-sm">
                    <Link href="/">
                        <a className="inline-block mt-0 text-teal-200 hover:text-white">
                            Home
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="inline-block mt-0 text-teal-200 hover:text-white">
                            Home
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="inline-block mt-0 text-teal-200 hover:text-white">
                            Home
                        </a>
                    </Link>
                    <button className="inline-flex  mt-0 text-teal-200 text-sm px-3 py-2
                            border rounded border-white
                            hover:border-white hover:bg-white hover:text-teal-500"
                            onClick={() => {
                                router.push('/newTask1').then(r => '/')
                            }}
                    >
                        <Plus className={"mr-2 my-auto"}/>Nueva Tarea
                    </button>
                </div>

            </nav>
            <main className={styles.main}>
                <h1 className="text-6xl font-boldt text-[#0070f3]">
                    Bienvenido a TAREAS App!
                </h1>

                <p className={styles.description}>
                    <code className={styles.code}>Administrador de Tareas</code>
                </p>

                <div className={styles.grid}>
                    {children}
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >Impulsado por{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Logo-Vercel" width={72} height={16}/>
                    </span>
                </a>
            </footer>
        </div>
    )
}