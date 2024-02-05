import  './SectionTitle.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const SectionTitle = ({title, text}) => {
    return (
        <div data-aos="zoom-in" className='titleWrap'>
            <h2 className="text-2xl md:text-4xl text-[#F87015] font-bold"> {title}</h2>
            <p className='mt-3 text-xl '> {text} </p>
        </div>
    );
};

export default SectionTitle;