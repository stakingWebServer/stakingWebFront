import TextInputBox from "./ui/TextInputBox";

export default function Login() {
    return (
        <div className="w-full text-center mt-20">
            <div className="w-80 mx-auto border border-solid border-gray-200 rounded-lg p-8">
                <h2 className="text-lg">로그인</h2>
                <div className="mt-3 ">
                    <TextInputBox text={'아이디'} />
                    <TextInputBox text={'비밀번호'} />
                </div>
            </div>

        </div>
    )
}