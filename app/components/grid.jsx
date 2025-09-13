export default function Collections() {
  return (
    <div className="px-4 py-8 mx-auto max-w-[1400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,700px)_minmax(0,700px)] gap-10 justify-center">
        <div className="border row-span-2 w-full max-w-[700px] flex flex-col items-center p-4">
          {/* div1 content */}
          div1
        </div>
        <div className="border w-full max-w-[700px] flex flex-col items-center p-4">
          div2
        </div>
        <div className="border w-full max-w-[700px] flex flex-col items-center p-4">
          div3
        </div>
      </div>
    </div>
  );
}
