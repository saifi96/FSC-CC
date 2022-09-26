import { Avatar, Button, Image, Stack, StackDivider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoMdArrowBack } from 'react-icons/io';
import { MdEmail } from "react-icons/md";
import NewsListComponent from "../../../components/news/news-list.component";
import UserLayout from "../../../layout/user.layout";


function ArticlePage({ pageProps }: AppProps) {

  return (
    <UserLayout>
      <div className="w-full h-full">
        <Button variant={'link'} textDecoration={'none'}>
          <IoMdArrowBack />&nbsp;Back
        </Button>
        <div className="mt-5">
          <Stack direction={'row'} width={'full'} spacing={5}>
            <div className="w-9/12 xl:w-9/12">
              <div className="bg-app-gray2 px-10 py-10 rounded-2xl">
                <div className="flex justify-start mb-5">
                  <Image src="/images/2.jpeg" borderRadius={'2xl'} fit={'cover'} alt="" />
                </div>
                <div className="text-sm text-yellow-300 mb-2">07/22/2022</div>
                <div className="text-2xl font-bold mb-5">
                  NFTs Turn Out to Be a Great Channel of Revenue for Businesses, Ask Nike
                </div>
                <div className="mb-5">
                  <span className="inline-flex items-center rounded-full bg-app-gray3 px-3 py-2">
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size={'sm'} className='mr-2' /> &nbsp; Kate Stevens
                  </span>
                </div>
                <div className="mt-10 mb-10 text-sm">
                  <div className="pl-20">
                    <strong>Quick take:</strong>
                    <ul className="list-disc pl-4">
                      <li>NFTs are turning out to be a gem for fashion brands.</li>
                      <li>Leading brands have generated at least $1 million for a total of $260 million.</li>
                      <li>Nike tops the list with a whopping $185 million in revenue from NFT sales.</li>
                    </ul>
                  </div>
                </div>
                <div className="text-xl font-semibold">
                  <Stack direction={'row'} width={'full'} backgroundColor={'app-gray3'} borderRadius={'2xl'} spacing={20} px={6} py={6} divider={<StackDivider borderColor='gray.600' />} flexWrap={'wrap'}>
                    <div className="">
                      Share
                    </div>
                    <div className="flex justify-evently items-end">
                      <span className="mr-10">
                        <FaFacebook size={32} />
                      </span>
                      <span className="mr-10">
                        <FaTwitter size={32} />
                      </span>
                      <span className="mr-10">
                        <FaDiscord size={32} />
                      </span>
                      <span className="mr-10">
                        <MdEmail size={32} />
                      </span>
                    </div>
                  </Stack>
                </div>
              </div>
            </div>
            <div className="w-3/12 xl:w-3/12">
              <NewsListComponent title="Related News" hideThumbnail={true} hideFilterOptions={true} />
            </div>
          </Stack>
        </div>
      </div>
    </UserLayout>
  );
}

export default ArticlePage;
