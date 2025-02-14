'use client'

import { Button } from "./components/CCButton";

export default function Home() {
  return (
    <div className="relative min-h-svh bg-gray-900">
      <main className="p-4">
        <div className="flex flex-col gap-8">
          <h1>Bonjour, je suis une personne très sérieuse.</h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-7">
            <Button onClick={() => alert('Clicked!')} variant="primary">Primary</Button>
            <Button onClick={() => alert('Clicked!')} variant="secondary">Secondary</Button>
            <Button onClick={() => alert('Clicked!')} disabled>Disabled</Button>
          </div>

        </div>
      </main>
      <footer className="absolute inset-x-0 bottom-0 bg-lime-500 text-gray-900 h-12">
        <div className="p-4">
          Ceci est le footer
        </div>
      </footer>
    </div>
  );
}
