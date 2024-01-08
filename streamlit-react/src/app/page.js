import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <iframe src="http://localhost:8501"  width="100%" height="100%" border="none" style={{ position: "fixed", top: "0px", bottom: "0px", right: "0px", left: "0px" }}></iframe>
      </div>
    </main>
  )
}
