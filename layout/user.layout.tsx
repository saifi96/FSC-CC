import { FunctionComponent, ReactElement } from "react";
import SideNavBarComponent from "../components/navbars/side-nav-bar.component";
import TopNavBarComponent from "../components/navbars/top-nav-bar.component";
import AppLayout from "./app.layout";

interface IProps {
    children: ReactElement
}
const UserLayout: FunctionComponent<IProps> = (props) => {
    return (
        <AppLayout>
            <div className="flex flex-row h-full w-full">
                <div className="h-full max-w-xs overflow-y-auto">
                    <SideNavBarComponent layoutView={'icon'} isUser={true} />
                </div>
                <div className="w-full h-full overflow-y-auto">
                    <TopNavBarComponent isUser={true} />
                    <div className='px-10 py-6 h-full'>
                        {props.children}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default UserLayout