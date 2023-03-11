import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'


export default function contact(){
  return (
    <>
      <Head>
        <title>My Next App / Contact</title>
        <meta name="description" content="Contact Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h2>Contact Page</h2>
        <div className={styles.description}>
          <h1>
           Ir a :<Link href='/'>Home Page</Link> 
          </h1>
        </div>
        <div className={styles.description}>
          <h1>
           Ir a :<Link href='/about'>About Page</Link> 
          </h1>
        </div>
      </main> 
    </>
  )
}
