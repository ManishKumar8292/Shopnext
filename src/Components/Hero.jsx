import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      id: 1,
      title: "Discover the Latest Collection",
      description:
        "Shop premium fashion, electronics, and accessories at unbeatable prices.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600",
      button: "Shop Now",
    },
    {
      id: 2,
      title: "Summer Sale Up To 70% OFF",
      description:
        "Grab the hottest deals before they're gone. Limited time offers!",
      image:
        "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?w=1600",
      button: "Explore Deals",
    },
    {
      id: 3,
      title: "New Arrivals Every Week",
      description:
        "Fresh styles, trending gadgets, and exclusive collections await you.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600",
      button: "View Collection",
    },
    {
      id: 4,
      title: "Smart Electronics Collection",
      description:
        "Upgrade your lifestyle with the latest smartphones, laptops, and gadgets.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600",
      button: "Shop Electronics",
    },
    {
      id: 5,
      title: "Fashion That Defines You",
      description:
        "Discover trending outfits designed to match your unique style.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600",
      button: "Shop Fashion",
    },
    {
      id: 6,
      title: "Home Essentials Sale",
      description:
        "Transform your home with premium furniture and modern décor.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600",
      button: "Explore Home",
    },
    {
      id: 7,
      title: "Sports & Fitness Gear",
      description:
        "Stay active with premium fitness equipment and sports accessories.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600",
      button: "Start Shopping",
    },
    {
      id: 8,
      title: "Beauty & Personal Care",
      description:
        "Find skincare, makeup, and beauty products from top brands.",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600",
      button: "Shop Beauty",
    },
    {
      id: 9,
      title: "Gaming Zone",
      description:
        "Experience next-level gaming with consoles, accessories, and more.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600",
      button: "Play Now",
    },
    {
      id: 10,
      title: "Exclusive Deals Every Day",
      description:
        "Don't miss today's best offers on thousands of products across every category.",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600",
      button: "Grab Offers",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden ">
      {slides.map((slide, idx) => {
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${current == idx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto max-w-7xl">
                <div className="max-w-2xl text-white">
                  <p className="mb-3 font-bold text-xl text-indigo-400 uppercase tracking-[4px]">
                    {slide.title}
                  </p>

                  <h1 className="mb-6 text-2xl font-bold leading-tight lg:text-4xl">
                    {slide.description}
                  </h1>

                  <Link
                    to="/products"
                    className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold transition hover:bg-indigo-700 hover:scale-105"
                  >
                    {slide.button}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 w-3 rounded-full transition ${current == idx ? "w-10 bg-white" : "w-3 bg-white/50"}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
