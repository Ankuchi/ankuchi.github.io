import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col w-full mx-auto cursor-defaul">
      <section className="w-full">
        <div className="md:w-11/12  flex flex-col-reverse md:flex-row p-4 ">
          <div className="flex flex-col md:w-1/2 items-center justify-center gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-secondary">
              You Imagine It{" "}
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-secondary">
              We Create It{" "}
            </h1>
            <button className="bg-secondary px-6 py-4 text-xl rounded-full hover:scale-105 cursor-pointer transition-transform duration-300">
              Portfolio
            </button>
          </div>
          <div className="flex md:w-1/2 items-center justify-center">
            <Image
              src="hero.svg"
              alt="hero"
              width={600}
              height={1}
              className="h-80 md:h-full"
            ></Image>
          </div>
        </div>
      </section>
      <section className="w-full bg-secondary">
        <div className="md:w-11/12 flex flex-col-reverse md:flex-row p-4 mx-auto">
          <div className="flex h-100 items-center justify-center w-full">
            <p className="text-primary">Site is under constructions</p>
          </div>
        </div>
      </section>
    </div>
  );
}
