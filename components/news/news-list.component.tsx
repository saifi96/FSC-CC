import { Image, Stack } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import Link from "next/link";
import { FunctionComponent } from "react";
import ROUTES from "../../routes";

interface IProps {
    title?: string
    filterOptions?: string[]
}
const NewsListComponent: FunctionComponent<IProps> = (props) => {
    const news = new Array(5).fill(1);
    return (
        <div className="bg-app-gray3 px-10 py-5 rounded-2xl">
            <div className="flex flex-row justify-between items-center mb-10">
                <div className="text-lg font-semibold">
                    {props.title}
                </div>
                <div>
                    <Select variant='outline' placeholder='Latest' size={'sm'} borderRadius={'full'}>
                        <option value={1}>{'Older'}</option>
                    </Select>
                </div>
            </div>
            <div>
                <Stack direction={'column'} spacing={5}>
                    {
                        news.map((_item, idx) => {
                            return (
                                <Link key={idx} href={ROUTES.NEWS_ARTICLE + idx}>
                                    <Stack key={idx} direction='row' alignItems={'center'} spacing={8} cursor={'pointer'} height={'full'}>
                                        <div className="w-1/2 h-full">
                                            <Image src="/images/3.jpeg" borderRadius={'lg'} alt='' fit={'cover'}></Image>
                                        </div>
                                        <div>
                                            <div className="text-xs text-yellow-300 mb-2">07/22/2022</div>
                                            <div className="text-sm font-bold">
                                                NFTs Turn Out to Be a Great Channel of Revenue for Businesses, Ask Nike
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Call it FOMO or just a passing fad, but businesses like Nike, Dolce & Gabbana, Tiffany, ZGucci, and Adidas are reaping millions from NFTs. Z
                                            </div>
                                        </div>
                                    </Stack>
                                </Link>
                            )
                        })
                    }
                </Stack>
            </div>
        </div>
    )
}

export default NewsListComponent;