
export default function BottomNav({active,onChange}:{active:string;onChange:(k:string)=>void}){
  const items:[string,string,string][]= [
    ["home","Accueil","🏠"],["search","Recherche","🔎"],["create","Ajouter","➕"],["favorites","Favoris","⭐"],["settings","Réglages","⚙️"]
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm md:max-w-screen-sm md:mx-auto">
      <ul className="grid grid-cols-5 text-xs">
        {items.map(([k,label,icon])=> (
          <li key={k}>
            <button onClick={()=>onChange(k)} className={"w-full py-2.5 flex flex-col items-center "+(active===k? "text-[var(--brand-blue)]":"text-gray-500")}>
              <span className="text-xl leading-none">{icon}</span>
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
