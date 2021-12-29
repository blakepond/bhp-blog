import React, {  useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-[#37123c] py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold custom-font  text-5xl text-[#37123C] ">
              Mountain Life
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle custom-font text-2xl text-[#EDF2F4] ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
