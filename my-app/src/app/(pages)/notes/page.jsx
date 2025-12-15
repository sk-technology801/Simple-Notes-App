'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function NotesPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const saveNote = async () => {
    if (!title) return alert('Title required')

    setLoading(true)

    const { error } = await supabase
      .from('notes')
      .insert([{ title, content }])

    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      alert('Note saved successfully ✅')
      setTitle('')
      setContent('')
    }
  }

  return (
    <div>
      <input
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={saveNote} disabled={loading}>
        {loading ? 'Saving...' : 'Save Note'}
      </button>
    </div>
  )
}
