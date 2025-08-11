import PrimaryButton from "../primaryButton/primaryButton";

export default function HeroUI({ title, desc, pageName, buttons = false }) {
    return (

        <div className="flex flex-col space-y-3.5 items-center justify-center max-w-4xl pt-16">

            <p className="text-[16px] font-semibold text-center">{title}</p>
            <h3 className="text-5xl font-bold uppercase tracking-wide text-center">{desc}</h3>
            <p className="text-sm"> <span className="text-[#8a75da]">Home</span> &gt; {pageName} </p>

           { buttons && <div className="flex items-center justify-center space-x-5 w-full mt-5">
                <PrimaryButton widthFull={false}>Explore Our Items</PrimaryButton>
                <PrimaryButton widthFull={false}>Create your NFT</PrimaryButton>
            </div>}
        </div>
    )
}