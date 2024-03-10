const testData = [
    {
        "questionId": "070ea4c3-e249-46a2-9228-a1c25b2f1c92",
        "title": "ㄱㄹㅋㄷㅌㄴ",
        "content": "ㅋ리",
        "fileInfos": [],
        "replyYn": "Y"
    },
    {
        "questionId": "080660b6-0cb9-4a87-a06a-a3c182ff3ab4",
        "title": "11",
        "content": "111",
        "fileInfos": [
            {
                "fileName": "102C2A45-DB87-4CA4-8C0A-D74612741399.jpeg",
                "fileUrl": "https://api.s2it.kro.kr/api/v1/common/file/image/3Rm6RwvXL4"
            }
        ],
        "replyYn": "N"
    },
    {
        "questionId": "11726f16-e7a4-4f10-9971-e8a017069125",
        "title": "ㅎㅊㄴㅌ",
        "content": "ㅎㅂㅎㄱ",
        "fileInfos": [
            {
                "fileName": "wqeimage0(8).jpeg",
                "fileUrl": "https://api.s2it.kro.kr/api/v1/common/file/image/XujoiTGSD2"
            }
        ],
        "replyYn": "N"
    },
    {
        "questionId": "1a2a55ce-f624-45ab-ad56-0affe7216c0b",
        "title": "ee",
        "content": "ee",
        "fileInfos": [
            {
                "fileName": "스크린샷 2024-01-06 192605(7).png",
                "fileUrl": "https://api.s2it.kro.kr/api/v1/common/file/image/coeqiu1WZ1"
            },
            {
                "fileName": "스크린샷 2024-01-20 111452.png",
                "fileUrl": "https://api.s2it.kro.kr/api/v1/common/file/image/UieyZfWF7x"
            }
        ],
        "replyYn": "N"
    },
    {
        "questionId": "1f3117d4-2d38-4716-8114-6c8fd063351b",
        "title": "테스트",
        "content": "테스트",
        "fileInfos": [],
        "replyYn": "N"
    },
    {
        "questionId": "1fddf47a-0229-4622-82ac-c96ee7078269",
        "title": "22",
        "content": "22",
        "fileInfos": [
            {
                "fileName": "02506DD6-ADBD-4E98-B3D3-AB2CCFF1CB5F.jpeg",
                "fileUrl": "https://api.s2it.kro.kr/api/v1/common/file/image/ebAiu6JSJk"
            }
        ],
        "replyYn": "N"
    },
]

export default function AnswerList() {
    return (
        <div >
            <p className="bg-gray-600 p-6">Question List</p>
            <ul>
                {testData.map(item => (
                    <li key={item.questionId} className="cursor-pointer flex p-6 justify-between border-b border-solid border-gray-300">
                        <p>{item.title}</p>
                        <p>{item.replyYn === 'N' ? '미답변' : '답변완료'}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}