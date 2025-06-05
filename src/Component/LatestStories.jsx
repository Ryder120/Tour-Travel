import React from "react";
import Doctorlens from "../Component/pic/Doctorlens.jpg";
import Microscope from "../Component/pic/Microscope.jpg";
import CompoundMicroscope from "../Component/pic/CompoundMicroscope.jpg";
import Brain from "../Component/pic/Brain.jpg";
const stories = [
  {
    title: "7 Signs and Symptoms of Iodine Deficiency",
    author: "Jackie Moncada",
    image: Doctorlens
  },
  {
    title: "How to Fix Your Sleep Schedule: 7 Easy Ways",
    author: "Jackie Moncada",
    image: Microscope
  },
  {
    title: "10 Proven Health Benefits of Cinnamon",
    author: "Jackie Moncada",
    image: CompoundMicroscope
  },
  {
    title: "11 Health Benefits of Turmeric and Curcumin",
    author: "Jackie Moncada",
    image: Brain
  },
];

const LatestStories = () => {
  return (
    <section className="bg-white py-16 px-6 md:p-16">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-grey-900">Latest Stories</h2>
            <p className="text-gray-600 mt-1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>    
     <button className="bg-grey-700 text-white px-5 py-2 rounded-md hover:bg-grey-800 transition">
        View All Posts
      </button>
      </div>
     <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2">
        {stories.map((story, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={story.image} alt={story.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Author"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <p className="text-sm text-gray-700">{story.author}</p>
              </div>
              <h3 className="text-md font-semibold text-gray-900">{story.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestStories;