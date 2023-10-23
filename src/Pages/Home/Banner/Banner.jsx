import bannerImg1 from "./../../../assets/images/banner/1.jpg"
import bannerImg2 from "./../../../assets/images/banner/2.jpg"
import bannerImg3 from "./../../../assets/images/banner/3.jpg"
import bannerImg4 from "./../../../assets/images/banner/4.jpg"
import bannerImg5 from "./../../../assets/images/banner/5.jpg"
import bannerImg6 from "./../../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px] rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bannerImg1} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21, 21,0)]">
                        <div className="text-white space-y-7 w-1/2 pl-12">
                            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur iure laboriosam odio atque.</p>
                            <div className="flex flex-wrap gap-3">
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle mr-5">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bannerImg2} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21, 21,0)]">
                        <div className="text-white space-y-7 w-1/2 pl-12">
                            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur iure laboriosam odio atque.</p>
                            <div className="flex flex-wrap gap-3">
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bannerImg3} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21, 21,0)]">
                        <div className="text-white space-y-7 w-1/2 pl-12">
                            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur iure laboriosam odio atque.</p>
                            <div className="flex flex-wrap gap-3">
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={bannerImg4} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21, 21,0)]">
                        <div className="text-white space-y-7 w-1/2 pl-12">
                            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur iure laboriosam odio atque.</p>
                            <div className="flex flex-wrap gap-3">
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={bannerImg5} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21, 21,0)]">
                        <div className="text-white space-y-7 w-1/2 pl-12">
                            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur iure laboriosam odio atque.</p>
                            <div className="flex flex-wrap gap-3">
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={bannerImg6} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21, 21,0)]">
                        <div className="text-white space-y-7 w-1/2 pl-12">
                            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur iure laboriosam odio atque.</p>
                            <div className="flex flex-wrap gap-3">
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle mr-5">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;