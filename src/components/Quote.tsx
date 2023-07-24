export function Quote({ text }: { text: string }) {
  return (
    <div className="border-l-8 border-yellow-200 pl-10 max-sm:pl-5">
      <p className="max-w-[614px] text-4xl font-medium dark:text-zinc-100 max-sm:text-2xl">
        “{text}”
      </p>
    </div>
  )
}
