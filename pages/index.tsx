import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>XIVIA — Social</title>
        <meta name="description" content="XIVIA social platform - prototype" />
      </Head>
      <Header />
      <main className="container">
        <h1>Welcome to XIVIA</h1>
        <p className="mt-4">This repository contains a starter scaffold for the XIVIA social platform (Next.js + TypeScript + Supabase).</p>

        <section className="mt-6 card">
          <h2>What’s included</h2>
          <ul>
            <li>Next.js app (TypeScript)</li>
            <li>Supabase client dependency (configure via environment variables)</li>
            <li>Basic page layout and API placeholder</li>
          </ul>
        </section>

        <section className="mt-6 card">
          <h2>Get started (local)</h2>
          <ol>
            <li>Install: <code>npm install</code></li>
            <li>Copy <code>.env.example</code> to <code>.env.local</code> and set SUPABASE keys.</li>
            <li>Run dev server: <code>npm run dev</code></li>
            <li>Open <code>http://localhost:3000</code></li>
          </ol>
        </section>

        <section className="mt-6 card">
          <h2>Next steps</h2>
          <ul>
            <li>Implement Supabase authentication and DB migrations</li>
            <li>Create posts API and frontend components</li>
            <li>Add image uploads and realtime updates</li>
          </ul>
        </section>

        <div className="mt-6">
          <Link href="/api/hello"><a>API test: /api/hello</a></Link>
        </div>
      </main>
    </>
  )
}
