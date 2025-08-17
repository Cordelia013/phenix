import React from 'react'
import Image from 'next/image'

function Shop() {
  const products = [
    {
      id: 1,
      name: 'HUNTR/X Limited Edition Tee',
      price: '$29.99',
      image: '/Vector.jpg',
      category: 'Apparel'
    },
    {
      id: 2,
      name: 'Demon Hunter Hoodie',
      price: '$49.99',
      image: '/Vector-1.jpg',
      category: 'Apparel'
    },
    {
      id: 3,
      name: 'SAJA BOYS Album Bundle',
      price: '$24.99',
      image: '/Vector-2.jpg',
      category: 'Music'
    },
    {
      id: 4,
      name: 'Guardian Keychain Set',
      price: '$14.99',
      image: '/Vector-3.jpg',
      category: 'Accessories'
    }
  ]

  return (
    <>
      {/* Hunter Shop Section */}
      <section id="shop" className="py-20 bg-kpop-beige">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-bold text-kpop-blue mb-4">
              HUNTER SHOP
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Gear up with exclusive merchandise from your favorite demon hunters. 
              Show your support and join the fight against darkness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-[250px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-kpop-blue">{product.price}</span>
                    <button className="bg-kpop-blue text-white px-4 py-2 rounded-full hover:bg-kpop-purple transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Hero Section */}
      <section className="py-20 bg-kpop-dark text-white">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-8">
              <span className="block">K-POP</span>
              <span className="block">DEMON</span>
              <span className="block">HUNTERS</span>
            </h2>
            
            <div className="relative h-[400px] rounded-3xl mb-8 overflow-hidden">
              <Image
                src="/image 8.jpg"
                alt="K-Pop Demon Hunters Final"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              The battle between light and darkness continues. Will you join the hunters 
              and help preserve the harmony between worlds? The fate of music itself 
              hangs in the balance.
            </p>

            <div className="mt-8 flex justify-center gap-6">
              <button className="bg-kpop-blue text-white px-8 py-3 rounded-full hover:bg-kpop-purple transition-colors text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-kpop-dark transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop