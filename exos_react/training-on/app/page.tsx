'use client'

import { useEffect, useState } from "react";
import { CatsFacts } from "./components/CatsFacts";
import { Button } from "./components/CCButton";
import { NumberGuess } from "./components/NumberGuess";
import { TodoList } from "./components/TodoList";

export type UserType = {
  name: NameType,
  email: string,
  phone: string
};

type NameType = {
  title: string,
  first: string,
  last: string
};

export default function Home() {

  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    fetch('https://randomuser.me/api/', {method: "GET"} )
    .then((response) => response.json())
    .then((data) => {setUser(data.results[0]); console.log(data);}
    )
    .catch(error => console.log(error)
    )
}, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="border-b-2 border-b-lime-200 h-16 flex items-center justify-between px-4 sm:px-16 bg-gray-800">
        <h1 className="main-title text-center">Hi! This is a nonsense as I only made it to review my React basis !</h1>
        <div>
          <Button 
          variant="secondary" 
          onClick={() => alert(`Hello ${user?.name.first} ${user?.name.last}, how are you ? Your contacts: tel:${user?.phone}, mail: ${user?.email}`)}
          >
              {user?.name.first}
            </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 sm:gap-8 py-4 sm:py-8 px-4 sm:px-16">
        <div className="flex flex-col gap-4 sm:gap-8"> 
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-7">
            <Button onClick={() => alert('Clicked!')} variant="primary">Primary</Button>
            <Button onClick={() => alert('Clicked!')} variant="secondary">Secondary</Button>
            <Button onClick={() => alert('Clicked!')} disabled>Disabled</Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <TodoList>What do we need for Apéro?</TodoList>
            <NumberGuess>Guess my age?</NumberGuess>
          </div>
        </div>
        <CatsFacts />
      </main>
      <footer className="bg-lime-500 text-gray-900 h-12 flex items-center justify-end p-4">
        Ceci est le footer
      </footer>
    </div>
  );
}
