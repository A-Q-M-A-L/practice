"use client";

import DarkBGWrapper from "@/components/darkbgWrapper/darkbgWrapper";
import HeroUI from "@/components/heroUi/heroUI";
import HR from "@/components/hr/hr";
import PrimaryButton from "@/components/primaryButton/primaryButton";
import ItemsPreview from "./itemPreview";


function Field({ label, children, className = "" }) {
    return (
        <div className={className}>
            <label className="mb-2 block text-sm font-semibold text-white/80">{label}</label>
            {children}
        </div>
    );
}


function Input({ placeholder }) {
    return (
        <input placeholder={`${placeholder}`}
            className={`w-full rounded-full !bg-[#282b2f] !border-[0.2px] border-[#404245] px-5 py-3 outline-none focus:border-[#7453fc] focus:ring-2 focus:ring-[#7453fc]/30 !placeholder:text-white`}
        />
    );
}


export default function Form() {
    return (

        <div id="contact" className="w-full h-full flex flex-col items-center justify-center text-white" >
            {/* Hero Section */}
            <div className="relative flex items-center justify-center h-[60vh] w-full explore-bg">
                < HeroUI title={'Liberty NFT Market'} desc={'Create Your NFT Now.'} pageName={'Create Yours'} buttons />
            </div>

            {/* form */}
            <DarkBGWrapper>

                <section className="w-full text-white py-12 md:py-16">
                    <div className="mx-auto max-w-6xl px-4 md:px-6">
                        {/* Heading */}
                        <div className="text-center mb-8 md:mb-20">
                            <HR color={'#7453fc'} center />
                            <h2 className="text-3xl md:text-4xl font-semibold">
                                Apply For <span className="text-[#7453fc]">Your Item</span> Here.
                            </h2>
                        </div>

                        {/* Card */}
                        <div className="rounded-3xl bg-[#37393c] border border-white/10 p-5 md:p-8 shadow-xl">
                            <form className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                                {/* Item Title */}
                                <Field label="Item Title" className="col-span-3 lg:col-span-1">
                                    <Input
                                        id="title"
                                        placeholder="Ex. Lyon King"
                                    />
                                </Field>

                                {/* Description For Item */}
                                <Field label="Description For Item" className="col-span-3 lg:col-span-1">
                                    <Input
                                        id="description"
                                        placeholder="Give us your idea"

                                    />
                                </Field>

                                {/* Your Username */}
                                <Field label="Your Username" className="col-span-3 lg:col-span-1">
                                    <Input
                                        id="username"
                                        placeholder="Ex. @alansmithee"

                                    />
                                </Field>

                                {/* Price Of Item */}
                                <Field label="Price Of Item" className="col-span-3 lg:col-span-2">
                                    <Input
                                        id="price"
                                        placeholder="Price depends on quality. Ex. 0.06 ETH"

                                    />
                                </Field>

                                {/* Royalties */}
                                <Field label="Royalties" className="col-span-3 lg:col-span-1">
                                    <Input
                                        id="royalties"
                                        placeholder="Common royalties 1-25%"
                                    />
                                </Field>

                                {/* Choose Your File File And Submmit Button */}
                                <div className="flex flex-col lg:flex-row items-center justify-between w-full col-span-3">
                                    <div className="w-full">
                                        <label htmlFor="files" className="mb-2 block text-sm font-semibold text-white/80">
                                            Your File
                                        </label>
                                        <input
                                            id="files"
                                            name="files"
                                            type="file"
                                            multiple
                                            className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-white file:hover:bg-white/20 file:cursor-pointer file:transition file:duration-150 file:ease-out !bg-transparent !border-none"
                                        />

                                    </div>

                                    {/* Submit */}
                                    <PrimaryButton widthFull>Submit Your Applying</PrimaryButton>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>


                <ItemsPreview />

            </DarkBGWrapper>
        </div>
    )



}