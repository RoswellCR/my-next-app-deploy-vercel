import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/About.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>My Next App/ About</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
           <h2>About Page</h2> 
        <div className={styles.description}>
          <h1>
            Ir a :
            <Link href='/'>Home Page</Link>
          </h1>
        </div>
        <div className={styles.description}>
          <h1>
            Ir a :
            <Link href='/contact'>Contact Page</Link>
          </h1>
        </div>
      </main>
    </>
  )
}
