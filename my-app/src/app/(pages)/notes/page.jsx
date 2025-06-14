'use client';

import { useEffect, useState } from 'react';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');

  // Fetch notes on load
  useEffect(() => {
    fetch('/api/notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  // Add new note
  const addNote = async () => {
    if (!text.trim()) return;
    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const newNote = await res.json();
    setNotes(prev => [...prev, newNote]);
    setText('');
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">📝 My Notes</h1>

      <div className="flex gap-2 mb-6">
        <input
          className="flex-1 px-3 py-2 border rounded text-black"
          type="text"
          placeholder="Enter a new note..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={addNote}
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {notes.map(note => (
          <li
            key={note.id}
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded shadow-sm"
          >
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
