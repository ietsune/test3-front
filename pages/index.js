import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../components/Header.js';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (

    <div className="font-sans mx-auto">
      <Header />

      <div className="flex items-center justify-center ">
        <Image
          src="/images/yasai.jpg"
          alt="Scenic garden view"
          //className="w-full h-80 object-cover"
          width={1000}
          height={760}
        />
      </div>
      <div className="p-6">

        <h3 className="text-lg font-semibold mb-4">現在の畑情報</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <i className="fas fa-thermometer-half text-xl mb-2"></i>
            <p className="text-xl">23°C</p>
            <p className="text-gray-500">気温</p>
          </div>
          <div className="border rounded-lg p-4">
            <i className="fas fa-tint text-xl mb-2"></i>
            <p className="text-xl">51%</p>
            <p className="text-gray-500">土壌湿度</p>
          </div>
        </div>
        <p className="text-base">
          The High-tech Garden is an urban garden that uses advanced technology
          to monitor and maintain optimal growing conditions. Our mission is to
          provide a space for the community to learn about sustainable
          agriculture practices.
        </p>
      </div>
      <div className="fixed bottom-6 right-6 flex items-center">
        <Link href="/directory/water">
          <button className="bg-[#66d6fcf9] p-6 rounded-full">

            <i className="fas fa-tint text-lg text-white"></i>

          </button>
        </Link>
      </div>
      <style jsx global>{`
        .stroke-black {
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
        h1 {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        }
      `}</style>



    </div>
  );
}
