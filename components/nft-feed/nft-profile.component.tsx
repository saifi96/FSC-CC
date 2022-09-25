import { Button, Stack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { HiBadgeCheck } from 'react-icons/hi';

interface IProps {

}
const NFTProfileCardComponent: FunctionComponent<IProps> = (props) => {
    return (
        <Stack direction={'row'}>
            <div className="w-1/3 mr-3">
                <div className="w-full h-full rounded-xl" style={{ backgroundImage: `url('/images/5.jpeg')`, backgroundSize: 'cover', minHeight: 125 }}>
                </div>
            </div>
            <div className="pt-5 pb-5">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <Button borderRadius={'2xl'} size={'xs'} color={'green.500'} backgroundColor={'app-gray3'}>
                            <GoPrimitiveDot /> Live
                        </Button>
                    </div>
                    <div className="text-xs text-gray-500 uppercase ml-5">
                        Deployed 3 months ago
                    </div>
                </div>
                <div className="mt-1">
                    <div className="uppercase text-1xl font-semibold flex">
                        CLONE X - X TAKASHI MURAKAMI&nbsp;<span className="text-yellow-300"><HiBadgeCheck size={24} /></span>
                    </div>
                    <div className="text-xs mt-2">
                        By <span className="text-yellow-300 font-lightbold font-semibold">RTFKTCLONEXTM</span>
                    </div>
                    <div>
                        <Button bgColor={'yellow.300'} mt={3} size={'xs'} borderRadius={'full'} color={'gray.800'} px={5} py={4}>Follow Update</Button>
                    </div>

                </div>
            </div>
        </Stack>
    )
}

export default NFTProfileCardComponent;