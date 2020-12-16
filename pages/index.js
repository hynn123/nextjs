import Logo from '../pages/header/logo'
import styles from '../styles/Home.module.css'

export default function Home()
{
  return(
    <div>
      <Logo />

      <main className={styles.main}>
        <section class="container">
          <div class="mx-auto">Lobato</div>
        </section>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}