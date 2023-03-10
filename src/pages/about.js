import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/About.module.css'

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
      
      <main className={styles.main}>
        <div className={styles.description}>
            <h1>
             Bienvenido a la pagina <a href='/about'>About  </a> 
            </h1>
          
          <p>
            Ir a la pagina principal :
            <code className={styles.code}><a href='/'>src/pages/index.js</a></code>
          </p>
        </div>

        
      </main>
    </>
  )
}
