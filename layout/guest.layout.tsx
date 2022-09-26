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
                <div className='max-w-xs h-full overflow-y-auto' style={{ maxWidth: '320px' }}>
                    <SideNavBarComponent layoutView={'title-icon'} isUser={false} />
                </div>
                <div className='w-full h-full overflow-y-auto'>
                    <TopNavBarComponent />
                    <div className='px-10 py-6'>
                        {props.children}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default GuestLayout