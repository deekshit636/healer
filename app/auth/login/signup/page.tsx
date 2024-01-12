import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import styles from '../styles/styles.module.css'

export default function Contact() {
  return (
    <main className={styles.main}>
      <Header/>
      <Sidebar/>
      <div className={styles.pageContent}>
        <p>Contact Page</p>
        <Footer/>
        </div>
    </main>
  )
}
