"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import PlaceButton from "@/components/PlaceButton";
import TimeCapsureButton from "@/components/TimeCapsureButton";

export default function PlacesPage() {
  const [placeOne, setPlaceOne] = useState(true); // always unlocked
  const [placeTwo, setPlaceTwo] = useState(false);
  const [placeThree, setPlaceThree] = useState(false);
  const [placeFour, setPlaceFour] = useState(false);
  const [placeFive, setPlaceFive] = useState(false);

  const openList = [
    placeOne,
    placeTwo,
    placeThree,
    placeFour,
    placeFive
  ]

  const setPlaceFunctions = [
    () => setPlaceTwo(true),
    () => setPlaceThree(true),
    () => setPlaceFour(true), 
    () => setPlaceFive(true), 
    null,
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
        {placeData && (
          <div className="w-full space-y-4 max-w-md">
            {placeData.slice(0, -1).map((data, index) => (
              <PlaceButton
                key={index}
                data={data}
                open={openList[index]}
                setCorrect = {() => setPlaceFunctions[index]()}
              ></PlaceButton>
            ))}

            <TimeCapsureButton
              data={placeData[placeData.length-1]}
              open={openList[openList.length-1]}
              setCorrect = {() => setPlaceFunctions[setPlaceFunctions.length-1]()}
            ></TimeCapsureButton>
          </div>

          
        )}

      </div>
    </main>

  );
}