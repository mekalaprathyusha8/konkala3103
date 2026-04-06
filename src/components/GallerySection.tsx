import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import pic2 from "@/assets/495293089_1258981669571747_4693515321883132767_n.jpg";
import pic3 from "@/assets/546592938_1373223274814252_7216387905622457055_n.jpg";
import pic4 from "@/assets/625330018_1503999585069953_3848974437494060330_n.jpg";
import pic5 from "@/assets/627196450_1503946931741885_3731461679605161424_n.jpg";
import pic6 from "@/assets/628038501_1505957138207531_3798120997786308507_n.jpg";
import pic7 from "@/assets/651044007_1535504571919454_8464848720093164676_n.jpg";
import picA from "@/assets/download.jpg";
import picC from "@/assets/download1.jpg";
import picB from "@/assets/images.jpg";

// New uploaded paintings
import newPainting1 from "@/assets/new-painting-1.jpg";
import newPainting2 from "@/assets/new-painting-2.jpg";
import newPainting3 from "@/assets/new-painting-3.jpg";
import newPainting4 from "@/assets/new-painting-4.jpg";
import newPainting5 from "@/assets/new-painting-5.jpg";

import wsPic1 from "@/assets/workshop-1.jpg";
import wsPic2 from "@/assets/workshop-2.jpg";
import wsPic3 from "@/assets/workshop-3.jpg";
import wsPic4 from "@/assets/workshop-4.jpg";

