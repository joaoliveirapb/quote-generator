export function Quote({ text }: { text: string }) {
  return (
    <div className="border-l-8 border-yellow-200 pl-10">
      <p className="max-w-[614px] text-4xl font-medium">“{text}”</p>
    </div>
  )
}
