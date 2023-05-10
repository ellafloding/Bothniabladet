import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>

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

                <form action="http://localhost:3000/tip" method="post">

                <div className="flex flex-col pb-7">
                    <label> Beskrivning </label>
                    <input required type="text" class="form-control" name="beskrivning" className="px-20" id="descrTip">
                    </input>

                    <label> Sökord </label>
                    <input required type="text" class="form-control" name="keyword" id="keywordTip">
                    </input>

                </div>

                <div className="flex flex-col pt-7">

                    <label> Email </label>
                    <input required type="text" class="form-control" name="email" id="emailTip">
                    </input>

                    <label> Förnamn </label>
                    <input required type="text" class="form-control" name="firstname" id="firstnameTip">
                    </input>

                    <label> Efternamn </label>
                    <input required type="text" class="form-control" name="lastname" id="lastnameTip">
                    </input>

                </div>

                <div className="pt-6">
                <button className="loginButton" class="form-control" type="submit" >
                    Skicka tips
                </button>

                </div>
                </form>
            </div>

        </main>
    )
}

// async function createTip(descr, keyword, email, firstname, lastname){
//     const uri = "mongodb+srv://adamj:qKEyyVe6kdEQoaQd@dundercluster.m1isx5z.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//
//         // Make the appropriate DB calls
//         await createTip(client, {descr, keyword, email, firstName, lastName});
//
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }