import Image from "next/image";

type ImagesProps = {
    ImgUrl: string;
}

export default function FooterImages({ImgUrl}: ImagesProps) {
  return (
    <div>
      <Image
        src={ImgUrl}
        width={33.03}
        height={32}
        alt=""
        className="block w-[100%] "
      />
    </div>
  );
}
