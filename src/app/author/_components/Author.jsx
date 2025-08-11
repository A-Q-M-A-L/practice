"use client";

import Image from "next/image";
import { Heart, Hand, DollarSign } from "lucide-react";
import AuthorImage from "../../../assets/images/single-author.jpg";
import PrimaryButton from "@/components/primaryButton/primaryButton";


function Metric({ icon, label, value }) {
    return (
        <div className="flex items-center gap-3">
            <span className="grid place-items-center rounded-full bg-white/0 autoShow">
                {icon}
            </span>
            <div className="leading-none">
                <div className="text-lg font-semibold text-[#9e82ff] autoShow">{value}</div>
                <div className="text-xs text-white/70 autoShow">{label}</div>
            </div>
        </div>
    );
}



export default function Author({
    name = "Melanie Smith",
    handle = "melanie32",
    avatar = AuthorImage,
    stats = { likes: 1238, hands: 1238, sales: 1238, followers: 559 },
}) {
    return (
        <section className="w-full text-white">
            <div className="mx-auto  px-4 lg:px-6 py-8">
                <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {/* Left: Avatar + Name */}
                    <div className="flex items-center gap-5">
                        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-white/15 autoShow">
                            <Image src={avatar} alt={name} fill className="object-cover" sizes="112px" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold leading-tight autoShow">{name}</h2>
                            <p className="text-[#7453fc] autoShow">@{handle}</p>
                        </div>
                    </div>

                    {/* Right: Stats Card */}
                    <div className="w-full lg:w-auto">
                        <div className="w-full rounded-3xl border border-white/10 bg-[#282b2f] p-5 lg:p-6 shadow-xl">
                            <div className="flex flex-col items-stretch gap-5 lg:flex-row lg:items-center lg:gap-10">
                                <Metric icon={<Heart className="h-5 w-5 text-[#7453fc]" />} label="Likes" value={stats.likes} />
                                <Metric icon={<Hand className="h-5 w-5 text-[#7453fc]" />} label="Likes" value={stats.hands} />
                                <Metric icon={<DollarSign className="h-5 w-5 text-[#7453fc]" />} label="Likes" value={stats.sales} />
                            </div>

                            <div className="mt-5 flex flex-col items-center gap-12 lg:mt-6 lg:flex-row lg:justify-between ">
                                <p className="text-white/80 autoShow"><strong>{stats.followers}</strong> Followers</p>
                                <PrimaryButton className="autoShow rounded-full bg-white text-[#7453fc] px-6 py-2 font-medium hover:bg-white/90 transition">
                                    Follow @{handle}
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}