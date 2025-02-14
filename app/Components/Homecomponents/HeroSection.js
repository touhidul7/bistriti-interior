import React from 'react'

export default function HeroSection() {
    return (
        <section
            className="relative bg-black bg-cover bg-center mt-10 max-h-screen lg:h-screen flex items-end"
            style={{
                backgroundImage: `url('../header4.jpg')`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
            }}
        >
            <div className="relative text-start text-white">
              {/*   <h1 className="text-[18px] lg:text-2xl md:text-2xl bg-white w-[200px] lg:w-[440px] text-justify lg:ps-20 px-5 lg:pe-4 pt-10 lg:pt-[104px] text-black border-r-[10px] border-[#750000] pb-24 lg:pb-20">
                    
                </h1> */}
                <h1 className="text-5xl pt-14 md:text-9xl font-bold w-[240px] lg:w-[540px] border-r-[10px]  border-[#750000] ps-5 lg:ps-20 bg-black ">
                    Design
                </h1>
                <h1 className="text-5xl md:text-9xl font-bold w-[290px] lg:w-[600px] lg:ps-20 border-r-[10px]  border-[#750000] ps-5  bg-black">
                    Beyond
                </h1>
                <h1 className="text-5xl md:text-9xl ps-5 lg:ps-20 font-bold w-[355px] lg:w-[1035px] pb-5 lg:pb-24  border-r-[10px] border-[#750000] bg-black">
                    Boundaries
                    <span className="ml-4 lg:ml-9 item-center">
                        <button className="group flex mt-5 lg:inline relative lg:min-h-[65px] min-h-[50px] lg:w-48 w-28 overflow-hidden border-2 border-white hover:border-[#750000]  transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#750000] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#750000] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full md:text-2xl text-lg">
                            <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#750000] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#750000] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                            <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white text-[#750000]">
                                VISIT US
                            </span>
                        </button>
                    </span>
                </h1>
            </div>
        </section>
    )
}