const GALLERY_IMAGES = [
  { src: "https://lh3.googleusercontent.com/p/AF1QipOb2ScziwHt-JCb7LZSAmndL0BQ_j0FP3_djZS3=w1024", label: "Painting" },
  { src: wsPic1, label: "Workshop" },
  { src: wsPic2, label: "Workshop" },
  { src: wsPic3, label: "Workshop" },
  { src: wsPic4, label: "Workshop" },
  { src: pic2, label: "Pottery" },
  { src: pic3, label: "Painting" },
  // Newly added paintings
  { src: newPainting1, label: "Painting" },
  { src: newPainting2, label: "Painting" },
  { src: newPainting3, label: "Painting" },
  { src: newPainting4, label: "Painting" },
  { src: newPainting5, label: "Painting" },
  { src: pic7, label: "Sketching" },
  // { src: picA, label: "Sketching" },
  { src: picB, label: "Painting" },
  { src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerQYARU4jfRr2lCCSpYNmKEQanQYGFFxl4P-QjGSel8R5aIkVDdI9pNes3OhsLma_C6YBHQVi2seYL9BZgI_jCM6F2nW8_ByP4PYRHJ7wYsz78JzQ_doulLXfBMYIAq9siXYKU=w1024", label: "Painting" },
  { src: "https://scontent.fhyd14-5.fna.fbcdn.net/v/t39.30808-6/493602058_1251056827030898_2846482245034385445_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=WEnjb4fahQsQ7kNvwE9pm5Z&_nc_oc=AdpPi4P4SNpxa9O0PM2l5rv0Y1QEobYTR4sP9y4x8LLtFlaVRjjTeZU5CGt5L-VGFg-rAFJBGca0Ay_fPOWrOqRX&_nc_zt=23&_nc_ht=scontent.fhyd14-5.fna&_nc_gid=FusdvUJ4UZibDtN7PAHobA&_nc_ss=7a389&oh=00_AfxxpzdfYj9L0wZuayM3hvXbnxIjiy8VWzR8yUGA4WkBRA&oe=69D1EC67", label: "Painting" },
  { src: "https://scontent.fhyd14-4.fna.fbcdn.net/v/t1.6435-9/56276026_2143072242452668_8755627064410767360_n.jpg?stp=c296.0.560.560a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=Yav2NsNsLl8Q7kNvwG8311y&_nc_oc=AdqhWUTRbRWHR81TAOBll51Na7No6t1DZw4OAII674hhVIT7qKETaqiX7EjSunNoJ1NIvj8p8iSFu7PAk132nJCg&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&_nc_gid=pTJdJdKV0-t6sjddDxM1Sw&_nc_ss=7a389&oh=00_AfzIkmk0xSigNBvNgwfha-yZ8herufoEDl3LDOcx247CwQ&oe=69F35D98", label: "Painting" },
  { src: "https://scontent.fhyd11-3.fna.fbcdn.net/v/t39.30808-6/657045560_1552118590258052_7082879608941914848_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=a934a8&_nc_ohc=20Zo74jiWNUQ7kNvwHir-RE&_nc_oc=Adrz4YHly1WSIaDOjs8_4AbWjZtS7zj8EZ6YB7wRzf9Cn7KgRllPlzhrT6viqJ93-Fc&_nc_zt=23&_nc_ht=scontent.fhyd11-3.fna&_nc_gid=56IeRRTsl9d3DcyAr5_QlA&_nc_ss=7a389&oh=00_Af3WXuZgBs3-B2UdMNZX3o4iq_x4zQw6xCYw4DbTVOcjSg&oe=69D2BE06", label: "Painting" },
  { src: "https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/484900016_1216383930498188_3536249595592758735_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=MIyoCrztn1YQ7kNvwH3OBfh&_nc_oc=AdrunzFpvG5-LsyiwmCZdMp4IcvHctbGILVqfDxhoM9erxosnFK4EOHYq12Rc589xC4&_nc_zt=23&_nc_ht=scontent.fhyd11-2.fna&_nc_gid=NQPswnFSOtA3zUMClmhlaQ&_nc_ss=7a389&oh=00_Af2zBchbwRg7XzxeedsazGfRnd__-kHx6wOikqrUbNiaLA&oe=69D2B36F", label: "Painting" },
  { src: "https://scontent.fhyd11-3.fna.fbcdn.net/v/t39.30808-6/484810974_1215132793956635_3280864834413562387_n.jpg?stp=c149.0.1750.1750a_dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=a934a8&_nc_ohc=-LMHh75LF7MQ7kNvwFLngNH&_nc_oc=AdplkN-AbQymbzxohLU8eXykrQShXHZp9WLF3xbLM29MVHZvRsmsixvEjRKjqHEA3m0&_nc_zt=23&_nc_ht=scontent.fhyd11-3.fna&_nc_gid=_VsL1FLc1KDqUEpdbmq7PQ&_nc_ss=7a389&oh=00_Af1DK9hT9Im2VG0COvhurpkBh-c2OyZgRUNQS2tT7afTHg&oe=69D2DED1", label: "Painting" },
  { src: "https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/483108195_1213051947498053_6055634957114202852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=4NgvKk1Lm5cQ7kNvwHgROsa&_nc_oc=AdoXLLZeHEuCSas05oUiKTXu7w1QyPcG1Iav4OiMPjYqFA-aG1VBM6vFSp9Qs_q1wXM&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=Ascc3Fekvqd_io-kyvs0UA&_nc_ss=7a389&oh=00_Af21mN6Iq2XFY5xhZh05mws1rcbVIvwqFg2ryi-IFpnvCA&oe=69D2BF68", label: "Painting" },
  // { src: "https://scontent.fhyd14-3.fna.fbcdn.net/v/t1.6435-9/71284910_2453486168077939_4835319025590337536_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Lp-eRMWEwfcQ7kNvwEik1-v&_nc_oc=AdpAM5sxmdu6PA-dF2LUMfaqtCKCVnvuFOJ02R8A21-PkTsNJf21pF6RsaX4RVB9PiRMVTSSkVDY3eBw6WB6S1jG&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=OT91AITtAR7uJ7wAvHnTAg&_nc_ss=7a389&oh=00_AfxSu2UNRhWOnmgvKWUvmy4UNMeJUuGRBJZp-BV7pcSS6g&oe=69F377E6", label: "Painting" },
  // { src: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/494748818_1258981672905080_1204047423563521746_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=a934a8&_nc_ohc=NVxVX9d202gQ7kNvwHjeV_1&_nc_oc=Ado0l5WLBjgH2EUoKKlm2N31nX68Va4meXtVml2TNcb-4Z2ztU7390VEjpaWAmVyrCxao4Fz2pvwl_gCwSUR0ckp&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=d0yaCm2-PiSafgZb_Grv5A&_nc_ss=7a389&oh=00_AfxOduQsS5HmmPlH43_Q0uZT4W4HGfmhlE1ICFbGv5azjA&oe=69D1BCC6", label: "Painting" },
  // { src: "https://lh3.googleusercontent.com/p/AF1QipM54cp9KScyjSNuuzS-6oaKYgdlErF4ec4ZhMrs=w960-h736-k-no", label: "Painting" },
  // { src: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/72422983_2491705240922698_3649342615154851840_n.jpg?stp=c0.89.1010.1010a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=a934a8&_nc_ohc=dXnxjDUd_28Q7kNvwExqcpJ&_nc_oc=Adpjtm4vEWVGU8UCHtxq6gLpFlWqva5z4TtDv1vCs5PynuTHr4l5yAgQUU2weTZFOPww6HQ4mp8ZuCg9_2npAL6Q&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&oh=00_AfyEgGl9QTvwAF493yQW0TIaACdLSfCpzAkKV5jfvtotLQ&oe=69E9A71F", label: "Pottery" },
  // { src: "https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.6435-9/59064527_2194297890663436_6576879653678481408_n.jpg?stp=c0.79.720.720a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=CzUohIDbOaAQ7kNvwEZfNnF&_nc_oc=Adoz5KthYfiALlrXJ6KNOqzDAVNJSgXiIvR7EwTJiEBjLLf0HBCgpMvJ86-h2rt8tv5nJTA7brKZQhoqrHzsBGGl&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&oh=00_AfzuHpUcrhpgj11VCM6rtL7ZQJxkI-X4OfpV3hqF9JVJnQ&oe=69E9B087", label: "Pottery" },
  { src: "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/494701658_1258981566238424_7561463104744936502_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=a934a8&_nc_ohc=FYA7-fbnon0Q7kNvwGosbO9&_nc_oc=AdrAj9jpHrhafUH1vdlzt-x8VkmsRI2l5ax1hUZrPSS5UyZ3p4LJop04P1bt4SGR4SOsaqvKnLoxBB02zp0pt7Xo&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=Mrg0EPmkFuy7AcvpQyrA-g&_nc_ss=7a389&oh=00_Afxzbx5niakxjTwhMv5iHlpXc9bw7UIhwRN8JgzIFgeD7w&oe=69D1AD75", label: "Pottery" },
  { src: "https://lh3.googleusercontent.com/p/AF1QipP8kE9-cVQhJ65nYFRveUFV899tcQ6T0ER8aApJ=w1024", label: "Pottery" },
  { src: "https://lh3.googleusercontent.com/p/AF1QipPvBgplkJ8GuOMPE8-nqdXRdxidkOQQWedvOnLJ=w1024", label: "Pottery" },
  { src: "https://lh3.googleusercontent.com/p/AF1QipND3tXOmcw9biKf4-Dcp7jx2lKZ5zH0YBvjNZWi=w1024", label: "Pottery" },
  { src: "https://lh3.googleusercontent.com/p/AF1QipN-aKcbB1jInZDeY25MiSP6-pdRAYdVL_DCjUid=w1024", label: "Pottery" },
  { src: "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/494175355_1258981552905092_5879755252421470842_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=a934a8&_nc_ohc=c8V2FsL9aEsQ7kNvwHYYmq0&_nc_oc=AdoajDMPsfLF0sUeOvAJyjiLH16pCa8yogPei_73Qv9ZJG-IQsCRdMInFiisB0wzjcQml5Sm8bafvqtOgJrDE3G2&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=Mrg0EPmkFuy7AcvpQyrA-g&_nc_ss=7a389&oh=00_AfxttY5hzueLYFSNfPXkKXLG1whQJBE8cBPpGCl9NZj3wA&oe=69D1AE24", label: "Pottery" },
  { src: "https://scontent.fhyd14-4.fna.fbcdn.net/v/t39.30808-6/494585213_1258981466238434_1827653750028962866_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=a934a8&_nc_ohc=7FZLDTn2q1cQ7kNvwHcbWpZ&_nc_oc=Ado7nS3huSZCv40YVkjzdKYJxBrCti0IFDX1KyDwYJfK_61hhL-BRE2XfZEfto4szj9cjFFHGEPs1zvOQN17CZy3&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&_nc_gid=Mrg0EPmkFuy7AcvpQyrA-g&_nc_ss=7a389&oh=00_AfyiZtMjH7alDdiCQDxyh4fr3BzpNwS_VI8VjXnoE1y7oA&oe=69D1BE9E", label: "Pottery" },
  { src: "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/495098092_1258981556238425_2330936690759260100_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=a934a8&_nc_ohc=tBm25p-tHA0Q7kNvwE-zCIp&_nc_oc=AdolDcy6-ZLJrdZzqXJNWizDKJ-FJHFbxTvGfL7-c0mCLFttAbORM_YjGl67gKUmpUmsRYqk5RH_VdGYpb6tbxoz&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=d0yaCm2-PiSafgZb_Grv5A&_nc_ss=7a389&oh=00_AfzvuNnBl1SdeYQYPANiVY8xRhy_lzmmf-vjSWRRhNv8xw&oe=69D1DF32", label: "Pottery" },
  { src: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/494748818_1258981672905080_1204047423563521746_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=a934a8&_nc_ohc=NVxVX9d202gQ7kNvwHjeV_1&_nc_oc=Ado0l5WLBjgH2EUoKKlm2N31nX68Va4meXtVml2TNcb-4Z2ztU7390VEjpaWAmVyrCxao4Fz2pvwl_gCwSUR0ckp&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=d0yaCm2-PiSafgZb_Grv5A&_nc_ss=7a389&oh=00_AfxOduQsS5HmmPlH43_Q0uZT4W4HGfmhlE1ICFbGv5azjA&oe=69D1BCC6", label: "Pottery" },
  // { src: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/59529753_2194297363996822_3077750229756280832_n.jpg?stp=c0.79.720.720a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=g33ubFySUQMQ7kNvwFDUr0j&_nc_oc=AdrnD690lgnhN9DeMzruS0a-JDxjE5wxiIHzFq1Zb2qHf3qaOlB_YXG_C2Tb3PsCGC8J72WIWw_kxgAghNKpAQQs&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&oh=00_Afx2N5PKp7zmdN76hyemNLnVM1ZLwk6CvOFcV8jDZQFD1A&oe=69E989FF", label: "Sketching" },
  // { src: "https://scontent.fhyd14-4.fna.fbcdn.net/v/t1.6435-9/58594776_2184989384927620_983611991128014848_n.jpg?stp=c0.103.648.648a_dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=GvfK6qqsw64Q7kNvwHj9Ixu&_nc_oc=AdrtZGMErq9bf2CfjQssBYA-MNkra2Hp9tmJGVd1YWdy9ztOsxCkwz3jjMdqfOkBuJbZXN4p8SdImG5q2rJchGLL&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&oh=00_AfzBeWQCHa76ssg2_UnSZFv7gB_tYauPQ4fbxYRK3Kqrrg&oe=69E9A129", label: "Painting" },
  // { src: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/57486528_2172559309503961_7150701135693611008_n.jpg?stp=c210.0.540.540a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=0OzEIofj5AQ7kNvwFppgDk&_nc_oc=AdoAp-20ybmOO0OmQm6ypcn_eXiDVE45yq8ykoCtH75X50QOTm5YJzIB0ov1emiIyUefLPeTwt6TnTCyJbq8Yoq6&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&oh=00_Afzw4a48AUaUjQS3U5YoUnQpmODd51afvCc2OI9xXN3fWA&oe=69E98536", label: "Sketching" },
  { src: "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/481826105_1206310188172229_4146503696780198184_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=I3Cg_CkRnXkQ7kNvwHTB-yB&_nc_oc=AdpECAypqnjJkTrwYO9CmTl_DogHdh6vpZatlG4k60U4C3zzPn_ZpXmoGbo_J5Rk2NFUc5qzikV_enmngo4ORBOL&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=VHAoAgZQ7eqWSndnzoKW1g&_nc_ss=7a389&oh=00_AfxdzDmlyZqcP1gf_cosDLe7r2niiJahv5A0Jyi0rJjQ2w&oe=69D1BB66", label: "Sketching" },
  { src: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/486311364_1220431180093463_1068536217577745479_n.jpg?stp=c0.135.1639.1639a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=a934a8&_nc_ohc=Phwf1CX5g1wQ7kNvwG7X_fr&_nc_oc=AdpIWrF-lH2J8IToQd6qwHR1vNlML2ewx0ZSz37gtvZl03ejCFcd346WbSdNmgHPuVapdGLMvnW1y0_jrp0-tD1P&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=Hke0yh1UQTld8zq1EWA81w&_nc_ss=7a389&oh=00_AfyI_su5jAhsKznkEkzB_3pblPixeZ_t32tu8LQGkY7FWA&oe=69D1E12E", label: "Sketching" },
  { src: "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/494941425_1258554109614503_8820184236406424388_n.jpg?stp=c0.95.1152.1152a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=a934a8&_nc_ohc=FXvWoOy_AvgQ7kNvwEvTMUR&_nc_oc=AdqhsvcQ1Ndx0glEA5P1rXQNQxtsAq2S2F7KUmydQpIaltF5SZTB0OBCtiaXwzP8oWBuKggaVpCxEd-Ubcnndsk2&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=d0yaCm2-PiSafgZb_Grv5A&_nc_ss=7a389&oh=00_AfwN0iJSg6uHJlDGtLuq9yci-3j01_x5ageVAYEsV74wYQ&oe=69D1AE63", label: "Sketching" },
  { src: "https://scontent.fhyd14-3.fna.fbcdn.net/v/t1.6435-9/71284910_2453486168077939_4835319025590337536_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Lp-eRMWEwfcQ7kNvwEik1-v&_nc_oc=AdpAM5sxmdu6PA-dF2LUMfaqtCKCVnvuFOJ02R8A21-PkTsNJf21pF6RsaX4RVB9PiRMVTSSkVDY3eBw6WB6S1jG&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=OT91AITtAR7uJ7wAvHnTAg&_nc_ss=7a389&oh=00_AfxSu2UNRhWOnmgvKWUvmy4UNMeJUuGRBJZp-BV7pcSS6g&oe=69F377E6", label: "Sketching" },
  { src: "https://lh3.googleusercontent.com/p/AF1QipOc7A654yHaZswEX7Q0AiC7DqbshrFxUl2MZW4Z=w1024", label: "Sketching" },
  // { src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoFDPeUNG5UB4Sl8UNgZGysZ0EzWZaatRbnxTuARddJGLpyBneq5lDEUX8DqBNT703xlNBWbEQWDQsd1kDltlFRVkdI_q36P2f63b_j41=w1024", label: "Sketching" },
  { src: "https://lh3.googleusercontent.com/p/AF1QipOiXgmml2QhQ3EknAaZSWHWc9TjxzPIRVNE3Id_=w1024", label: "Sketching" },
  // { src: "https://lh3.googleusercontent.com/p/AF1QipMEvCOYiuNQ5BJ0SMdwBZKTf7c-ux0gkEX6Bbjq=w1024", label: "Painting" },
  { src: "https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.6435-9/55882064_2143072129119346_4486502436306944000_n.jpg?stp=c0.195.560.560a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=LaKsoXORvlkQ7kNvwGGk-LC&_nc_oc=AdpW6ZHBpppcT4TwV1LS6rlJaAGEd1xZlRn4At5QGempUM3Uvmt7E71z7fuVKtLo6KgUoJV-7i7vrui8Vxy5djIM&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=pTJdJdKV0-t6sjddDxM1Sw&_nc_ss=7a389&oh=00_Afy4EkFebGbMMqtbVgd6x15BVyIB8-iCIA8bSsa7gErI8w&oe=69F36804", label: "Music" },
  { src: "https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.6435-9/54799120_2132926656800560_5162905587234635776_n.jpg?stp=c120.0.720.720a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=oJ34bVyZxpYQ7kNvwFu-YeS&_nc_oc=Adq8YqhF6stIGfWALSK24ePR2fIhxbPyxLHaswICkDAvX4kV7VbojZUpecRcCwEL42SJo1tKHI9PGgv9CejgL5vR&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=a1N6kFiQJJ6_rbbrTSdrTw&_nc_ss=7a389&oh=00_Afx8RFJW6v4GjGabIo4NSwIBBVa2hb1iCCBEgMlIVgzFbA&oe=69F36F79", label: "Music" },
  { src: "https://scontent.fhyd14-4.fna.fbcdn.net/v/t1.6435-9/50304679_2042263005866926_1268391691769872384_n.jpg?stp=c281.0.1125.1125a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=a934a8&_nc_ohc=b3lVFlEUPuUQ7kNvwGjxtNO&_nc_oc=AdpUw3M4VU4y6vrjl3Hgq_8ytE6IrO3EnUjGVVY_AQbjAlFDBx-xpy6Dea-vWwZ8v2F4Ry4zPLK1GhxIjNdFoBXJ&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&_nc_gid=Z2870vcO0rI1POor-a7hpw&_nc_ss=7a389&oh=00_AfxEHun3wTQdQBy_NG7wSJNutyvtqq57UZdVH3EK6xzJFg&oe=69F38039", label: "Music" },
  { src: "https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.6435-9/50632969_2042248785868348_6957858177845035008_n.jpg?stp=c281.0.1125.1125a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=a934a8&_nc_ohc=BWopUalnad4Q7kNvwHAl0qe&_nc_oc=Adr_WRmrC4siOooyH9f-6XzB3oOuMwkiJzosbZaXZL6gNyv33cYQoGo7qcP_9rBwrSwG3hffFw2mJErNVjcyZSG2&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=csbb62NoDvUnOGpZEhMRfg&_nc_ss=7a389&oh=00_AfzWox8RiS7Nrtuz-AXCMEylCrc076UbH_ZQkzmOAX3mbg&oe=69F35271", label: "Music" },
  { src: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/50024015_2042235715869655_3392052259985555456_n.jpg?stp=c281.0.1125.1125a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=a934a8&_nc_ohc=tEEdZQ_RXlAQ7kNvwEclZhM&_nc_oc=AdqBoPJ51P4DT4sYU7NBuGGLooSE30HUjlrkmJ4HYbLlZELd7TSzN63MHDK_btvuBz1vVy36DH-xAWIjslDxEm8N&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=LFEoVM7ZQLKObdtN-G5YuA&_nc_ss=7a389&oh=00_Afxi_o7szNNyG6niORdSqIu0P8MwlfHPx6apHvboWuBS2w&oe=69F35A6A", label: "Music" },
  { src: "https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/482216472_1207193834750531_734055920074418299_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=VpULSgXkwNsQ7kNvwHDjAL-&_nc_oc=AdphFPpAnw4LgXo43-NtLQZb-dFF8jm6KX33vOL_J5r-a-KDGCabA9XlGvU-FxOFl6c&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=e1pug5QQnOchijqeYxFHXA&_nc_ss=7a389&oh=00_Af3aj4O_vXZxddZZTS89MKQJ9Aou02JxbHby14QOfBVQGg&oe=69D2B7F6", label: "Music" },
  { src: "https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/482253266_9343185972441223_3009941595899791117_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=jpeLph6oQIsQ7kNvwF9cxC_&_nc_oc=AdqJugMc8pbeoSuZ1qbuw01EY863oS_1QUtEAiEu4a7gLzpxZNBNFm1oG8fhhC0tFuQ&_nc_zt=23&_nc_ht=scontent.fhyd11-2.fna&_nc_gid=bhrEM83sXLhwaEZKNzuwQQ&_nc_ss=7a389&oh=00_Af39-3fKj0K9B518xWD1w8QqiI_u1rPYAxWXeI4k83IUFA&oe=69D2CA6D", label: "Music" },
  { src: "https://scontent.fhyd11-2.fna.fbcdn.net/v/t1.6435-9/50444198_2042258249200735_6589701857633894400_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=gfRGu6656sYQ7kNvwHkv1sT&_nc_oc=AdrpUNbthcf9C993YtkVrOuSjw9A7tGzW1OsDZmrGgLud9X9en7QEuOfd_0N9QCRaNA&_nc_zt=23&_nc_ht=scontent.fhyd11-2.fna&_nc_gid=vBrKzYxzeRlNgqmBI3VxKA&_nc_ss=7a389&oh=00_Af0Xj11xdamMxURUmGJdR4oaAuJWFT1FPWQRJWd7lh8q-A&oe=69F45248", label: "Music" },
  { src: "https://scontent.fhyd11-2.fna.fbcdn.net/v/t1.6435-9/36281315_1728925817200648_7557832669208248320_n.jpg?stp=c160.0.960.960a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=L6JPa8031bgQ7kNvwEGgYLf&_nc_oc=AdrX2QyxaKeL9XgiyZKY4AlkLIGPdFbsu68n1L7Zd5-SkljOy0iFu1OOgOsJvp8J2m8&_nc_zt=23&_nc_ht=scontent.fhyd11-2.fna&_nc_gid=LhQ9o9Rv3WYQAL5iUJ4yIw&_nc_ss=7a389&oh=00_Af1wU85jLd0zvvaFSKO29jFzbXX-FyP8csgeHN3I1iecGQ&oe=69F46597", label: "Music" },
  { src: "https://scontent.fhyd11-2.fna.fbcdn.net/v/t1.6435-9/50286137_2042250142534879_2613097560750948352_n.jpg?stp=c281.0.1125.1125a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=a934a8&_nc_ohc=fBvbk4GmZ9AQ7kNvwHST7Qv&_nc_oc=AdqkIdokjCwNqgfdmZMnqSw9QYF6_R9u6Lrx1N2Epcd54tykD1iD0KLT1rv4x0oAf1c&_nc_zt=23&_nc_ht=scontent.fhyd11-2.fna&_nc_gid=y-6ybP8LWtbiSiGxdO87ig&_nc_ss=7a389&oh=00_Af0kqrpmG3ptLn2HFjLPMNToUuKFGF99_Z2g7T4A-0qKLQ&oe=69F472DB", label: "Music" },
  { src: "https://scontent.fhyd14-4.fna.fbcdn.net/v/t1.6435-9/50412329_2042219159204644_3800965229970456576_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=xlDnCBZkeQsQ7kNvwFz6klI&_nc_oc=AdoueP6Q705orQdbEPflPCR54XLT_mCQPmghPATDXlLSTm3PaZUb66eu3A4j0cz-mwOZTM61yhCqFcfvWmW279-U&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&_nc_gid=RqJC4v1-fdhsObpk8NK0Lg&_nc_ss=7a389&oh=00_AfzV8iLDH5OklvviH8jQ9mzJnjW67J7wMxvvblVW-VEbLA&oe=69F37140", label: "Workshop" },
  { src: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/511101424_10072444439515369_7460897985157658131_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=kGYiRAqi10YQ7kNvwFhqQJ_&_nc_oc=AdqEXbTacrQ6WgrgrmPT5iOsphYtlUZLJGFuvjawkU6ZYzmmk-z3daRGokV1mK7eTc_3eDiPiof_3rSSCsuLxo0h&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=S1NWq9aIuL3mCxJOlAFqbw&_nc_ss=7a389&oh=00_AfyGJSzvvPeLQp-zrirlMBC8OF2B4UJYNlbX_b6CcW76CA&oe=69D1CD11", label: "Workshop" },
  { src: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/625330018_1503999585069953_3848974437494060330_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=bkly8qLMzDIQ7kNvwHxovLi&_nc_oc=AdpejixCZEyMNxKKlW_1LrbyBXkk-89pY4mK-JqLf2kfkoV6OvCv3TmS9tiXoIGVaVURL3Vp2_ejmIrR5ukyURm2&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=qCpcjtN7sZ_Qm4xUsHIVCA&_nc_ss=7a389&oh=00_AfyXRA27b6XoOxQ1W0cW6Nj6rvdGdQz8uVJQeatxPaZfNQ&oe=69D1DAEB", label: "Workshop" },
  { src: "https://scontent.fhyd14-5.fna.fbcdn.net/v/t39.30808-6/492356986_1251135083689739_1255324562041729510_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=a934a8&_nc_ohc=r1xa1u5B4R0Q7kNvwGpDSMf&_nc_oc=AdpJ63T-tsO4MsDLotk0NKJZPGdS_z_GsGeN30BLaeBpLZC111Q1-0my1SGXxGHEn9O1aX6mlV4vdKVP6JZtrZ00&_nc_zt=23&_nc_ht=scontent.fhyd14-5.fna&_nc_gid=cCTrSx45MPPU87WkOHBO2Q&_nc_ss=7a389&oh=00_AfyPvR3KdWTCMmiOX0zTHe4Bk2K15EjfSVex4E_dzDKN_Q&oe=69D1C1C5", label: "Workshop" },
  { src: "https://lh3.googleusercontent.com/p/AF1QipO9M6t8cqUT14niDnEg1f9amr3rmdcVtiu4XbRo=w1024", label: "Workshop" },

];

const FILTERS = ["All", "Painting", "Sketching", "Pottery", "Music", "Workshop"];
const LABEL_COLORS: Record<string, string> = { Painting: "#8B1E2D", Sketching: "#5C0F1A", Pottery: "#B7323C", Music: "#1E6B8B", Workshop: "#D4AF37" };

const GallerySection = ({ hideHeader }: { hideHeader?: boolean }) => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const navigate = useNavigate();

  const filtered = active === "All" ? GALLERY_IMAGES.filter(g => g.label !== "Workshop") : GALLERY_IMAGES.filter(g => g.label === active);

  return (
    <section id="gallery" style={{ background: "linear-gradient(180deg, #EDE8E0 0%, #F7F3EB 100%)", padding: "clamp(60px,8vh,100px) 0", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, transparent, #D4AF37 30%, #E6C65C 50%, #D4AF37 70%, transparent)" }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(32px,5vh,52px)" }}
        >
          {!hideHeader && (
            <>
              <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B1E2D", background: "rgba(139,30,45,0.08)", border: "1.5px solid rgba(139,30,45,0.2)", borderRadius: 50, padding: "5px 18px", marginBottom: 14 }}>
                Student Portfolio
              </span>
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#5C0F1A", marginBottom: 12, lineHeight: 1.2 }}>
                Student <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Artworks</span>
              </h2>
              <p style={{ color: "#777", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", maxWidth: 500, margin: "0 auto 24px" }}>
                A glimpse into the creative journey of our students — from first brushstrokes to masterpieces.
              </p>
            </>
          )}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginTop: hideHeader ? 0 : undefined }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActive(f)} style={{ padding: "8px 22px", borderRadius: 50, fontFamily: "Poppins, sans-serif", fontSize: "0.84rem", fontWeight: 600, cursor: "pointer", transition: "all 0.25s", background: active === f ? "linear-gradient(135deg, #8B1E2D, #B7323C)" : "rgba(255,255,255,0.8)", color: active === f ? "#D4AF37" : "#8B1E2D", border: `2px solid ${active === f ? "transparent" : "rgba(139,30,45,0.25)"}`, boxShadow: active === f ? "0 4px 16px rgba(139,30,45,0.3)" : "0 2px 8px rgba(0,0,0,0.06)" }}>
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div key={img.src} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.3, delay: i * 0.03 }}
                style={{ position: "relative", cursor: "pointer", borderRadius: 14, overflow: "hidden", background: "#2E0A12", boxShadow: "0 4px 18px rgba(0,0,0,0.12)", border: "1.5px solid rgba(212,175,55,0.12)" }}
                className="gallery-card" onClick={() => setLightbox(img.src)}
              >
                <img src={img.src} alt={img.label} loading="lazy" referrerPolicy="no-referrer" crossOrigin="anonymous" className="gallery-img"
                  style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                  onError={e => { e.currentTarget.style.opacity = "0.3"; }}
                />
                <div className="gallery-overlay" style={{ position: "absolute", inset: 0, background: "rgba(28,4,8,0.65)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, opacity: 0, transition: "opacity 0.3s" }}>
                  <ZoomIn size={26} style={{ color: "#D4AF37" }} />
                  <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.72rem", color: "#E6C65C", letterSpacing: "0.1em" }}>{img.label}</span>
                </div>
                <div style={{ position: "absolute", top: 8, left: 8, background: `${LABEL_COLORS[img.label] || "#8B1E2D"}CC`, borderRadius: 50, padding: "2px 9px", backdropFilter: "blur(6px)" }}>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.62rem", fontWeight: 600, color: "#F0D080", letterSpacing: "0.08em" }}>{img.label}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ textAlign: "center", marginTop: 36 }}>
          <button onClick={() => navigate("/gallery")} className="gallery-view-btn"
            style={{ background: "linear-gradient(135deg, #5C0F1A, #8B1E2D)", color: "#D4AF37", border: "2px solid rgba(212,175,55,0.5)", borderRadius: 50, padding: "13px 36px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", letterSpacing: "0.05em", transition: "all 0.25s", boxShadow: "0 4px 20px rgba(139,30,45,0.3)" }}>
            View Full Gallery →
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, background: "rgba(10,3,6,0.93)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(12px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ type: "spring", damping: 25 }}
              style={{ position: "relative", maxWidth: 600, width: "100%" }} onClick={e => e.stopPropagation()}
            >
              <img src={lightbox} alt="Artwork" referrerPolicy="no-referrer" crossOrigin="anonymous"
                style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: 16, border: "2px solid rgba(212,175,55,0.3)", boxShadow: "0 32px 80px rgba(0,0,0,0.8)" }} />
              <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: -14, right: -14, width: 40, height: 40, borderRadius: "50%", background: "#8B1E2D", border: "2px solid rgba(212,175,55,0.4)", color: "#D4AF37", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-card:hover .gallery-img { transform: scale(1.07); }
        .gallery-card:hover .gallery-overlay { opacity: 1 !important; }
        .gallery-card:hover { border-color: rgba(212,175,55,0.35) !important; }
        .gallery-view-btn:hover { box-shadow: 0 8px 32px rgba(139,30,45,0.5) !important; transform: translateY(-2px); }
      `}</style>
    </section>
  );
};

export default GallerySection;
