import { FunctionComponent } from 'react'
import { FaGoogleWallet, FaArtstation } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

interface IProps {
    isUser?: boolean
}

const TopNavBarComponent: FunctionComponent<IProps> = (props) => {

    return (
        <div className='bg-app-gray2 h-20 sticky top-0 z-10'>
            <div className='flex flex-row flex-wrap justify-between items-center h-full w-full px-10 py-5'>
                <div>
                    <div className='inline-flex flex-wrap items-center'>
                        <div className='text-xl  uppercase font-semibold'>
                            Good Morning!
                        </div>
                        <div className='mx-3 text-gray-500'>
                            |
                        </div>
                        <div className='text-xs flex items-center'>
                            Augest 10, 2022
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`inline-flex flex-wrap items-center px-3 ${props.isUser ? 'py-1 rounded-2xl bg-app-gray3' : ''}`}>
                        <div className='text-gray-600 font-extrabold text-sm'>
                            Gas Fee
                        </div>
                        <div className='text-gray-500 text-xs mx-2'>
                            Avg
                        </div>
                        <div className='text-green-500 text-sm'>
                            9 GWEI
                        </div>
                    </div>
                    <div className={`inline-flex flex-wrap items-center px-3 mx-3 ${props.isUser ? 'py-1 rounded-2xl bg-app-gray3' : ''}`}>
                        <div className='text-gray-600 font-extrabold text-sm'>
                            Prices
                        </div>
                        <div className='text-gray-500 mx-2'>
                            <FaArtstation />
                        </div>
                        <div className='text-sky-500 text-sm'>
                            $1600
                        </div>
                    </div>
                    <div className={`inline-flex flex-wrap items-center px-3 ${props.isUser ? 'py-1 rounded-2xl bg-app-gray3' : ''}`}>
                        <div className='text-gray-600 font-extrabold text-sm'>
                            Prices
                        </div>
                        <div className='text-gray-500 mx-2'>
                            <RiMoneyDollarCircleFill />
                        </div>
                        <div className='text-violet-500 text-sm'>
                            $35
                        </div>
                    </div>
                </div>
                <div>
                    {
                        props.isUser
                            ?
                            <button className='rounded-full font-semibold border border-white text-sm px-5 py-1 inline-flex items-center'>
                                <FaGoogleWallet />&nbsp;
                                View Wallet
                            </button>
                            :
                            <button className='rounded-full font-semibold border border-white text-sm px-5 py-1 inline-flex items-center'>
                                <FaGoogleWallet />&nbsp;
                                Connect Wallet
                            </button>
                    }

                </div>
            </div>
        </div>
    )
}

export default TopNavBarComponent