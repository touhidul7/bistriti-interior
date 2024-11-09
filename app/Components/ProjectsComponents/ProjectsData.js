"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import projectsData from "@/public/data/projects.json";
import ProjectDisplay from "./ProjectDisplay";

export default function ProjectsData() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    const filteredProjects = projectsData.categories.filter((category) => {
        if (selectedCategory && category.category !== selectedCategory) {
            return false;
        }

        if (selectedSubcategory) {
            const subcategoryMatch = category.subcategories?.some(
                (sub) => sub.name === selectedSubcategory
            );
            return subcategoryMatch;
        }

        return true;
    });

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
            setSelectedSubcategory(null);
        } else {
            setSelectedCategory(category);
            setSelectedSubcategory(null);
        }
    };

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategory(subcategory);
        setSelectedCategory(null);
    };

    return (
        <div className="p-20 ">
            <div className="p-20 absolute w-full left-0 top-0 pb-32" style={{
          backgroundImage: `url('../home-header.jpg')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}></div>

            <div className="flex gap-6 py-6 justify-center items-center bg-gray-900 text-white lg:mx-20 mt-10 z-50">
                {projectsData.categories.map((item, index) => (
                    <div key={index}>
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="flex items-center gap-1"
                                onClick={() => handleCategoryClick(item.category)}
                            >
                                {item.category}
                                {item.subcategories && item.subcategories.length > 0 && (
                                    <IoIosArrowDown />
                                )}
                            </div>
                            {item.subcategories && item.subcategories.length > 0 && (
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-black/30 border-[1px] border-gray-800"
                                >
                                    {item.subcategories.map((sub, i) => (
                                        <li key={i}>
                                            <div
                                                className="hover:text-red-700"
                                                onClick={() => handleSubcategoryClick(sub.name)}
                                            >
                                                {sub.name}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <ProjectDisplay
                filteredProjects={filteredProjects}
                selectedSubcategory={selectedSubcategory}
            />
        </div>
    );
}
