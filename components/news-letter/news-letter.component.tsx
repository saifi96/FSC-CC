import { Button, Input } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface IProps {

}
const NewsLetterComponent: FunctionComponent<IProps> = (props) => {
    return (
        <div className="bg-app-gray3 px-6 py-16 rounded-2xl">
            <div className="flex flex-col justify-center items-center mt-10 mb-10 text-center">
                <div className="text-2xl font-semibold mb-5">
                    Something is cooking, stay tuned!
                </div>
                <div className="mb-5 text-gray-500 text-sm">
                    You can subscribe to our newsletter to be<br /> the first one to know about our latest updates
                </div>
                <div className="flex">
                    <Input placeholder='Enter your email' size='md' borderRadius={'full'} className='mr-2' />
                    <Button bgColor={'yellow.300'} size={'md'} borderRadius={'full'} color={'gray.800'} px={10}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterComponent