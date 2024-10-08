'use client';

export const FirstComponent = ({ text }: { text: string }) => {
  return (
    <main className="text-white flex items-stretch justify-around w-full">
      <section className="rounded-md w-[300px] h-[200px] border-2 border-red-400 p-2 m-2">
        {text}
      </section>
      <section className="rounded-md w-[300px] h-[200px] border-2 border-red-400 p-2 m-2">
        "Some new text here"
      </section>
      <section
        className="rounded-md w-[300px] h-[200px] border-2 border-red-400 p-2 m-2 cursor-pointer"
        onClick={() => {
          console.log('clicked...');
        }}
      >
        "Will I ever get the udo app working?"
      </section>
    </main>
  );
};
