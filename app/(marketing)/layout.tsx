import { Navbar } from "./_components/navbar"
import { Footer} from "./_components/footer"

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full bg-slate-300">
            <Navbar />
            <main className="pt-40 pb-20 bg-slate-300">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MarketingLayout;