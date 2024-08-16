'use client';

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

type Item = { id: number; name: string };
const initialPeople: Item[] = [
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
];

const LOCAL_STORAGE_KEY = 'peopleList';

export function ComboboxTest() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(initialPeople[1]);
  const [people, setPeople] = useState<Item[]>(() => {
    if (typeof window !== 'undefined') {
      // Check if we're in the browser
      const storedPeople = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedPeople ? JSON.parse(storedPeople) : initialPeople;
    }
    return initialPeople;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only access localStorage in the browser
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(people));
    }
  }, [people]);

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  const addPerson = () => {
    const name = window.prompt('Enter the name of the new person:');
    if (name) {
      const newPerson = { id: people.length + 1, name };
      setPeople([...people, newPerson]);
      // setSelected(newPerson); // Optional: Automatically select the new person
    }
  };

  return (
    <div className="mx-auto h-screen flex items-center gap-2 pt-20">
      <Combobox
        value={selected}
        onChange={(value: Item) => setSelected(value)}
        onClose={() => setQuery('')}
        __demoMode
      >
        <div className="relative">
          <ComboboxInput
            className={clsx(
              'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            displayValue={(person: Item | null) => (person ? person.name : '')}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 mt-1'
          )}
        >
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">{person.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
      <button
        className={clsx(
          'rounded-lg bg-white/5 text-white px-3 py-1.5',
          'hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/25'
        )}
        onClick={addPerson}
      >
        Add
      </button>
    </div>
  );
}
