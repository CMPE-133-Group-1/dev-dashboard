/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
 ],
  theme: {
    fontSize: {
      XXL: '6.875rem',
    },
    extend: {
      colors: {
        'ToDo': '#f8e9d2',
        'NoteApp': '#ebdeaf',
        'ColorPicker': '#ffffff',
        'Note': '#fff9e3',
        
        'Timer': '#d2cadd',
        'TimerButton': '#e8af6c',
        'Weather-Pr': '#9eb8c7',
        'Weather-Sc': '#6c99b2',
        
        'SnippetApp': '#ffffff',
        'Snippet': '#ffffff',
        'Banner': '#ffffff',
      },
    },
  },
  plugins: [],
}
