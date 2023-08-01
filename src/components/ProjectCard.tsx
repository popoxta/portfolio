export default function ProjectCard() {
    return (
        <div className={'relative w-9/10 h-96 mx-auto'}>
            <div
                className={'absolute opacity-30 right-0 bg-lari-light-blue w-9/10 h-full -z-10'}>
            </div>
            <div className={'flex h-full gap-10 place-items-center'}>
                <img
                    className={'h-80 w-96 object-cover shrink-0'}
                    src="https://images.unsplash.com/photo-1690228835779-8482c60093bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt={''}
                />
                <div className={'flex h-full py-10 flex-col gap-5 justify-between'} >
                    <h3 className={'text-3xl font-bold'}>Project</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et minima non odit? Ab eos ex
                        inventore necessitatibus, nemo nisi!
                    </p>
                </div>
            </div>
        </div>
    )
}