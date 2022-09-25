import { Stack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FaRegCopy } from "react-icons/fa";
import { GoPrimitiveDot } from 'react-icons/go';

interface IProps {

}
const EtherScanCopyCardComponent: FunctionComponent<IProps> = (props) => {
    return (
        <div className="bg-app-gray3 px-5 py-5 rounded-2xl">
            <div className="flex flex-row justify-between">
                <div className="flex text-sky-400">
                    <GoPrimitiveDot />
                    <span className="ml-1 uppercase text-xs font-bold">Etherscan</span>
                </div>
                <div className="text-sm">
                    <FaRegCopy className="cursor-pointer" />
                </div>
            </div>
            <div className="mt-2 text-xs">
                0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b
            </div>
        </div>
    )
}

export default EtherScanCopyCardComponent;