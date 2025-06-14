export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About NotesApp</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        NotesApp is a simple and fast note-taking application built with Next.js and Tailwind CSS. 
        It allows you to create, view, and manage your personal notes in a clean and distraction-free interface.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This app was built to demonstrate full-stack capabilities with modern tools like:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>⚛️ Next.js (App Router)</li>
        <li>🎨 Tailwind CSS for UI</li>
        <li>🧠 In-memory API (or connect to DB)</li>
        <li>🧩 Client-side state with React</li>
      </ul>
      <p className="text-gray-700">
        Built with ❤️ by a developer learning and exploring full-stack web development.
      </p>
    </div>
  );
}
