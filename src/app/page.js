"use client";
import { useEffect, useState } from "react";
import { FaBeer, FaCheck } from "react-icons/fa";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <main className="grid lg:grid-cols-3 gap-8 container mx-auto my-6">
      {data.map((d) => (
        <div className="shadow-xl p-8 border-t-4 rounded-md border-t-[#A14F8F] hover:scale-95 hover:shadow-2xl hover:border-4 border-[#A14F8F] duration-200 cursor-pointer">
          <div className="space-y-3">
            <h1 className="text-center text-2xl font-bold">
              <span>{d.name[0]} </span>
              <span className="text-[#FF6803]">{d.name[1]} </span>
              <span>{d.name[2]} </span>
            </h1>

            <p className="text-center text-sm">
              <span className="line-through">{d.price}</span>
              <span className="bg-[#85B4D7] py-1 px-2 mx-2 rounded-3xl text-white font-bold">
                save {d.discount}
              </span>
            </p>

            <p className="text-center text-4xl font-extrabold text-[#A14F8F] pt-4">
              <sup>$</sup>
              <span className="">{d.monthlyPrice}</span>
              <sub>mo</sub>
            </p>
          </div>
          <ul className="py-8">
            {d.features.map((feature) => (
              <li className="text-sm">
                <FaCheck className="inline text-green-600 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="bg-[#A14F8F] text-white hover:font-semibold px-4 py-2 rounded-lg mx-auto flex hover:bg-black hover:text-green-500 duration-300">
            Order Now
          </button>
        </div>
      ))}
    </main>
  );
}
