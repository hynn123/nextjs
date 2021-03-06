import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home()
{
  return(
    <div id="component-b9bcab4538776a17fff93d18f82a8272" x-data="{ activeTab: 'preview' }" class="border-b border-t border-gray-200 sm:border sm:rounded-lg overflow-hidden ">
      <div class="px-4 py-2 border-b border-gray-200 flex justify-between items-center bg-white sm:py-4 sm:px-6 sm:items-baseline">
        <h3 class="flex-1 min-w-0 flex items-center justify-between sm:justify-start font-regular text-base md:text-lg leading-8 truncate">
          <a href="#component-b9bcab4538776a17fff93d18f82a8272" class="truncate">Simple centered</a>

          <span class="hidden sm:flex flex-shrink-0 ml-3 items-center rounded-full px-3 py-1 bg-gray-100">
            <svg class="h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
            </svg>

            <span class="ml-2 text-xs leading-5 font-medium uppercase tracking-wider text-gray-500">PNG preview</span>
          </span>
        </h3>

        <div class="ml-3 text-base">
                        <a href="/pricing" class="font-semibold text-teal-500 hover:text-teal-600 transition ease-in-out duration-150">
            Get the HTML →
          </a>
                      </div>
      </div>
      <div>
        <img class="sm:hidden" src="/img/components/hero-sections.01-simple-centered-xs.png">
        <img class="hidden sm:block" src="/img/components/hero-sections.01-simple-centered-xl.png">
      </div>
    </div>
  );
}

/*
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lobato Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
*/