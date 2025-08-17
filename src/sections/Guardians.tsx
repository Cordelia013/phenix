import React from "react";
import Image from "next/image";

function Guardians() {
  const characters = [
    { name: "ZOEY", role: "Leader", image: "/image 41.jpg" },
    { name: "PUMI", role: "Vocalist", image: "/image 51.jpg" },
    { name: "MIRA", role: "Dancer", image: "/image 52.jpg" },
  ];

  return (
    <>
      {/* Guardians of the Beat Section */}
      <section id="guardians" className="min-h-screen w-screen">
        <div className="flex flex-col justify-center items-center px-16">
          <div className="grid md:grid-cols-5 gap-12 items-start w-full">
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden">
              <Image
                src="/photo2.png"
                alt="Guardians of the Beat"
                width={600}
                height={700}
                className="object-cover object-top"
              />
            </div>

            <div className="md:col-span-3 flex flex-col w-full h-full">
              <div className="w-full">
                <h2 className="text-4xl font-bold font-greater-theory text-black text-right mb-8">
                  GUARDIANS OF THE
                  <br />
                  BEAT
                </h2>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex-1 flex items-end">
                  <p className="text-gray-700 leading-relaxed text-right text-sm ml-auto w-[45%]">
                    Forged in the neon heart of the city, they channel light
                    through every note.Their music is a rallying cry — bright,
                    defiant, and unstoppable.Each performance is a shield
                    against the shadows, every chorus a spark that ignites hope.
                  </p>
                </div>

                <div className="flex-1 flex items-end">
                  <p className="text-gray-700 leading-relaxed text-left text-sm mr-auto w-[45%]">
                    United by a vow to protect the balance, HUNTR/X blend
                    razor-sharp choreography with anthems that hit like
                    lightning.When they take the stage, the air crackles with
                    energy — and the darkness hesitates to move closer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 ">
        <div className="container mx-auto px-8">
          <div className="flex justify-center gap-5">
            {characters.map((character) => (
              <div key={character.name} className="text-center">
                <div className="relative h-[600px] w-[15rem] mb-4 overflow-hidden">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-contain rounded-[25px]"
                  />
                </div>
                <h3 className="text-2xl font-bold ">{character.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Echoes from the Shadows Section */}
      <section id="guardians" className="min-h-screen w-screen">
        <div className="flex flex-col justify-center items-center px-16">
          <div className="grid md:grid-cols-5 gap-12 items-start w-full">
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden">
              <Image
                src="/image 5.jpg"
                alt="Guardians of the Beat"
                width={600}
                height={700}
                className="object-cover object-top"
              />
            </div>

            <div className="md:col-span-3 flex flex-col w-full h-full">
              <div className="w-full">
                <h2 className="text-4xl font-bold font-greater-theory text-black text-right mb-8">
                Echoes from the
                  <br />
                  Shadows
                </h2>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex-1 flex items-end">
                  <p className="text-gray-700 leading-relaxed text-right text-sm ml-auto w-[45%]">
                    Forged in the neon heart of the city, they channel light
                    through every note.Their music is a rallying cry — bright,
                    defiant, and unstoppable.Each performance is a shield
                    against the shadows, every chorus a spark that ignites hope.
                  </p>
                </div>

                <div className="flex-1 flex items-end">
                  <p className="text-gray-700 leading-relaxed text-left text-sm mr-auto w-[45%]">
                    United by a vow to protect the balance, HUNTR/X blend
                    razor-sharp choreography with anthems that hit like
                    lightning.When they take the stage, the air crackles with
                    energy — and the darkness hesitates to move closer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="echoes" className="py-20 bg-red-500">
        <div className="container mx-auto px-8">
          <h2 className="text-section-title font-bold text-kpop-blue text-center mb-4">
            ECHOES FROM THE SHADOWS
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Behind every demon hunter is a story of sacrifice, courage, and the
            power of music to transcend dimensions. Follow their journey as they
            navigate the treacherous world of fame while battling supernatural
            forces.
          </p>

          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="/image 30.jpg"
              alt="Echoes from the Shadows Group"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-5 gap-4 mt-8">
            {[
              { name: "BABY", image: "/image 31.jpg" },
              { name: "MYSTERY", image: "/image 32.jpg" },
              { name: "GISU", image: "/image 33.jpg" },
              { name: "ROMANCE", image: "/image 41.jpg" },
              { name: "ABBEY", image: "/image 46.jpg" },
            ].map((character) => (
              <div key={character.name} className="text-center">
                <div className="relative h-[150px] rounded-xl mb-2 overflow-hidden">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-bold text-gray-700">
                  {character.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Guardians;

