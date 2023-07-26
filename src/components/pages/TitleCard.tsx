export default function TitleCard() {
    return (
        <main className={'h-screen p-5 sm:p-12 bg-lari-blue'}>
            <div className={'h-full flex justify-start items-center relative border-2 p-4 sm:pl-24 sm:p-0 overflow-hidden'}>
            <section className={'-mt-20'}>
                <h1 className={'flex flex-row sm:text-mid'}>
                    <span className={'flex flex-col mr-3 text-lari-light-blue'}>
                        <span>Hi,</span>
                        <span>I'm</span>
                    </span>
                    <span className={'uppercase font-bold text-white sm:text-7xl text-5xl'}>Lari</span>
                </h1>
                <p className={'text-xs mt-2 mb-1 italic tracking-wider text-lari-light-blue'}>definition (noun)</p>
                <p className={'text-sm text-lari-light-blue'} style={{maxWidth: '22rem'}}>Software developer and lover of simple things like bunnies and stars</p>
            </section>
                <div className={'w-px bg-white absolute left-0 right-0 mx-auto bottom-14 h-12 sm:bottom-20 sm:h-16 '}></div>
            <button className={'absolute left-0 right-0 mx-auto text-sm text-white sm:bottom-11 bottom-5'}>Launch</button>
            </div>
        </main>
    )
}