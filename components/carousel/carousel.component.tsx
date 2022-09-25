// import { Image } from "@chakra-ui/react";
import { FunctionComponent } from "react";
// import { Carousel } from "react-responsive-carousel";

interface IProps {

}

const slides = [
    {
        image:
            "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        image:
            "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80"
    },
    {
        image:
            "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
    },
    {
        image:
            "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
    },
    {
        image:
            "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
    }
];


const CarouselComponent: FunctionComponent<IProps> = (props) => {
    return (
        <div className="h-full rounded-2xl" style={{ backgroundImage: `url('${slides[3].image}')`, backgroundRepeat: 'no-repeate', backgroundSize: 'cover' }}>
        </div>
        // <Carousel infiniteLoop axis={'horizontal'} autoFocus={true} showStatus={false} showThumbs={false} centerMode={true}>
        //     {slides.map((slide, idx) => {
        //         return <Image key={idx} src={slide.image} height="auto" width="100%" alt="" />;
        //     })}
        // </Carousel>
    )
}

export default CarouselComponent