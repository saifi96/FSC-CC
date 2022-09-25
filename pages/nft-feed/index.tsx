import { AppProps } from "next/app";
import SideNavBarComponent from "../../components/navbars/side-nav-bar.component";
import TopNavBarComponent from "../../components/navbars/top-nav-bar.component";
import NFTFeedStatsComponent from "../../components/nft-feed/stats.component";
import AppLayout from "../../layout/app.layout";


function NFTFeedPage({ pageProps }: AppProps) {
  return (
    <AppLayout>
      <div className="flex flex-row h-full w-full">
        <div className="h-full max-w-xs">
          <SideNavBarComponent layoutView={'icon'} isUser={true} />
        </div>
        <div className="w-full">
          <TopNavBarComponent isUser={true} />
          <div className='px-16 py-10'>
            <div className="mb-10">
              <NFTFeedStatsComponent />
            </div>
            <div className='flex flex-row flex-wrap'>

            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default NFTFeedPage;
