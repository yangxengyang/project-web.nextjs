import Image from "next/image";

interface AboutProps{
    title: string;
    subTitle: string;
    description:string;
    image: string;
    type: "A" | "B"
}
export default function About ({
    title,
    subTitle,
    description,
    image,
    type
} : AboutProps){
    return(
      <div className=" flex flex-row justify-center items-center gap-12">
        {type === "B" &&(
        <div className="relative w-96 h-96">
                    <Image
                    src={image}
                    alt="About Icon"
                    fill
                    />
                </div>
                )}
        <div className="max-w-2xl">
            <h3 className="text-3xl font-bold text-blue-700 pb-4">
               {title}
            </h3>
            <h2 className="text-4xl font-bold pb-4">
                {subTitle}
            </h2>
            <p className="text-xl text-gray-600">
             {description}
            </p>
        </div>
        {type === "A" &&(
  <div className="relative w-96 h-96">
            <Image
            src={image}
            alt="About Icon"
            fill
             />
        </div>
        )}
      </div>
    );
}