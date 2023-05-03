import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

        <div>
          <header className="flex justify-center">

            <div class="flex flex-wrap items-center justify-around">

              <Link href="/">
                <Image
                    class="basis-1/8 shrink"
                    src={require('/src/Bothniabladet.png')}
                    alt="Bothniabladet logga"
                    width={150}
                    height={100}
                    priority
                />
              </Link>

              <Image
                  class="basis-1/2 shrink"
                  src={require('/src/BothniabladetHeader.png')}
                  alt="Bothniabladet logga"
                  width={700}
                  height = {"auto"}
                  priority
              />

              <h1
                  // className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
              className="loginButton basis-1/8"
              >

                <Link href="login" >
                  Logga in
                </Link>

              </h1>

            </div>
          </header>
        </div>

      <div className="flex flex-col items-center pt-6">
        <h1 className="text-2xl">
          Hitta dina bilder hos oss!
        </h1>

        <p>
          Vi har bilder för alla ändamål.
        </p>
      </div>

      <div className="flex justify-center py-6">

        <Image
          src={require('/src/pexels-monicore-141876.jpg')}
          alt="Bothniabladet logga"
          width={495}
          height={500}
          priority
        />
      </div>

      <div className="flex flex-col items-center pt-6">

        <h1 className="text-2xl">
          Tipsa oss!
        </h1>

        <p className="py-6">
          Har du tagit någon bra bild?
          Skicka in den till oss genom att trycka på knappen nedan och skapa ett tips.
        </p>

        <Link className="loginButton" href={"tip"}>
          Tipsa Bothniabladet
        </Link>
      </div>

      <div className="py-24">

      </div>

      {/*<div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">*/}
      {/*  <a*/}
      {/*    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"*/}
      {/*    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <h2 className={`mb-3 text-2xl font-semibold`}>*/}
      {/*      Docs{' '}*/}
      {/*      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
      {/*        -&gt;*/}
      {/*      </span>*/}
      {/*    </h2>*/}
      {/*    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
      {/*      Find in-depth information about Next.js features and API.*/}
      {/*    </p>*/}
      {/*  </a>*/}

      {/*  <a*/}
      {/*    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"*/}
      {/*    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <h2 className={`mb-3 text-2xl font-semibold`}>*/}
      {/*      Learn{' '}*/}
      {/*      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
      {/*        -&gt;*/}
      {/*      </span>*/}
      {/*    </h2>*/}
      {/*    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
      {/*      Learn about Next.js in an interactive course with&nbsp;quizzes!*/}
      {/*    </p>*/}
      {/*  </a>*/}

      {/*  <a*/}
      {/*    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"*/}
      {/*    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <h2 className={`mb-3 text-2xl font-semibold`}>*/}
      {/*      Templates{' '}*/}
      {/*      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
      {/*        -&gt;*/}
      {/*      </span>*/}
      {/*    </h2>*/}
      {/*    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
      {/*      Discover and deploy boilerplate example Next.js&nbsp;projects.*/}
      {/*    </p>*/}
      {/*  </a>*/}

      {/*  <a*/}
      {/*    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"*/}
      {/*    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <h2 className={`mb-3 text-2xl font-semibold`}>*/}
      {/*      Deploy{' '}*/}
      {/*      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
      {/*        -&gt;*/}
      {/*      </span>*/}
      {/*    </h2>*/}
      {/*    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
      {/*      Instantly deploy your Next.js site to a shareable URL with Vercel.*/}
      {/*    </p>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </main>
  )
}