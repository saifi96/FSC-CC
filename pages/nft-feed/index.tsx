import { Stack, StackDivider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import EtherScanCopyCardComponent from "../../components/cards/etherscan-copy-card.component";
import OfficialLinksComponent from "../../components/cards/official-links-card.component";
import PriceChartComponent from "../../components/charts/price-chart.component";
import NewsLetterComponent from "../../components/news-letter/news-letter.component";
import NewsListComponent from "../../components/news/news-list.component";
import NFTProfileCardComponent from "../../components/nft-feed/nft-profile.component";
import NFTFeedStatsComponent from "../../components/nft-feed/stats.component";
import UserLayout from "../../layout/user.layout";


function NFTFeedPage({ pageProps }: AppProps) {
  return (
    <UserLayout>
      <div className="w-full h-full">
        <div className="mb-5">
          <Stack direction={'row'} spacing={10} flexWrap={'wrap'}>
            <div className="flex-1">
              <NFTProfileCardComponent />
            </div>
            <div className="flex-1">
              <Stack direction={'row'}>
                <div className="flex-1">
                  <div className="mb-3">
                    <EtherScanCopyCardComponent />
                  </div>
                  <OfficialLinksComponent />
                </div>
                <div className="flex-1 text-sm">
                  <Stack direction={'column'} spacing={8} divider={<StackDivider borderColor='gray.600' />} flexWrap={'wrap'} borderRadius={'2xl'} px={5} py={5} backgroundColor={'app-gray3'}>
                    <div>
                      20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸
                    </div>
                    <div>
                      20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸
                    </div>
                  </Stack>
                </div>
              </Stack>
            </div>
          </Stack>
        </div>
        <div className="mb-5">
          <NFTFeedStatsComponent />
        </div>
        <div className="mb-5">
          <Stack spacing={5} direction={'row'}>
            <div className="flex-1">
              <div className="mb-5">
                <PriceChartComponent title={'Floor Price'} />
              </div>
              <NewsLetterComponent />
            </div>
            <div className="flex-1">
              <NewsListComponent title="Related News" />
            </div>
          </Stack>
        </div>
      </div>
    </UserLayout>
  );
}

export default NFTFeedPage;
