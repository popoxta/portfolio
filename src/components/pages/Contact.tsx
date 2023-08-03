export default function Contact() {
    return (
        <section className={'min-h-screen relative flex flex-col justify-center place-items-center'}>
            <div className={'max-w-5xl '}>
                <h2 className={'text-5xl font-bold text-lari-blue mb-5'}>Let's chat</h2>
                <p className={'text-lari-blue'}>Want to connect, have a chat about software, my projects, coffee or
                    simply the weather?</p>
                <p className={'text-lari-blue'}>Send me a message and let's talk!</p>
                <div className={'flex gap-10'}>
                    <form className={'mt-10'}>
                        <div className={'flex gap-5'}>
                            <label htmlFor={"name"} className={'flex flex-col text-lari-gray text-sm font-bold'}>Name
                                <input className={'bg-lari-lighter-blue p-1.5 rounded-md border-2 border-lari-light-blue'}
                                       type={"text"} id={"name"} name={"name"}/>
                            </label>

                            <label htmlFor={"email"} className={'flex flex-col text-lari-gray text-sm font-bold'}>Email
                                <input className={'bg-lari-lighter-blue p-1.5 rounded-md border-2 border-lari-light-blue'}
                                       type={"text"} id={"email"} name={"email"}/>
                            </label>
                        </div>
                        <label htmlFor={"message"} className={'mt-5 flex flex-col text-lari-gray text-sm font-bold'}>
                            Message
                        <textarea className={'bg-lari-lighter-blue p-1.5 rounded-md border-2 border-lari-light-blue'}
                                  name={"message"} id={"message"} rows={10}></textarea>
                        </label>
                        <button type={'submit'}>Submit</button>
                    </form>
                    <address>
                        <div>
                            <a href={''}>larissaruecker7@gmail.com</a>
                        </div>
                        <div>
                            <a href={''}>popoxta</a>
                        </div>
                        <div>
                            <a href={''}>linkedIn</a>
                        </div>
                    </address>
                </div>
            </div>
        </section>
    )
}