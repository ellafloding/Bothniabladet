import Image from "next/image";
import {Inter} from "next/font/google";
import Link from "next/link";
//import { Formik, Field, Form } from 'formik';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <main
            // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >

            <div>
                <header className="flex justify-center">

                    <div className="flex flex-wrap items-center justify-around">

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
                            height={"auto"}
                            priority
                        />

                        <h1
                            // className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
                            className="loginButton basis-1/8"
                        >

                            <Link href="login">
                                Logga in
                            </Link>

                        </h1>

                    </div>
                </header>
            </div>

            <div className="flex flex-col items-center pt-7">
                <h1 className="text-2xl">
                    Tipsa Bothniabladet!
                </h1>

                <p>
                    Har du nyhetstips eller bilder? Skicka in din bild till oss!
                </p>
            </div>

            <div className="flex flex-col py-10 items-center">

                <h2 className="text-2xl pb-6">
                    Välj bild</h2>

                <input className="pb-6" type="file" name="myImage">
                </input>

                <div className="flex flex-col pb-7">
                    <label> Beskrivning </label>
                    <input type="text" name="beskrivning" className="px-20">
                    </input>

                    <label> Sökord </label>
                    <input type="text" name="keyword">
                    </input>

                </div>

                <div className="flex flex-col pt-7">

                    <label> Email </label>
                    <input type="text" name="email">
                    </input>

                    <label> Förnamn </label>
                    <input type="text" name="firstname">
                    </input>

                    <label> Efternamn </label>
                    <input type="text" name="lastname">
                    </input>

                </div>

                <div className="pt-6">
                <button className="loginButton" type="submit">
                    Skicka tips
                </button>

                </div>
            </div>

        </main>
    )
}