/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {  //key
        remotePatterns: [  //사용하고 싶은 이미지 패턴을 넣음
            {
                protocol: 'https',
                hostname: 'api.s2it.kro.kr'  //도메인 url 등록
            }
        ]
    }
};

export default nextConfig;
