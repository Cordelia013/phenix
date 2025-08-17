import React from 'react'
import Image from 'next/image'

const teams2Data = [
  {
    name: "Baby",
    image: "/image 32.jpg"
  },
  {
    name: "Mystery", 
    image: "/image 31.jpg"
  },
  {
    name: "Jinu",
    image: "/image 30.jpg"
  },
  {
    name: "Romance",
    image: "/image 29.jpg"
  },
  {
    name: "Abby",
    image: "/image 33.jpg"
  }
]

function Teams2() {
  return (
    <>
      <div className="w-screen">
        <section
          id="teams2"
          className="min-h-screen w-full relative"
          style={{ backgroundColor: "#00040C" }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/deco2.svg"
              alt="décoration"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="py-20 relative z-10">
            <div className="flex justify-center gap-5 flex-nowrap overflow-x-auto">
              {teams2Data.map((member, index) => (
                <div key={index} className="text-center flex-shrink-0">
                  <div className="relative h-[500px] w-[15rem] mb-4 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain rounded-[25px]"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="min-h-screen w-full flex items-center justify-center" style={{ marginTop: "-2rem" }}>
          <div className="w-full">
            <Image
              src="/image 24.jpg"
              alt="image 24"
              width={1920}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default Teams2