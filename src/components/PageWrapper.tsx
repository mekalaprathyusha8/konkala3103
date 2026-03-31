import { ReactNode } from "react";

/* 
  Unified color palette:
  --primary:   #8B1E2D  (luxury red)
  --secondary: #B7323C  (rich red)
  --accent:    #D4AF37  (gold)
  --dark:      #1C1C1C
  --bg-light:  #F7F3EB
*/

// Each inner page gets the same dark maroon base with a 40% opacity art-themed overlay
const PageWrapper = ({ children, page }: { children: ReactNode; page?: string }) => {
  // Decorative background art image per page at 40% opacity
  const pageArtMap: Record<string, string> = {
    courses:      "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/71742489_2457135924379630_5940563537058332672_n.jpg?stp=c0.111.943.943a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=a934a8&_nc_ohc=JOS_b9xS0QgQ7kNvwETPCkx&_nc_oc=Adr-LRREXzObqTkNnB-TKw2CIRsfbyKdDyndhC2fOo0-1kzYtQXSjuzJkpXhU5Mp2I_g9XrpudTkLTkNG1_Gb29G&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&oh=00_AfwjarBsVD8-0qm5OUiOQw83Dp6ReXf4Prf35vvMsZq7NA&oe=69E97C58",
    gallery:      "https://scontent.fhyd14-4.fna.fbcdn.net/v/t39.30808-6/484810974_1215132793956635_3280864834413562387_n.jpg?stp=c149.0.1750.1750a_dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=a934a8&_nc_ohc=hXFwd2RCr70Q7kNvwHRUE2l&_nc_oc=AdqSsVxgLMgFqROGNYimNIWc0_2zUuUa9VCmUN91LXxC0CBkl68oOJDuqd7LkcT23LvUg9nDKKLz4diNVmhDBSD8&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&oh=00_Afzz9S1dK8AWe02I1tjhqGSQaZhF5sDLQyw6vfCSJrTs5Q&oe=69C7E251",
    workshops:    "https://scontent.fhyd14-3.fna.fbcdn.net/v/t1.6435-9/72422983_2491705240922698_3649342615154851840_n.jpg?stp=c0.89.1010.1010a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=a934a8&_nc_ohc=dXnxjDUd_28Q7kNvwExqcpJ&_nc_oc=Adpjtm4vEWVGU8UCHtxq6gLpFlWqva5z4TtDv1vCs5PynuTHr4l5yAgQUU2weTZFOPww6HQ4mp8ZuCg9_2npAL6Q&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&oh=00_AfyEgGl9QTvwAF493yQW0TIaACdLSfCpzAkKV5jfvtotLQ&oe=69E9A71F",
    achievements: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/117648420_3219599281466620_8979882187906922778_n.jpg?stp=c190.0.1061.1061a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ibBE10W96W0Q7kNvwFmfVDV&_nc_oc=AdrlkbxLe6zKVP87CH4TR_oBVx6aypK5iYQQX6a8_En7_HctmpdSZJDzpKCfVHYuUZe7a-3iVyQOc27CJurnnUT4&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&oh=00_AfyPeBoC2P0q5n02Yi9S3Kt3DLUWaiQwVlEq3YtxJ16nLA&oe=69E98E3D",
    testimonials: "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/486104455_1218789126924335_5072669824661294486_n.jpg?stp=c0.70.1836.1836a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=a934a8&_nc_ohc=XzNBBOlryh0Q7kNvwGezGOJ&_nc_oc=AdrrVvyi1YR8Ac26d3V4DR2HEfOl0t7y29xuHlG25Xl17njyBe0Ea5GZBDDPc-uHAMx7qrJb3ZZp3DO60oPprsTR&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&oh=00_Afw_sN5Mszwj1YG5wiixPIcuNcVU_StKTDpskG14XPU4pA&oe=69C7FB7F",
    faq:          "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/57486528_2172559309503961_7150701135693611008_n.jpg?stp=c210.0.540.540a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=0OzEEIofj5AQ7kNvwFppgDk&_nc_oc=AdoAp-20ybmOO0OmQm6ypcn_eXiDVE45yq8ykoCtH75X50QOTm5YJzIB0ov1emiIyUefLPeTwt6TnTCyJbq8Yoq6&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&oh=00_Afzw4a48AUaUjQS3U5YoUnQpmODd51afvCc2OI9xXN3fWA&oe=69E98536",
    contact:      "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/486311364_1220431180093463_1068536217577745479_n.jpg?stp=c0.135.1639.1639a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=a934a8&_nc_ohc=OqoovLUDfVkQ7kNvwF5Mvxa&_nc_oc=AdqOaBf2OC0vtaJe_nU2kfNDkyM5lwk5D6qbSmbp5HT69S6jdwiJJ3FS7pcCWexk0_Qmi8Q4bkzvjtLaHYzH5v5c&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&oh=00_AfyITm4qGwVIj99r1gqr1AeXmbAN72cQRyEPTlPIYJQ0cQ&oe=69C7FDEE",
    register:     "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/494707965_1258873969582517_579736205801385445_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=a934a8&_nc_ohc=rQGo4RwDzw4Q7kNvwGx08mt&_nc_oc=AdoQBkp93qVr0KaLf37R_eTJbhWa1BlHuOA_hh0UItUtpSC9f6ZG4O-f2-mZ4kxZN8MIa9TqT_EJxpyHD0jlwc1S&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&oh=00_AfyTlql9cOfc11MHuWwerJaJBMO6cDZb-HPNnWFb15fP8A&oe=69C7D983",
  };

  const bgImg = page ? pageArtMap[page] : undefined;

  return (
    <main className="relative page-dark" style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #1A0508 0%, #2E0A12 25%, #3D0E18 50%, #2E0A12 75%, #1A0508 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* 40% opacity art background image */}
      {bgImg && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.08,
          filter: "saturate(0.4) blur(2px)",
        }} />
      )}
      {/* Dark overlay to ensure readability — brings actual bg to ~40% feel */}
      {bgImg && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          background: "rgba(26,5,8,0.6)",
        }} />
      )}
      {/* Radial glows */}
      <div className="fixed inset-0 pointer-events-none" style={{
        zIndex: 0,
        background: "radial-gradient(ellipse at 75% 10%, rgba(160,30,48,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 90%, rgba(107,15,26,0.15) 0%, transparent 50%)"
      }} />
      {/* Grain */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, opacity: 0.035,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        backgroundSize: "200px" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </main>
  );
};

export default PageWrapper;
