import AuthorImage from '../../assets/images/author.jpg'
import Image from 'next/image'
import PrimaryButton from '../primaryButton/primaryButton'


export default function DiscoverItems({ collections }) {

    return (
        <div className="max-w-full flex items-center justify-center h-full w-full mb-24">


            {/* Items Cards */}

            <div className="relative md:max-w-[82.5rem] mx-auto lg:px-4">
                <div

                    className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
                >
                    {collections.map((item, i) => (
                        <div
                            key={i}

                            className=" min-w-[100px] max-w-[310px] md:max-w-[310px] md:min-w-[200px] px-2 min-h-[450px] flex-shrink-0 "
                        >
                            <div className="relative bg-[#282b2f] border-[1px] border-[#404245] rounded-2xl overflow-visible shadow-md transition-all duration-300 hover:shadow-purple-500/20 pt-[4rem] px-8 flex items-center justify-start flex-col h-full w-full">
                                <div className="relative w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="object-cover rounded-2xl autoShow"
                                        width={250}
                                    />
                                    <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                        <Image src={AuthorImage} alt='Author Image' width={50} height={50} className='rounded-full autoShow' />
                                    </div>
                                </div>
                                <div className="relative w-full pt-6 flex flex-col justify-between min-h-[190px] rounded-b-2xl">
                                    <h3 className="text-lg font-semibold autoShow ">{item.title}</h3>
                                    <div className="w-full mx-auto border-t-[1.5px] border-[#404245] autoShow"></div>
                                    <div className="text-sm text-gray-300 mb-3 autoShow">
                                        <div className="flex justify-between">
                                            <span className="font-semibold autoShow">Current Bid:</span>
                                            <span className="text-[15px] font-bold text-white autoShow">{item.items}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-semibold autoShow">Ends In:</span>
                                            <span className="text-[15px] font-bold text-white autoShow">{item.category}</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-center w-fit absolute -bottom-6 left-1/2 -translate-x-1/2 z-50 autoShow">
                                    <PrimaryButton w-full={false} >View Details</PrimaryButton>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

}



