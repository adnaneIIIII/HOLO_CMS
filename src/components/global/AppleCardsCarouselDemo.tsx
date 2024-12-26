"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-6 text-center">
        The One to Watch
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return <></>;
};

const data = [
  {
    category: "Action-adventure",
    title: "With Your Family.",
    src: "/assets/a.jpg",
    content: <DummyContent />,
  },
  {
    category: "animation",
    title: "With Your Kids.",
    src: "/assets/e.jpg",
    content: <DummyContent />,
  },
  {
    category: "News",
    title: "Latest News",
    src: "/assets/u.jpg",
    content: <DummyContent />,
  },

  {
    category: "Entertainment",
    title: "With your partner.",
    src: "/assets/y.jpg",
    content: <DummyContent />,
  },


  {
    category: "Sport",
    title: "Want Adrenaline.",
    src: "/assets/q.jpg",
    content: <DummyContent />,
  },

  {
    category: "Relationship",
    title: "Need A Partner.",
    src: "/assets/g.jpg",
    content: <DummyContent />,
  },

  {
    category: "Epic",
    title: "Movie Night.",
    src: "/assets/h.jpg",
    content: <DummyContent />,
  },
  
  {
    category: "Scary",
    title: "when You Are Alone.",
    src: "/assets/j.jpg",
    content: <DummyContent />,
  }
];
