import { FunctionComponent } from 'react'
import { RiDashboardLine, RiVipCrown2Fill } from 'react-icons/ri'
import { AiOutlineAppstore } from 'react-icons/ai'
import { MdOutlineCollectionsBookmark, MdRssFeed, MdOutlineContactMail } from 'react-icons/md'
import Link from 'next/link'
import ROUTES from '../../routes'

interface IProps {
    isUser?: boolean
    layoutView?: 'icon' | 'title-icon'
}

const SideNavBarComponent: FunctionComponent<IProps> = (props) => {

    const titleIconView = props.layoutView === 'title-icon';
    return (
        <div className='bg-app-gray2 w-full min-h-full overflow-y-auto'>
            <div className='flex flex-col justify-between h-full'>
                <div className='mb-20'>
                    <div className={`${titleIconView ? 'px-10' : 'px-6'} py-10  flex items-center justify-center`}>
                        <div className={`${titleIconView ? 'h-20 w-20' : 'h-14 w-14'} bg-white`} style={{ backgroundImage: "url('')" }}>
                        </div>
                    </div>
                    {
                        !props.isUser &&
                        <div className='rounded-2xl bg-app-gray3 text-center mx-5 my-5 py-5 px-5'>
                            <div className='text-xl font-bold'>
                                Unlock VIP
                            </div>
                            <div className='text-xs mt-3 text-gray-300'>
                                Get all the feature Universe Club has to offer by holding 1 NFT from our collection.
                            </div>
                            <div className='mt-3'>
                                <button className='rounded-full bg-yellow-300 px-5 py-2 text-gray-800 font-semibold text-sm'>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    }
                </div>
                <div className='mb-20'>
                    <Link href={`${ROUTES.DASHBOARD}`}>
                        <div className={`${titleIconView ? 'pl-10' : 'justify-center'} text-lg font-semibold flex flex-row py-4 cursor-pointer hover:bg-app-gray3`}>
                            <RiDashboardLine size={28} />
                            {titleIconView && <span className='ml-5'>Dashboard</span>}
                        </div>
                    </Link>
                    <Link href={`${ROUTES.NFT_FEED}`} >
                        <div className={`${titleIconView ? 'pl-10' : 'justify-center'} text-lg font-semibold flex flex-row py-4 cursor-pointer text-gray-500`}>
                            <MdRssFeed size={28} />
                            {
                                titleIconView &&
                                <>
                                    <span className='mx-5'>NFT Feed</span>
                                    <RiVipCrown2Fill size={18} />
                                </>
                            }
                        </div>
                    </Link>
                    <div className={`${titleIconView ? 'pl-10' : 'justify-center'} text-lg font-semibold flex flex-row py-4 cursor-pointer text-gray-500`}>
                        <MdOutlineCollectionsBookmark size={28} />
                        {
                            titleIconView &&
                            <>
                                <span className='mx-5'>Collections</span>
                                <RiVipCrown2Fill size={18} />
                            </>
                        }
                    </div>
                    <div className={`${titleIconView ? 'pl-10' : 'justify-center'} text-lg font-semibold flex flex-row py-4 cursor-pointer hover:bg-app-gray3`}>
                        <AiOutlineAppstore size={28} />
                        {
                            titleIconView &&
                            <span className='ml-5'>App Store</span>
                        }
                    </div>
                    <div className={`${titleIconView ? 'pl-10' : 'justify-center'} text-lg font-semibold flex flex-row py-4 cursor-pointer hover:bg-app-gray3`}>
                        <MdOutlineContactMail size={28} />
                        {
                            titleIconView &&
                            <span className='ml-5'>About Us</span>
                        }
                    </div>
                </div>
                {
                    !props.isUser &&
                    <div className='mb-10'>
                        <div className='relative mr-5 mb-5 rounded-r-3xl pl-10 py-6 bg-app-gray3'>
                            <div className='uppercase text-xl font-bold'>
                                Learn Web3
                            </div>
                            <div className='mt-1 text-gray-300 text-xs  text-ellipsis h-8'>
                                Resources to get you up to speed.
                            </div>
                            <div className='bg-yellow-300 absolute left-0 top-0 bottom-0 w-2 h-1/2 my-auto rounded-r-3xl'>
                            </div>
                        </div>
                        <div className='relative mr-5 mb-5 rounded-r-3xl pl-10 py-6 bg-app-gray3'>
                            <div className='uppercase text-xl font-bold'>
                                Shake the box
                            </div>
                            <div className='mt-1 text-gray-300 text-xs  text-ellipsis h-8'>
                                Claim your rewards, level up,<span className='inline-block'>and check leaderboard.</span>
                            </div>
                            <div className='bg-yellow-300 absolute left-0 top-0 bottom-0 w-2 h-1/2 my-auto rounded-r-3xl'>
                            </div>
                        </div>
                        <div className='relative mr-5 mb-5 rounded-r-3xl pl-10 py-6 bg-app-gray3'>
                            <div className='uppercase text-xl font-bold'>
                                Join our cohort
                            </div>
                            <div className='mt-1 text-gray-300 text-xs  text-ellipsis h-8'>
                                Be a featured partner.
                            </div>
                            <div className='bg-yellow-300 absolute left-0 top-0 bottom-0 w-2 h-1/2 my-auto rounded-r-3xl'>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div className='flex flex-row w-full px-5 text-gray-300 justify-between text-xs'>
                                <a href='#' className='hover:text-gray-50'>Smart Contract</a>
                                <a href='#' className='hover:text-gray-50'>Privacy Policy</a>
                                <a href='#' className='hover:text-gray-50'>Terms</a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default SideNavBarComponent