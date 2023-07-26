export default function TitleCard() {
    return (
        <main className={'h-screen p-5 sm:p-12'}>
            <div className={'h-full flex justify-start items-center relative border-2 p-4 sm:pl-24 sm:p-0'}>
            <section className={'-mt-20'}>
                <h1 className={'flex flex-row'} style={{fontSize: '1.46rem'}}>
                    <span className={'flex flex-col mr-3'}>
                        <span>Hi,</span>
                        <span>I'm</span>
                    </span>
                    <span className={'text-7xl uppercase font-bold'}>Lari</span>
                </h1>
                <p className={'text-xs mt-2 mb-1 italic tracking-wider'}>definition (noun)</p>
                <p className={'text-sm'} style={{maxWidth: '22rem'}}>Software developer and lover of simple things like bunnies and stars</p>
            </section>
            <button className={'absolute bottom-12 left-0 right-0 mx-auto text-sm'}>Launch</button>
            </div>
        </main>
    )
}