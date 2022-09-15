import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portifolio Felipe Oliveira</title>
        <meta name="description" content="Portifólio Felipe Oliveira NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <a>
          <Image loader="../public/logo_felipe.jpg " alt="Logo" width={200} height={200}/>
        </a>

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
            <p>Aqui estão localizados meus projetos</p>
          </a>

          <a className={styles.card}>
            <h2>Sobre mim</h2>
            <p>Conheça um pouco sobre mim.</p>
          </a>

          <a className={styles.card}>
            <h2>Redes sociais</h2>
            <p>Entre e me conheça nas redes.</p>
          </a>

          <a className={styles.card}>
            <h2>Contato</h2>
            <p> Entre em contato comigo hoje mesmo. </p>
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
