import { FunctionComponent, ReactElement } from "react";

interface IProps {
    children: ReactElement
}
const AppLayout: FunctionComponent<IProps> = (props) => {
    return (
        <div className="h-full w-full bg-app-gray">
            {props.children}
        </div>
    )
}

export default AppLayout