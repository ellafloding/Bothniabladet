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

                        <Link href="/">
                            <Image
                                class="basis-1/8 shrink"
                                src={require('/src/shoppingCart.png')}
                                alt="ShoppingCart"
                                width={100}
                                height={50}
                                priority
                            />
                        </Link>
                    </div>
                </header>
            </div>

            <div className="flex flex-col items-center pt-14">
                <Image
                    class="basis-1/2 shrink"
                    src={require('/src/sunset.jpg')}
                    alt="SunsetExamplePicture"
                    width={700}
                    height={300}
                    priority
                />

            <div className="flex flex-col items-center pt-10"></div>
                <h1 className="text-2xl">
                    Bildnamn
                </h1>
            </div>
            <Link href="/">
                <div className="flex flex-row justify-center items-center h-56">
                    <div className="grid gap-4 grid-cols-2">
                        <button className="loginButton" type="submit">
                            Tillbaka
                        </button>
                        <button className="loginButton" type="submit">
                            Lägg till i varukorg
                        </button>
                    </div>
                </div>
            </Link>
                    

        </main>
    )
}