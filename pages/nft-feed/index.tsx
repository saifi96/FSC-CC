import { AppProps } from "next/app";
import SideNavBarComponent from "../../components/navbars/side-nav-bar.component";
import TopNavBarComponent from "../../components/navbars/top-nav-bar.component";
import AppLayout from "../../layout/app.layout";


function NFTFeedPage({ pageProps }: AppProps) {
  return (
    <AppLayout>
      <div className="flex flex-row h-full w-full">
        <div className="h-full">
          <SideNavBarComponent layoutView={'icon'} isUser={true} />
        </div>
        <div className="w-full">
          <TopNavBarComponent isUser={true} />
        </div>
      </div>
    </AppLayout>
  );
}

export default NFTFeedPage;
