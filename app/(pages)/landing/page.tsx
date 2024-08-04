import Sections from "@/app/components/landing";
import SectionsMobile from "@/app/components/landing/sections-mobile";
import { headers } from "next/headers";

// export default function SchoolOfAccel() {
//     const headersList = headers();
//     const userAgent = headersList.get('user-agent') || '';
//     const isMobile = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
//     return (
//         <div className="content mx-lg-5">
//             <div className="container">
//             {isMobile ? <SectionsMobile /> : <Sections />}
//             </div>
//         </div>
//     );
// }

interface SchoolOfAccelProps {
    isMobile: boolean;
}
const SchoolOfAccel: React.FC<SchoolOfAccelProps> = ({ isMobile }) => {

    return (
        <div className="content mx-lg-5">
            <div className="container">
                {isMobile ? <SectionsMobile /> : <Sections />}
            </div>
        </div>
    );
}
export default SchoolOfAccel;