
'use client';
import { useState } from 'react';
import Card from '@/components/Card';
import BottomNav from '@/components/BottomNav';

export default function Page(){
  const [tab,setTab]=useState('home');
  return (
    <div className='min-h-screen'>
      <header className='sticky top-0 z-20 bg-white/90 backdrop-blur border-b'>
        <div className='mx-auto max-w-screen-sm px-4 h-14 flex items-center justify-between'>
          <h1 className='font-bold'>📞 Annuire Pro et Partic</h1>
          <button className='btn btn-primary text-sm'>Se connecter</button>
        </div>
      </header>

      <main className='mx-auto max-w-screen-sm px-4 pb-24 pt-4'>
        {tab==='home' && <Home setTab={setTab} />}
        {tab==='search' && <Search />}
        {tab==='create' && <Create />}
        {tab==='favorites' && <Favorites />}
        {tab==='settings' && <Settings />}
      </main>

      <BottomNav active={tab} onChange={setTab}/>
    </div>
  )
}

function Home({setTab}:{setTab:(k:string)=>void}){
  return (<div>
    <Card>
      <div className='flex items-center gap-3'>
        <div className='text-3xl'>📇</div>
        <div><p className='font-semibold'>Annuaire Pro & Particulier</p><p className='text-gray-500 text-sm'>Retrouvez un numéro ou un nom en un clic</p></div>
      </div>
    </Card>
    <div className='grid grid-cols-2 gap-3 mb-4'>
      <button onClick={()=>setTab('search')} className='bg-white border rounded-2xl p-4 shadow-sm text-left'><div className='text-2xl'>🔎</div><p className='font-medium'>Par nom</p><p className='text-xs text-gray-500'>Tapez le nom et trouvez le numéro</p></button>
      <button onClick={()=>setTab('search')} className='bg-white border rounded-2xl p-4 shadow-sm text-left'><div className='text-2xl'>📱</div><p className='font-medium'>Par numéro</p><p className='text-xs text-gray-500'>Reverse lookup (opt-in)</p></button>
    </div>
    <Card title='Créer une fiche'>
      <div className='grid grid-cols-2 gap-3'>
        <button className='btn btn-primary'>Entreprise (10 000 F)</button>
        <button className='btn btn-accent'>Particulier (1 000 F)</button>
      </div>
    </Card>
  </div>)
}

function Search(){
  return (<div>
    <Card title='Recherche bi-directionnelle'>
      <div className='space-y-3'>
        <input className='border p-3 rounded-xl w-full' placeholder='🔍 Nom / Entreprise'/>
        <div className='text-center text-gray-500'>— ou —</div>
        <input className='border p-3 rounded-xl w-full' placeholder='📱 Numéro (+225…)'/>
        <button className='btn btn-primary w-full'>Chercher</button>
      </div>
    </Card>
  </div>)
}

function Create(){
  return (<div>
    <Card title='Type de fiche'>
      <div className='grid grid-cols-2 gap-3'>
        <button className='btn btn-primary'>Entreprise (10 000 F)</button>
        <button className='btn btn-accent'>Particulier (1 000 F)</button>
      </div>
    </Card>
  </div>)
}

function Favorites(){ return (<div><Card title='Favoris'><p className='text-sm text-gray-500 mb-3'>Conservez vos fiches utiles.</p></Card></div>); }
function Settings(){ return (<div><Card title='Confidentialité'><p>Interrupteurs (affichage nom, reverse lookup, suppression)</p></Card></div>); }
