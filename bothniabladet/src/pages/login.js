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

                <div class="parent" className="flex flex-row justify-start">

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
                    <div className="p-6">
                        <Link href="login">
                            Logga in
                        </Link>
                    </div>

                    <div className="p-6">
                        <Link href="register">
                            Registrera
                        </Link>
                    </div>

                </div>

                <div className="flex flex-wrap flex-row justify-around items-center">

                    <div className="inputEmailPassword py-6 flex flex-col">

                        <label> Email </label>
                        <input type="text" name="email">
                        </input>


                        <label> Lösenord </label>
                        <input type="text" name="password">
                        </input>

                        <div className="flex justify-center py-6">

                            <h1 className="loginButton">
                                <Link href="firstPage">
                                    Logga in
                                </Link>

                            </h1>
                        </div>
                    </div>


                    <div className="flex h-fit">
                        <Image  class="basis-1/8 shrink"
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src={require('/src/Bothniabladet.png')}
                                alt="Bothniabladet logga"
                                priority
                        />
                    </div>
            </div>

            {/*<div class={"inputEmailPassword"}>*/}
            {/*    <h1>*/}
            {/*        Email*/}
            {/*    </h1>*/}
            {/*    <h1>*/}
            {/*        Lösenord*/}
            {/*    </h1>*/}

            {/*</div>*/}

            {/*<div className="flex justify-center">*/}

            {/*    <h1 class="loginButton">*/}
            {/*        <Link href="firstPage" >*/}
            {/*            Logga in*/}
            {/*        </Link>*/}

            {/*    </h1>*/}
            {/*</div>*/}
        </main>
    )
}

function LoginForm(){
    return(
        <div Class="loginbox">

        </div>
    )
}

