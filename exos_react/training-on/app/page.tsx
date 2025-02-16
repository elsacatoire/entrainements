'use client'

import { CatsFacts } from "./components/CatsFacts";
import { Button } from "./components/CCButton";
import { NumberGuess } from "./components/NumberGuess";
import { TodoList } from "./components/TodoList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="border-b-2 border-b-lime-200 h-16 flex items-center justify-center bg-gray-800">
        <h1 className="main-title text-center p-4">Hi! This is a nonsense as I only made it to review my React basis !</h1>
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
