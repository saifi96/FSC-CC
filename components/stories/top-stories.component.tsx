import { Stack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { SiAdidas, SiCivo, SiFmod, SiAzurefunctions } from 'react-icons/si';

interface IProps {

}

const TopStories: FunctionComponent<IProps> = (props) => {
    return (
        <div className="bg-app-gray2 rounded-2xl px-7 pt-7 pb-5">
            <div className="text-xl text-white font-semibold mb-10">
                Today&apos;s Top Stories
            </div>
            <Stack direction={'row'}>
                <Stack direction={'row'} paddingRight='10'>
                    <div className="w-12">
                        <div className="relative">
                            <div className="bg-yellow-300 h-8 w-8 text-lg text-gray-900 font-bold rounded-full text-center flex justify-center items-center">
                                1
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-lg font-bold text-yellow-300">
                            The Metaverse of Things
                        </div>
                        <div className="text-sm text-gray-400">
                            The Metaverse of Things
                            This startup is using microchips to turn physical objects into NFTs
                        </div>
                        <div className="mt-5">
                            <SiFmod size={28} />
                        </div>
                    </div>
                </Stack>
                <Stack direction={'row'} paddingRight='10'>
                    <div className="relative">
                        <div className="bg-yellow-300 h-8 w-8 text-lg text-gray-900 font-bold rounded-full text-center flex justify-center items-center">
                            2
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="text-lg font-bold text-yellow-300">
                            The Metaverse of Things
                        </div>
                        <div className="text-sm text-gray-400">
                            The Metaverse of Things
                            This startup is using microchips to turn physical objects into NFTs
                        </div>
                        <div className="mt-5">
                            <SiCivo size={28} />
                        </div>
                    </div>
                </Stack>
                <Stack direction={'row'} paddingRight='10'>
                    <div className="relative">
                        <div className="bg-yellow-300 h-8 w-8 text-lg text-gray-900 font-bold rounded-full text-center flex justify-center items-center">
                            3
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="text-lg font-bold text-yellow-300">
                            The Metaverse of Things
                        </div>
                        <div className="text-sm text-gray-400">
                            The Metaverse of Things
                            This startup is using microchips to turn physical objects into NFTs
                        </div>
                        <div className="mt-5">
                            <SiAdidas size={28} />
                        </div>
                    </div>
                </Stack>
                <Stack direction={'row'} paddingRight='10'>
                    <div className="relative">
                        <div className="bg-yellow-300 h-8 w-8 text-lg text-gray-900 font-bold rounded-full text-center flex justify-center items-center">
                            4
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="text-lg font-bold text-yellow-300">
                            The Metaverse of Things
                        </div>
                        <div className="text-sm text-gray-400">
                            The Metaverse of Things
                            This startup is using microchips to turn physical objects into NFTs
                        </div>
                        <div className="mt-5">
                            <SiAzurefunctions size={28} />
                        </div>
                    </div>
                </Stack>
            </Stack>
        </div>
    )
}

export default TopStories