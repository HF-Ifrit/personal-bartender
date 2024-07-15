'use client'
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState(null);
  const [items, setItems] = useState([]);

  function addItem() {
    if(current){
      setItems(items.concat(current));
    }
  }

  function generateButtons() {
    return items.map((item, index) => (
      <div key={`item${index}`} className="m-1 w-fit h-fit px-2 py-1 rounded-full border-caputmortuum border-2">
        <button 
          className="flex flex-row place-content-evenly"
          onClick={() => setItems(items.filter((_, i) => i !== index))}>
          <XMarkIcon className="size-4"/>
            {item}
        </button>
      </div>)
    );
  }

  function handleInputKeyDown(e: { key: any; }) {
    if(e.key === "Enter"){
      addItem();
    }
  }

  function handleOnChange(e: any) {
    setCurrent(e.target.value);
  }
  
  return (
    <>
      <main className="bg-goldenbrown flex gap-y-2 min-h-screen flex-col justify-items-start p-24">
        <input
          className="bg-transparent text-caputmortuum outline-none text-9xl border-b-4 border-caputmortuum w-1/2"
          type="text"
          onChange={handleOnChange}
          onKeyDown={handleInputKeyDown}
        ></input>
        <button onClick={addItem}>Add Item</button>
        <button onClick={() => fetch(new Request("/api/drinks", { method: "POST", body: JSON.stringify({ ingredients: items })}))}>Search</button>
        <div className="flex flex-row flex-wrap content-start grow p-4 rounded-md border-4 border-caputmortuum w-1/3 max-w-1/2 min-h-4">
          {generateButtons()}
        </div>
      </main>
    </>
  );
}
