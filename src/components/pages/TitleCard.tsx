export default function TitleCard() {
    return (
        <main className={'h-screen flex justify-start items-center pl-16 relative'}>
            <section className={'-mt-32'}>
                <h1>Hi, I'm <span>Lari</span></h1>
                <p>definition (noun)</p>
                <p>Software developer and lover of simple things like bunnies and stars</p>
            </section>
            <button className={'absolute bottom-16 left-1/2 right-1/2'}>Launch</button>
        </main>
    )
}