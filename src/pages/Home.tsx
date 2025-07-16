
import { Image } from "@heroui/react"

const images = [
    'https://images.squarespace-cdn.com/content/v1/5a88864349fc2b8e071336f8/1741914254873-B8S1H8PU7QQJPU91JR2G/2025_portfolio_short1.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5a88864349fc2b8e071336f8/1741914220374-LPR4V61NEUXZUZ97Z6SA/2025_portfolio_short2.jpg?format=1500w'
    , 'https://images.squarespace-cdn.com/content/v1/5a88864349fc2b8e071336f8/1734388131810-MLJQJFSP0SQ3H09E6YPC/portfolio_update_2024_vox_1.jpg?format=1500w'
    , 'https://images.squarespace-cdn.com/content/v1/5a88864349fc2b8e071336f8/1730330060423-RU7GH5U7NK71ERNUAOBT/2023portfolio_bb_1.jpg?format=1500w',]

function Home() {

    return (
        <>
            <div className="w-full flex gap-10 flex-col items-center pt-10 justify-center">
                {images.map(src => (
                    <Image src={src} radius="none" isBlurred isZoomed />
                ))}

            </div>

        </>
    )
}

export default Home
