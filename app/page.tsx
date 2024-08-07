import Image from "next/image";
import Link from "next/link";

// Images
import Logo from "@/public/images/logo.png";
import Wheat_Field from "../public/images/Wheat_Field.jpg";
import maize_flour from "../public/images/amac_maize_flour.png";
import vegetable_oil from "../public/images/amac_vegetable_oil.png";
import spaghetti from "../public/images/amac_spaghetti.png";
import rice from "../public/images/amac_rice.png";
import about_us from "../public/images/about_us.png";
export default function Home() {
  const products = [
    {
      name: "Amac Unga",
      description:
        "Amac sifted maize meal fortified with vitamins and minerals",
      image: maize_flour,
    },
    {
      name: "Amac Rice",
      description: "Amac long grain milled rice (Pishori & Basmati)",
      image: rice,
    },
    {
      name: "Amac Spaghetti",
      description: "Amac Semolina Pasta with high dietary fibers",
      image: spaghetti,
    },
    {
      name: "Amac Oil",
      description: "Amac Vegetable cooking oil with low saturated fats",
      image: vegetable_oil,
    },
  ];

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <section className="relative w-full h-[600px] flex items-center justify-center">
        <Image
          src={Wheat_Field}
          alt="AMAC Hero"
          fill
          className="brightness-50 object-cover"
        />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Africa Mega Agricultural Corporation (AMAC)
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Delivering effective, tailored farming solutions to drive
            agricultural productivity and success across Africa.
          </p>
          <Link
            href="#about"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 inline-block"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      <section id="products" className="py-16 w-full ">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">
            Our Products
          </h2>
          <p className="text-center  mb-12">
            Experience the best in quality food products that bring people
            together
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="dark:border dark:border-gray-700 p-6  rounded-lg shadow-md hover:shadow-lg"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-4 object-cover h-72"
                />
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {product.name}
                </h3>
                <p className="">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="container w-full mx-auto px-4 py-16 ">
        <h1 className="text-4xl font-bold text-green-800 mb-8">About AMAC</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-4">
              Africa Mega Agricultural Corporation (AMAC) is not just an equipment
              lender; we are a catalyst for agricultural prosperity in Kenya.
            </p>
            <p className="text-lg mb-4">
              By providing flexible and accessible farm lending solutions,
              coupled with market facilitation, input provision, and storage
              services, we empower small and medium-sized farmers to optimize
              operations, boost productivity, and thrive in a dynamic market.
              With a commitment to sustainable practices and community building,
              AMAC is cultivating a resilient future for Kenyan agriculture.
            </p>
            <p className="text-lg">
              Our mission is to empower African farmers and contribute to the
              continent&apos;s food security through sustainable and efficient
              agricultural practices.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src={about_us}
              alt="AMAC team in the field"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      <span className="h-0.5 bg-gray-300 w-full my-6" />
      <section id="contacts" className="container mx-auto px-4 py-16 ">
        {/* <h1 className="text-4xl font-bold text-green-800 mb-8">Contact Us</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center mx-44">
          <div>
          <Image src={Logo} alt="AMAC Logo" width={150} height={60} />
          <p className="text-base mb-4">
              Africa Mega Agricultural Corporation (AMAC) is not just an equipment
              lender; we are a catalyst for agricultural prosperity in Kenya.
            </p>

          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Quick Links
            </h2>
            <ul className="block items-center ">
            <li className="mb-2">
              <a href="#products" className=" hover:text-green-600">
                Products
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" className=" hover:text-green-600">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#contacts" className=" hover:text-green-600">
                Search
              </a>
            </li>
            <li className="mb-4">
              <a href="#contacts" className=" hover:text-green-600">
                Contact us
              </a>
            </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Our Location
            </h2>
            <p className="mb-2">Westport Industrial Centre</p>
            <p className="mb-2">Nairobi, Kenya</p>
            <p className="mb-2">Phone: +254 702 907 748</p>
            <p className="mb-4">Email: info@amac.co.ke</p>

          </div>
        </div>
      </section>
    </main>
  );
}
