import React, { useRef, useState } from "react";

const cards = [
  { id: 1, name: "John Doe", position: "CEO", image: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. text-gray-700 text-sm mt-2 break-words whitespace-normal text-gray-700 text-sm mt-2 break-words whitespace-normaltext-gray-700 text-sm mt-2 break-words whitespace-normal Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, name: "Jane Smith", position: "CTO", image: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 3, name: "Michael Johnson", position: "CFO", image: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 4, name: "Emily Davis", position: "COO", image: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 5, name: "Chris Brown", position: "CMO", image: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

function InfCard() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse down - Start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Mouse leave / up - Stop dragging
  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  // Mouse move - Scroll when dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full overflow-hidden px-20">
      <div
        ref={scrollRef}
        className="grid grid-flow-col gap-5 overflow-hidden cursor-grab active:cursor-grabbing"
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[420px] bg-white rounded-2xl shadow-lg p-6 text-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative inline-block">
              <img
                src={card.image}
                alt={card.name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-red-500"
              />
            </div>
            <div className="mt-4">
              <span className="text-red-500 text-2xl">&#10077;</span>
              <p className="text-gray-700 text-sm mt-2 break-words whitespace-normal">{card.quote}</p>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-black">{card.name}</h3>
            <p className="text-gray-500 text-sm">{card.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfCard;
