"use client";

import { useState } from "react";
import { photoList } from "../data/photoList";
import { PhotoItem } from "../components/PhotoItem";
import { Modal } from "../components/Modal";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState("");

  const openModal = (targetId: number) => {
    setShowModal(!showModal);
    for (let i in photoList) {
      if (photoList[i].id === targetId) {
        setImageOfModal(photoList[i].url);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold my-7">Fotos Intergalácticas</h1>

      {showModal && (
        <Modal
          toggleModal={() => {
            setShowModal(!showModal);
          }}
          imageUrl={imageOfModal}
        />
      )}

      {!showModal && (
        <section
          className="container max-w-3xl grid grid-rows-3 gap-8 grid-cols-1
       md:grid-cols-2 lg:grid-cols-3"
        >
          {photoList.map((item) => {
            return (
              <PhotoItem
                key={item.id}
                photo={item}
                clickHandler={() => {
                  openModal(item.id);
                }}
              />
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Page;
