import HeroUI from "@/components/heroUi/heroUI"
import AuthorProfile from "./_components/Author"
import collectionImg from '../../assets/images/collection-img.jpg'
import DarkBGWrapper from "@/components/darkbgWrapper/darkbgWrapper"
import HR from "@/components/hr/hr"
import NftMarket from "@/components/nftMarket/nftMarket"
import DiscoverItems from "@/components/discoverItems/discoverItems"

const collectionsArray = [
    {
        title: 'Bored Ape Kennel Club',
        items: '324/324',
        category: 'Visual Art',
        image: collectionImg,

    },
    {
        title: 'Genesis Collective Statue',
        items: '380/394',
        category: 'Music Art',
        image: collectionImg,
    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,

    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,

    },


];

export default function Author() {
    return (
        <div className=" max-w-full w-full h-full flex flex-col items-center justify-center text-white" >
            {/* Hero Section */}
            <div className="relative flex items-center justify-center h-[60vh] w-full explore-bg">
                <HeroUI title={'Author Details'} desc={'View Details For Author'} pageName={'Author'} buttons />
            </div>

            <DarkBGWrapper>
                <AuthorProfile />

                <div className=" flex justify-start items-start space-y-1.5 flex-col my-12">
                    <HR color={'#7453fc'} center={false} />
                    <h2 className="text-2xl sm:text-3xl font-semibold autoShow">
                        Melanie Smith’s <span className="text-purple-500">Items</span>.
                    </h2>
                </div>


                {/* Discover Items Section */}
                <DiscoverItems collections={collectionsArray} isHeader title={'Melanie Smith’s'} />
            </DarkBGWrapper>



            <NftMarket />



        </div>
    )
} 
