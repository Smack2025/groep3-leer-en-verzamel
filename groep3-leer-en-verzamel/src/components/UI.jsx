export function Card({children, className=''}) {
  return <div className={`rounded-2xl bg-white shadow p-4 ${className}`}>{children}</div>
}

export function PrimaryButton({children, ...props}) {
  return <button className="px-5 py-3 rounded-2xl bg-secondary text-white font-bold shadow hover:brightness-110 active:scale-95 transition" {...props}>{children}</button>
}

export function TileButton({children, ...props}) {
  return <button className="w-24 h-24 rounded-2xl bg-white shadow grid place-items-center text-3xl font-extrabold hover:scale-105 active:scale-95 transition" {...props}>{children}</button>
}
