import Image from 'next/image';
import React from 'react';

export default function ProjectDisplay({ filteredProjects, selectedSubcategory }) {
  return (
    <div className="display mt-10">
      {filteredProjects.map((category, index) => (
        <div key={index} className="project mb-10">
          <h2 className="text-xl font-bold text-white">{category.category}</h2>
          <p className="text-gray-200">{category.content}</p>
          {category.image?(
                <Image
                width={100}
                height={100}
                  src={category.image}
                  alt={category.heading}
                  className="w-full h-auto my-4"
                />
            ):(<></>)}
          <div className="text-white">
            {category.heading}
          </div>

          {/* Display subcategories content if available and selected */}
          {category.subcategories &&
            category.subcategories.map((subcategory, i) => (
              <div
                key={i}
                className={`subcategory mt-4 ml-4 ${
                  selectedSubcategory === null ||
                  selectedSubcategory === subcategory.name
                    ? 'block'
                    : 'hidden'
                }`}
              >
                <h3 className="text-lg font-semibold text-white">{subcategory.name}</h3>
                <p className="text-gray-200">{subcategory.content}</p>
                {subcategory.images.map((image, i)=>(
                  <Image
                  key={i}
                  width={100}
                  height={100}
                    src={image}
                    alt={subcategory.heading}
                    className="w-full h-auto my-2"
                  />
                ))}
                {/* <Image
                  width={100}
                  height={100}
                    src={subcategory.image}
                    alt={subcategory.heading}
                    className="w-full h-auto my-2"
                  /> */}
                <div
                  className="text-white"
                >
                  {subcategory.heading}
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
