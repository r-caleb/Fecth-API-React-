import './App.css'

export default function Research({value, onChange}) {
  return (
   <input type="text"
        name="search"
        placeholder="Rechercher par nom"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
  )
}