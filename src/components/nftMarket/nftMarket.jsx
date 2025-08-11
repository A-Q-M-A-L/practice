import NftCard from "./subComponent/nftCard.jsx";
import classes from './nft.module.css'
import icon1 from '../../assets/icons/icon-1.png'
import icon2 from '../../assets/icons/icon-2.png'
import icon3 from '../../assets/icons/icon-3.png'

import HR from "../hr/hr.jsx";
import PrimaryButton from "../primaryButton/primaryButton.jsx";
import HighlightText from "../highlightText/highlightText.jsx";



const nftCardData = [
    { title: 'Set Up Your Wallet', desc: 'NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry.', icon: icon1 },
    { title: 'Sell Your NFT & Make Profit', desc: 'If you would like to support our TemplateMo website, please visit our contact page to make a PayPal contribution. Thank you.', icon: icon2 },
    { title: 'Add Your Digital NFT', desc: 'There are 5 different HTML pages included in this NFT website template. You can edit or modify any section on any page as you required.', icon: icon3 }
]

const text ='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque obcaecati sed, sequi impedit tenetur harum. Minima quo qui repellendus. Labore eos similique aspernatur.'

export default function NftMarket() {
    return (
        <div className={`${classes.nftbg} p-16 max-w-full w-full`}>
            <div className='flex flex-col items-start justify-center space-y-6 max-w-6xl w-full mx-auto'>
                <div className='flex flex-col md:flex-row gap-4 items-center justify-between w-full'>
                    <div className='flex flex-col items-start space-y-2'>
                        <HR color={'white'} />
                        {/* <div className='w-10 h-[2px] bg-white  rounded-full'></div> */}
                        <h3 className='text-2xl font-semibold text-white autoShow'>Create Your NFT & Put It On The Market.</h3>
                    </div>
                    <div className="autoShow">
                        <PrimaryButton>Create Your NFT Now</PrimaryButton>
                    </div>
                </div>

                {/* nft card */}
                <div className="flex items-start justify-between w-full relative h-full">

                    {/* Syling line 1 */}
                    <div className="hidden absolute top-0 left-[31%] lg:flex flex-col items-center justify-center h-full space-y-4">
                        <div className="text-sm font-semibold text-white autoShow">1</div>
                        <div className="h-full w-[0.5px] bg-[#d8d4d48e] autoShow"></div>
                    </div>
                    {/* Syling line 2 */}
                    <div className="hidden absolute top-0 left-[67%] lg:flex flex-col items-center justify-center h-full space-y-4">
                        <div className="text-sm font-semibold text-white autoShow">2</div>
                        <div className="h-full w-[0.5px] bg-[#d8d4d48e] autoShow"></div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-3 text-white mt-10">
                        {nftCardData.map((cardData, index) => {
                            return (
                                <NftCard key={index} title={cardData.title} desc={<HighlightText text={text} highlights={['aspernatur', 'eos',]} color="text-[#3CF]" />} icon={cardData.icon} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}