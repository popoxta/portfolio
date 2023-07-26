export default function TitleCard() {
    return (
        <main className={'h-screen flex justify-start items-center relative p-6 sm:pl-16 sm:p-0 '}>
            <section className={'-mt-32'}>
                <h1 className={'flex flex-row'} style={{fontSize: '1.46rem'}}>
                    <span className={'flex flex-col mr-3'}>
                        <span>Hi,</span>
                        <span>I'm</span>
                    </span>
                    <span className={'text-7xl uppercase font-bold'}>Lari</span>
                </h1>
                <p>definition (noun)</p>
                <p>Software developer and lover of simple things like bunnies and stars</p>
            </section>
            <button className={'absolute bottom-16 left-0 right-0 mx-auto'}>Launch</button>
        </main>
    )
}