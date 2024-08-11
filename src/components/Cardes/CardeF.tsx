
type CardeProps = {
    imgUrl: string;
    title: string;
}

export default function CardeF({imgUrl, title }: CardeProps) {
    return(
        <div className="relative ">
            <div
              className="flex flex-col justify-end w-[622.12px]  h-[667.67px] gap-0  rounded-[3px_0px_0px_0px] left-[279.86px] top-[1755.12px] bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  `linear-gradient(to right , #F57002 3.3%, rgba(245, 112, 2, 0) 56.06%), url(${imgUrl})`,
              }}
            >
              <p className="relative top-0 text-5xl font-normal leading-[67.2px] text-left text-white ml-[50.14px] mr-[40px] mb-[77px]">
                {title}
              
              </p>
            </div>
          </div>
    )
}