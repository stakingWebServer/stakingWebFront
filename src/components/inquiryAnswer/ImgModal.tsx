import Image from "next/image"
import { ModalBackCss } from "../ui/Modal"
import { ImgModalData } from "./Answer"

type ImgData = {
    fileUrl: string;
    fileName: string;
}

type Props = {
    imgData: ImgData;
    setModal: React.Dispatch<React.SetStateAction<ImgModalData>>;
}

export default function ImgModal({ imgData, setModal }: Props) {
    return (
        <div className={ModalBackCss}>
            <div className="bg-white w-[400px] p-3 m-auto mt-[12%]">
                <div className="flex justify-between pb-3">
                    <span>이미지</span>
                    <span className="cursor-pointer" onClick={() => setModal(null)}>X</span>
                </div>
                <Image
                    width={400}
                    height={400}
                    src={imgData.fileUrl}
                    alt={imgData.fileName}
                />
            </div>
        </div>
    )
}