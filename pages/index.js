import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyLogo from '../src/util/MyLogo'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Portifólio Felipe Oliveira NextJS" />
        <title>Felipe Oliveira</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href={"https://fonts.googleapis.com/css2?family=Roboto&display=swap"} rel="stylesheet"/>
      </Head>

      <main className={styles.main}>

      <div className={styles.logo}>   
        <MyLogo />
      </div>

        <h1 className={styles.title}>
          Felipe Oliveira
        </h1>

        <p className={styles.description}>
          never stop learn
        </p>

        <div className={styles.box}>

        <div className={styles.grid}>

          <a className={styles.card} href="https://github.com/oliveirascof" target="_blank" rel="noreferrer">
            <h2 >Meus projetos</h2>
            <p>Aqui estão meus projetos</p>
          </a>

          <a className={styles.card}>
            <h2>Sobre</h2>
            <p>Conheça um pouco sobre mim.</p>
          </a>

          <a className={styles.card}>
            <h2>Redes sociais</h2>
            <p>Entre e me conheça nas redes.</p>
          </a>

          <a className={styles.card}>
            <h2>Contato</h2>
            <p> Entre em contato comigo.  </p>
          </a>

          </div>


        </div>
      </main>

      <footer className={styles.footer}>
        
          <span className={styles.spanFooter}>
            <p>
              Felipe Oliveira
            </p>
          </span>
          
      </footer>
    </div>
  )
}
