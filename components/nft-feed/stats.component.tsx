import { Stack, StackDivider } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FaEthereum } from "react-icons/fa";

const NFTFeedStatsComponent: FunctionComponent<any> = (props) => {
    return (
        <div className="bg-app-gray3 px-10 py-5 rounded-2xl">
            <Stack direction={'row'}   divider={<StackDivider borderColor='gray.600'  />} spacing={10}>
                <div className="text-center">
                    <div className="uppercase text-xs">
                        Floor Price
                    </div>
                    <div className="text-3xl font-semibold mt-1 flex justify-center items-center">
                        <FaEthereum size={20} /><span>11.59</span>
                    </div>
                </div>
                <div className="text-center">
                    <div className="uppercase text-xs">
                        Items
                    </div>
                    <div className="text-3xl font-semibold mt-1 flex justify-center items-center">
                        <FaEthereum size={20} /><span>11.59K</span>
                    </div>
                </div>
                <div className="text-center">
                    <div className="uppercase text-xs">
                        Revealed
                    </div>
                    <div className="text-3xl font-semibold mt-1 flex justify-center items-center">
                        <FaEthereum size={20} /><span>100%</span>
                    </div>
                </div>
                <div className="text-center">
                    <div className="uppercase text-xs">
                        Owners
                    </div>
                    <div className="text-3xl font-semibold mt-1 flex justify-center items-center">
                        <FaEthereum size={20} /><span>9.5K</span>
                    </div>
                </div>
                <div className="text-center">
                    <div className="uppercase text-xs">
                        Total Volume
                    </div>
                    <div className="text-3xl font-semibold mt-1 flex justify-center items-center">
                        <FaEthereum size={20} /><span>218.7K</span>
                    </div>
                </div>
                <div className="text-center">
                    <div className="uppercase text-xs">
                        Royalties
                    </div>
                    <div className="text-3xl font-semibold mt-1 flex justify-center items-center">
                        <FaEthereum size={20} /><span>5%</span>
                    </div>
                </div>
            </Stack>
        </div>
    )
}

export default NFTFeedStatsComponent;