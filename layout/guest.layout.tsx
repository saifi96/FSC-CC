import { FunctionComponent, ReactElement } from "react";
import SideNavBarComponent from "../components/navbars/side-nav-bar.component";
import TopNavBarComponent from "../components/navbars/top-nav-bar.component";
import AppLayout from "./app.layout";

interface IProps {
    children: ReactElement
}
const GuestLayout: FunctionComponent<IProps> = (props) => {
    return (
        <AppLayout>
            <div className='flex flex-row h-full w-full'>
                <div className='max-w-xs'>
                    <SideNavBarComponent layoutView={'title-icon'} isUser={false} />
                </div>
                <div className='w-full'>
                    <TopNavBarComponent />
                    <div className='px-10 py-10'>
                        {props.children}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default GuestLayout