import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
   <body>
    <script type="module">
  import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.0/dist/web.js';

  Typebot.initStandard({ typebot: "my-typebot-r4d95pe" });
</script>

<typebot-standard style="width: 100%; height: 600px; "></typebot-standard>
  </body>

    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
