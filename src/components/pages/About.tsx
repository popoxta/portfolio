export default function About() {
    return (
        <section className={'h-screen flex justify-center place-items-center'}>

            <div className={'flex max-w-7xl gap-10'}>
                <img className={'w-64 h-1/2'}
                    src="https://images.unsplash.com/photo-1690228835779-8482c60093bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt=""/>

                <article>
                    <h2 className={'text-5xl'}>It's nice to meet you.</h2>
                    <p>
                        My name’s Lari, and I am a creative artist and software developer based in Aotearoa New Zealand.
                    </p>
                    <p>
                        I enjoy building memorable, fun and meaningful projects, and have a strong focus on making all
                        things
                        simple, as they should be.
                    </p>
                    <p>
                        My day-to day sees a wide range of technology, however my main tools of trade are Typescript,
                        React,
                        Tailwind, Node and MongoDB.
                    </p>
                    <p>
                        When not programming, you may find me listening to 80’s rock, making a good family Raclette and
                        taking
                        anyone I can convince to go on a 5 hour walk. Probably longer.
                    </p>
                    <p>
                        Want to know more or grab a coffee? Feel free to
                        <a href="#contact">
                            get in touch.
                        </a>
                    </p>
                </article>
            </div>
        </section>
    )
}