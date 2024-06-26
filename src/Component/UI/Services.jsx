import React from 'react'
import img from "../../assets/image 69.png";

function Services() {
    const data = [
        {
          img: "C:UsersdellDownloadsimage 69.png",
          title: "Office Cleaning",
          paragraph:
            "Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome site. on the top advertising a Courses available available business having.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ad litora torquent",
        },
        {
          img: "C:UsersdellDownloadsimage 69.png",
          title: "Toilet Cleaning",
          paragraph:
            "Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome site. on the top advertising a Courses available available business having.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ad litora torquent",
        },
        {
          img: "C:UsersdellDownloadsimage 69.png",
          title: "Laundary Cleaning",
          paragraph:
            "Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome site. on the top advertising a Courses available available business having.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ad litora torquent",
        },
      ];
      
  return (
    <div>
           <div className="secondpart w-10/12 mx-auto py-10 ">
          <div className=" grid mx-auto w-[420px] gap-3">
            <p className="text-4xl  font-bold text-center ">
              Keep your vision to our latest Services
            </p>
            <p className="text-lg font-serif text-center ">
              Keep your vision to our latest Services
            </p>
          </div>
        </div>

        <div className="    flex w-10/12 mx-auto mb-5 ">
          {data.map((val, i) => {
            return (
              <div className="border-2 my-3 border-gray-200 w-80 gap-4 grid p-3 mx-auto shadow-md rounded-3xl hover:bg-[#9580F1] hover:text-white hover:scale-110">
                <div className="rounded-full bg-gray-400 w-fit p-2">
                  <img className="w-10" src={img} alt="" />
                </div>
                <p className="text-xl font-bold ">{val.title}</p>
                <p className="line-clamp-3 text-md">{val.paragraph}</p>
              </div>
            );
          })}
        </div>
     </div>
  )
}

export default Services