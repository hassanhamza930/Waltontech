function BluePage(props: any) {

    const { children } = props;

    return (
        <div className="bg-blue text-tan h-screen w-full pt-16">
            <div id="no_scroll" className="fixed w-full h-full flex flex-col justify-center items-center gap-4 px-[10%] py-10 ">
                {children}
            </div>
        </div>
    );
}

export default BluePage;