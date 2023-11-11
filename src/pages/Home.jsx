import Logo100 from "../assets/100.svg";
import LogoX from "../assets/x.svg";
import UserAvatar from "../assets/user-avatar.png";
import Comment from "../assets/comment.svg"
import Heart from "../assets/heart.svg"
import Reach from "../assets/reach.svg"
import Retweet from "../assets/retweet.svg"
import Share from "../assets/share.svg"

const Home = () => {
    return (
        <div className="bg-neutral-1000 font-inter flex-shrink-0 h-screen">
            <header className="flex items-center py-3 px-4 border-b border-solid border-neutral-700">
                <div className="flex-grow">
                    <img src={UserAvatar} className="flex-shrink-0" />
                </div>
                <div className="flex flex-grow items-end gap-0.5">
                <img src={Logo100} alt="100 icon" />
                <img src={LogoX} alt="X icon" />
                </div>
            </header>
            <section className="flex w-full self-stretch justify-around border-b border-b-neutral-700">
                <div className="flex flex-col items-center hover:bg-neutral-800 w-full">
                <input type="radio" name="tabs" id="for-you-tab" defaultValue="for-you-tab" className="peer/for-you-tab hidden w-full" defaultChecked />
                <label htmlFor="for-you-tab" className="text-neutral-400 text-base font-medium leading-normal w-full block cursor-pointer text-center py-4 peer-checked/for-you-tab:text-neutral-50">
                    For you
                </label>
                <div className="rounded-border-30 w-14 h-1 bg-twitter-blue hidden peer-checked/for-you-tab:block" />
                </div>
                <div className="flex flex-col items-center hover:bg-neutral-800 w-full">
                <input type="radio" name="tabs" id="following-tab" defaultValue="following-tab" className="peer/following-tab hidden w-full" />
                <label htmlFor="following-tab" className="text-neutral-400 text-base font-medium leading-normal w-full block cursor-pointer text-center py-4 peer-checked/following-tab:text-neutral-50">
                    Following
                </label>
                <div className="rounded-border-30 w-14 h-1 bg-twitter-blue hidden peer-checked/following-tab:block" />
                </div>
            </section>
            <main className="flex flex-col items-center self-stretch pb-[60px]">
                <div className="flex py-2 px-4 items-start gap-4 self-stretch border-b border-b-neutral-700">
                <img src={UserAvatar} className="flex-shrink-0" />
                <div className="flex flex-col items-start gap-2 flex-1 flex-shrink-0 w-0">
                    <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex items-center gap-2">
                        <p className="text-neutral-50 text-base font-medium leading-normal">Sanika Suryawanshi</p>
                        <p className="text-neutral-500 text-base font-normal leading-normal">@Sanika_0305 • 32m</p>
                    </div>
                    <p className="text-neutral-50 text-15 font-normal leading-normal self-stretch">Don't wish for it, work for it.</p>
                    </div>
                    <div className="flex py-3 justify-between items-center self-stretch">
                    <div className="flex items-center justify-center gap-1.25">
                        <img src={Comment} alt="Comment icon" />
                        <p className="text-neutral-500 text-sm font-normal leading-normal">11</p>
                    </div>
                    <div className="flex items-center justify-center gap-1.25">
                        <img src={Retweet} alt="Retweet icon" />
                        <p className="text-neutral-500 text-sm font-normal leading-normal">270</p>
                    </div>
                    <div className="flex items-center justify-center gap-1.25">
                        <img src={Heart} alt="Heart icon" />
                        <p className="text-neutral-500 text-sm font-normal leading-normal">1869</p>
                    </div>
                    <div className="flex items-center justify-center gap-1.25">
                        <img src={Reach} alt="Reach icon" />
                        <p className="text-neutral-500 text-sm font-normal leading-normal">99.6K</p>
                    </div>
                    <img src={Share} alt="Share icon" />
                    </div>
                </div>
                </div>
                <div className="flex py-2 px-4 items-start gap-4 self-stretch border-b border-b-neutral-700">
                <img src={UserAvatar} className="flex-shrink-0" />
                <div className="flex flex-col items-start gap-2 flex-1 flex-shrink-0 w-0">
                    <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex items-center gap-2">
                        <p className="text-neutral-50 text-base font-medium leading-normal">Sanika Suryawanshi</p>
                        <p className="text-neutral-500 text-base font-normal leading-normal">@Sanika_0305 • 10h</p>
                    </div>
                    <p className="text-neutral-50 text-15 font-normal leading-normal self-stretch">
                        I'm entering my relaxation era.
                    </p>
                    </div>
                    <div className="flex py-3 justify-between items-center self-stretch">
                    <div className="flex items-center justify-center gap-1.25">
                        <img src={Comment} alt="Comment icon" />
                        <p className="text-neutral-500 text-sm font-normal leading-normal">11</p>
                    </div>
                    <div className="flex items-center justify-center gap-1.25">
                        <img src={Retweet} alt="Retweet icon" />
                        <p className="text-neutral-500 text-sm font-normal leading-normal">270</p>
                    </div>
                    <div className="flex items-center justify-center gap-1.25">
                        <img src={Heart} alt="Heart icon" />
                        <p className="text-neutral-500 text-sm font-normal leading-normal">1869</p>
                    </div>
                    <div className="flex items-center justify-center gap-1.25">
                        <img src={Reach} alt="Reach icon" />
                        <p className="text-neutral-500 text-sm font-normal leading-normal">99.6K</p>
                    </div>
                    <img src={Share} alt="Share icon" />
                    </div>
                </div>
                </div>
            </main>
        </div>
    )
}

export default Home;