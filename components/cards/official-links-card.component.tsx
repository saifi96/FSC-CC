import { Stack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FaDiscord, FaDotCircle, FaGlobe, FaTwitter } from "react-icons/fa";
import { GoPrimitiveDot } from 'react-icons/go';

interface IProps {

}
const OfficialLinksComponent: FunctionComponent<IProps> = (props) => {
    return (
        <div className="bg-app-gray3 px-5 py-5 rounded-2xl">
            <div className="flex flex-col justify-between ">
                <div className="flex text-sky-400">
                    <GoPrimitiveDot />
                    <span className="ml-1 uppercase text-xs font-bold">Official Links</span>
                </div>
                <div className="mt-3 text-2xl">
                    <Stack direction={'row'} spacing={5}>
                        <FaGlobe className={`cursor-pointer hover:text-yellow-300`} />
                        <FaTwitter className={`cursor-pointer hover:text-yellow-300`} />
                        <FaDiscord className={`cursor-pointer hover:text-yellow-300`} />
                        <FaDotCircle className={`cursor-pointer hover:text-yellow-300`} />
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default OfficialLinksComponent;