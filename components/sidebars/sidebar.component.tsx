import { FunctionComponent } from 'react'
 
interface IProps {

}

const SidebarComponent: FunctionComponent<IProps> = (props) => {
    return (
        <div className='bg-app-gray2 h-full w-full'>
            <div className='flex flex-col'>
                <div className='px-5 py-5'>
                    <div className='h-9 w-9' style={{backgroundImage: "url('')"}}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarComponent