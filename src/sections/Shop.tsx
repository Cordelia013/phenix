import React from 'react'
import Image from 'next/image'

function Shop() {
  const products = [
    {
      id: 1,
      name: 'Kpop Demon Hunters (Original Soundtrack) (CD)',
      price: '€22.97',
      image: '/image 26.jpg',
      category: 'Merch',
      description: 'T-shirt noir avec illustration anime et logo HUNTR/X'
    },
    {
      id: 2,
      name: 'Demon Hunter Hoodie',
      price: '€49.99',
      image: '/image 26-1.jpg',
      category: 'Apparel',
      description: 'Hoodie édition limitée'
    },
    {
      id: 3,
      name: 'SAJA BOYS Album Bundle',
      price: '€24.99',
      image: '/image 26-2.jpg',
      category: 'Music',
      description: 'Album complet avec bonus tracks'
    },
    {
      id: 4,
      name: 'Guardian Keychain Set',
      price: '€14.99',
      image: '/image 26-3.jpg',
      category: 'Accessories',
      description: 'Set de porte-clés collector'
    },
    {
      id: 5,
      name: 'Limited Edition Poster',
      price: '€19.99',
      image: '/image 26-4.jpg',
      category: 'Accessories',
      description: 'Poster exclusif 60x90cm'
    }
  ]

  return (
    <>
      {/* Hunter Shop Section */}
      <section id="shop" className="py-20 bg-kpop-beige">
        <div className="container mx-auto px-8">
        <header className="flex justify-center px-4 pt-10 mb-[82px]">
        <h1 className="font-nevan font-normal text-center bg-gradient-to-b from-[#38548E] to-[#537DC3] bg-clip-text text-transparent"
            style={{ fontSize: '150px', lineHeight: '80%', letterSpacing: '0%' }}>
          HUNTER <br /> SHOP
        </h1>
      </header>

          <div className="flex gap-[10px] overflow-x-auto pb-4 scrollbar-hide">
            {products.map((product) => (
              <article key={product.id} className="product-card  rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-[300px] h-[369px]">
                <div className="relative h-[250px] w-full ">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.description}`}
                    fill
                    className="object-contain"
                    sizes="300px"
                  />
                </div>
                <div className="p-4 h-[119px] flex flex-col justify-between ">
                                     <div>
                     <h3 className="product-title" style={{
                       fontFamily: 'Greater Theory',
                       fontWeight: 600,
                       fontStyle: 'normal',
                       fontSize: '16px',
                       lineHeight: '100%',
                       letterSpacing: '-2%',
                       verticalAlign: 'middle',
                       color: 'hsba(0, 0%, 6%, 0.7)'
                     }}>{product.name}</h3>
                   
                   </div>
                  <div className="flex items-center justify-between">
                    <span className="product-price text-xl font-bold text-blue-600">{product.price}</span>
                 
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    
    </>
  );
}

export default Shop