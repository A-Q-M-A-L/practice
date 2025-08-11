import HR from "@/components/hr/hr";

import Image from "next/image";
import image from '../../../assets/images/robot.jpg'
import authorImage from '../../../assets/images/author.jpg'


export default function ItemsPreview({ }) {


    const dummyData = {
        title: "Dolores Haze Westworld Eye",
        image,
        author: {
            name: "Kataleya Smithee",
            handle: "kataleey",
            avatar: authorImage,
        },

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        bid: {
            eth: "0.06",
            usd: "$8055.35",
        },
        owner: {

            name: "Alan Smithee",
            handle: "asmithee",
        },

        endsIn: "3D 05H 20M 58S",
        endDateLabel: "(January 22nd, 2021)"
    }


    return (
        <div className="max-w-7xl mx-auto lg:p-16">
            <div className="text-center mb-8 md:mb-20" >
                <HR color={'#7453fc'} center />
                <h2 className=" text-3xl md:text-4xl font-semibold">
                    Apply For <span className="text-[#7453fc]">Your Item</span> Here.
                </h2>
            </div>


            <section className="w-full bg-transparent text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                        {/* Image */}
                        <div className="lg:w-[55%]">
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20">
                                <Image
                                    src={dummyData.image}
                                    alt={dummyData.title}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 55vw"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:w-[45%]">
                            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{dummyData.title}</h1>

                            {/* Author */}
                            <div className="mt-5 flex items-center gap-3">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/15">
                                    <Image src={dummyData.author.avatar} alt={dummyData.author.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium">{dummyData.author.name}</div>
                                    <div className="text-sm text-[#7453fc]">@{dummyData.author.handle}</div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="mt-5 max-w-prose text-sm text-white">
                                {dummyData.description}
                            </p>

                            {/* Meta grid */}
                            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                                {/* Current Bid */}
                                <div>
                                    <div className="text-sm uppercase tracking-wide text-white">Current Bid</div>
                                    <div className="mt-2 text-xl font-semibold text-[#8f77ff]">{dummyData.bid.eth} ETH</div>
                                    <div className="mt-1 text-sm text-white/50">({dummyData.bid.usd})</div>
                                </div>

                                {/* Owner */}
                                <div>
                                    <div className="text-sm uppercase tracking-wide text-white">Owner</div>
                                    <div className="mt-2 text-xl font-semibold text-[#7453fc]">{dummyData.owner.name}</div>
                                    <div className="mt-1 text-sm text-white/50">(@{dummyData.owner.handle})</div>
                                </div>

                                {/* Ends In */}
                                <div>
                                    <div className="text-sm uppercase tracking-wide text-white">Ends In</div>
                                    <div className="mt-2 text-xl font-semibold text-[#8f77ff]">{dummyData.endsIn}</div>
                                    <div className="mt-1 text-sm text-white/50">{dummyData.endDateLabel}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    )


}