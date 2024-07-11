export default function App() {
  const name="Mohamedamine"
  if (name ){
    return ( <div className="flex justify-center items-center"><h1 className="text-3xl text-red-500 font-bold underline">
      Hello {name}
    </h1>
    </div>)
  }
  return (
    <div className="flex justify-center items-center"><h1 className="text-3xl text-red-500 font-bold underline">
    Hello World
  </h1>
  </div>
    
  )
}
