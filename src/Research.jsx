import './App.css'

export default function Research({handleSearchUser}) {
  return (
   <input
        type="text"
        name="search"
        placeholder="Rechercher par nom"
         onChange={handleSearchUser}
      />
  )
}