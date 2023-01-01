import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>FinApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="w-screen">
        <div className="max-w-screen-2xl mx-auto min-h-screen">
          <section className="bg-gray-light h-min px-24 py-4 flex justify-between align-middle w-full">
            <p className='font-sans text-center'>DASHBOARD</p>
            <ul className="flex justify-around align-middle gap-4 text-sm">
              <li>Home</li>
              <li>Docs</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </section>

          <section className='flex'>
            <div className="flex flex-col gap-8 py-12 pl-6 w-1/5 border border-solid border-gray-dark">
              <span>DASHBOARD LOGO</span>
              <ul className='flex flex-col gap-4'>
                <li>Home</li>
                <li>Docs</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 py-14 pl-6 w-full border border-solid border-gray-dark">
              <span className='text-xl font-thin'>Hey, UserName!</span>
              <div className='flex flex-wrap gap-6 '>
                <div className='w-[43rem] h-[20rem] rounded-md bg-gray'></div>
                <div className='w-[21rem] h-[20rem] rounded-md bg-blue'></div>
                <div className='w-[21rem] h-[20rem] rounded-md bg-pink'></div>
                <div className='w-[21rem] h-[20rem] rounded-md bg-orange'></div>
                <div className='w-[21rem] h-[20rem] rounded-md bg-purple'></div>
                <div className='w-[21rem] h-[20rem] rounded-md bg-purple'></div>
                <div className='w-[43rem] h-[20rem] rounded-md bg-gray'></div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
