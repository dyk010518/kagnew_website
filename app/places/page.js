"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import PlaceButton from "@/components/PlaceButton";
import TimeCapsureButton from "@/components/TimeCapsureButton";

export default function PlacesPage() {
  const [placeOneOpen, openPlaceOne] = useState(true); // always unlocked
  const [placeTwoOpen, openPlaceTwo] = useState(false);
  const [placeThreeOpen, openPlaceThree] = useState(false);
  const [placeFourOpen, openPlaceFour] = useState(false);
  const [placeFiveOpen, openPlaceFive] = useState(false);

  const [placeOneSettle, settlePlaceOne] = useState(false); // always unlocked
  const [placeTwoSettle, settlePlaceTwo] = useState(false);
  const [placeThreeSettle, settlePlaceThree] = useState(false);
  const [placeFourSettle, settlePlaceFour] = useState(false);
  const [placeFiveSettle, settlePlaceFive] = useState(false);

  const openList = [
    placeOneOpen,
    placeTwoOpen,
    placeThreeOpen,
    placeFourOpen,
    placeFiveOpen,
  ]

  const settleList = [
    placeOneSettle,
    placeTwoSettle,
    placeThreeSettle,
    placeFourSettle,
    placeFiveSettle,
  ]

  const openPlaceFunctions = [
    () => openPlaceTwo(true),
    () => openPlaceThree(true),
    () => openPlaceFour(true), 
    () => openPlaceFive(true), 
    null,
  ];

  const settlePlaceFunctions = [
    () => settlePlaceOne(true),
    () => settlePlaceTwo(true),
    () => settlePlaceThree(true),
    () => settlePlaceFour(true), 
    () => settlePlaceFive(true), 
  ];

  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    fetch('/scavenger_hunt.json')
      .then(res => res.json())
      .then(data => setPlaceData(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#010f18]">
      <div className="text-white flex flex-col items-center p-4">
        {/* Logo */}
        <div className="w-full max-w-xs mt-6 mb-8">
          <div className="w-full aspect-[3/1] bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-300 text-lg">Logo Placeholder</span>
          </div>
        </div>

        {/* Buttons */}
        {placeData.length > 0 && (
          <div className="w-full space-y-8 max-w-md">
            {placeData.slice(0, -1).map((data, index) => (
              <PlaceButton
                key={index}
                data={data}
                open={openList[index]}
                settled={settleList[index]}
                setOpen = {() => openPlaceFunctions[index]()}
                setSettled={() => settlePlaceFunctions[index]()}
              ></PlaceButton>
            ))}

            <TimeCapsureButton
              data={placeData[placeData.length-1]}
              open={openList[openList.length-1]}
              settled={settleList[settleList.length-1]}
              setOpen = {() => openPlaceFunctions[openPlaceFunctions.length-1]()}
              setSettled={() => settlePlaceFunctions[settlePlaceFunctions.length-1]()}
            ></TimeCapsureButton>
          </div>

          
        )}

      </div>
    </main>

  );
}