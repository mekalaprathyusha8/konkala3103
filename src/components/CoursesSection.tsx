import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import paintingImg from "@/assets/student-painting-ganesha.jpg";
import potteryImg from "@/assets/pottery-class.jpg";
import musicImg from "@/assets/new-guitar-kids.jpg";
import sketchCardImg from "@/assets/new-sketch-dancer.jpg";

const courseGalleries: Record<string, string[]> = {
  "Pencil Sketch Classes": [
    "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/475654247_9112882445471578_8764059543357865086_n.jpg?stp=c0.153.858.858a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=_zclzRtcAOwQ7kNvwH7zeXQ&_nc_oc=AdnD4tLG_vp7dUgpF0W8MNWXzHt2Nplle2BNcOuSORwCorNb1YD5kbbmVYWbC9HlVGMAm0XD-lBQ9SEnA02v56ic&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=-7YfGlVB7R4IXVHS5NxphA&_nc_ss=8&oh=00_Afxao6q8kx-kNWd7QIM7RQx4BdsAZiWtHJGQP7YnrHHz0g&oe=69B9D87C",
    "https://scontent.fhyd14-4.fna.fbcdn.net/v/t39.30808-6/651044007_1535504571919454_8464848720093164676_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=a934a8&_nc_ohc=FWMetbmopyYQ7kNvwHqbWEZ&_nc_oc=AdnrDY0Dv0AB8Bmvpvi4TfFFrgxNbxU4e7RXV87WSDDE2_5ydxp-Ou2GByiAZ7k7nPtGcAn48SWHAnFzpoq07zLI&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&_nc_gid=zhAaFRrVH0sDVJ3oCBEEyA&_nc_ss=8&oh=00_AfyE9O9k8kqWHa5kqXC1a-SpNhZlTwqTWc0kRjXuT3E6KQ&oe=69B9C674",
    "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/628038501_1505957138207531_3798120997786308507_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ftG0aq_WKS0Q7kNvwEjLWCH&_nc_oc=AdmHLLhB4C-KBCvBxz4Rnw1Pe73fEZU1YR_ywb-tpSI3n4XOIoKwX-HVIjLy4qTKl9-_NrNXeMPZ-KtijRZ46aVw&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=phOEjhWRp6vrPmqcPRcC0A&_nc_ss=8&oh=00_Afx12IWJaUR_zd3NCL-dUWZpKnIDcjcvxT890_tO-cTfxw&oe=69B9EAEF",
    "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/625330018_1503999585069953_3848974437494060330_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=bfV53CwJTVkQ7kNvwFIwgwz&_nc_oc=AdliV0WGxVTeQblKDfDyPjhIBs7-SvUPhsOMKzm_S1fKVddq5D2j4SXardRsDswsRhrUPjEktiP5Khh8kDajYeyd&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=phOEjhWRp6vrPmqcPRcC0A&_nc_ss=8&oh=00_AfzSO2XOv8lMTRxHZIGTLe2eLxZUJYZzSzzgCiM5l6EjIQ&oe=69B9E7AB",
    "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/624416420_1502098745260037_1336682562192232059_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=2VFCXEnaCFIQ7kNvwFBFqJ1&_nc_oc=Adl0cLepbj7uEoTiobAu4d_McfpanKHAPolQLcLtCdiMO5qsearkgZV4MWopN9BPqGZPsrnn_3YApWCNaArI7sce&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=N-5BpRoMj1ARQONKXQaeTQ&_nc_ss=8&oh=00_AfwHPkh-DH4Zgmr-_QuIqxDzpLIRsvQqEtkWBr_faGB9RA&oe=69B9C98B",
    "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/495057579_1265788805557700_5690118546970357732_n.jpg?stp=c0.95.1152.1152a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=a934a8&_nc_ohc=aDNOZeW8xnEQ7kNvwHgTxsB&_nc_oc=AdnwHl22s9xi7zncVXucbB1pCdFPyxpEiXvQlToIVsvlhFf069tJPee91Nr9q81t9ILo52D6xnNdyb6uSDdLMzhP&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=Wf1byRPJgD-5Dg_X_JPQDg&_nc_ss=8&oh=00_AfwkgcLeO4QpR8WEz39FGHJgohikn6aHOX3amGHY2oznYA&oe=69B9D075",
    "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/494941425_1258554109614503_8820184236406424388_n.jpg?stp=c0.95.1152.1152a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=a934a8&_nc_ohc=vKdGYAGKsOIQ7kNvwG6qsxy&_nc_oc=AdmQwpbn7_6-LNRKGVlhDnt-ANdZGT6h10edvZphbTBBurgBYRMckBJ59ioygCXzLMm8dwKUAuUgK_jAzFBSf3qM&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=HGnUUyDVQopg_tsPjxtjuw&_nc_ss=8&oh=00_Afy2nQKlokFTZzn_9nxTkl1og88V_dWWdg-ETrzAdVTa5g&oe=69B9BB23",
    "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/486311364_1220431180093463_1068536217577745479_n.jpg?stp=c0.135.1639.1639a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=a934a8&_nc_ohc=bVerryq1s4kQ7kNvwH87CeV&_nc_oc=Admq_AoMCi9znD-dm8x9QU1rJc2h4i3t3QZamoYibZPL9-AGQWM69ErSC0lfpLGzgj-By9cC4uXVwPgwHudIypVH&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=vl1qQtRUiPry3ZAfixHC_Q&_nc_ss=8&oh=00_AfzbHBCrdyIgN2M8Nq6Q8bZXAz2Y7kAd_0B4txyt3ZTPEw&oe=69B9EDEE",
  ],
  "Painting Classes": [
    "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/496923620_1265936375542943_8462888254236099797_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=a934a8&_nc_ohc=8F2rc5QmEjYQ7kNvwHNOuW7&_nc_oc=AdlFWJLXRZU9EoNyGdiZktlzuEx4NRVxgjeuSNffvd0FHNq50Wz0Q13SWlKc5Iekis56CBjwcr94z4Zdo69ujuqX&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=Wf1byRPJgD-5Dg_X_JPQDg&_nc_ss=8&oh=00_AfzrXWlHK-aM5EyHg62rFiVcpR13fLk8gCh9vbZ-NMI5MA&oe=69B9ECA3",
    "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/495061284_1258874042915843_2209734233239942361_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=a934a8&_nc_ohc=Cw9JfqeRDoUQ7kNvwEcpqcy&_nc_oc=AdlM8bbx4Fv8PfXfPfuKPde1JwtegUKgnjTDlqpLF_SNNeJE9PW90pOx7t_Io7aH_oraVIhVzP8qukv8KjJ6UPVg&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=HGnUUyDVQopg_tsPjxtjuw&_nc_ss=8&oh=00_Afx5yOM2wl5h_0SBQ_tMXj0qyCywlrytVLYPex37iyd6ew&oe=69B9EAAB",
    "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/494035677_1255690023234245_7712440679703552337_n.jpg?stp=c241.0.959.959a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=a934a8&_nc_ohc=_VhJ_NuEs3AQ7kNvwGCozcF&_nc_oc=Adn82RzXR5YnfTAhWDpd-VAfI1h3kAYJ-APxLjStv85zE8UfsWz9knStE0tKbeVfvyMJxFIbsYf_bfR_ebAc755b&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=KpIXhsSZNDOppnLoFueMpg&_nc_ss=8&oh=00_AfwrJzmW-VdaupMDEwH6yc2yJwKVMI3cRBCszOaKBazIBg&oe=69B9DBD3",
    "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/491420127_1244647564338491_3238621271992162269_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=a934a8&_nc_ohc=VeJwyM6D5gYQ7kNvwFo2fYK&_nc_oc=AdnSd_7ixAZxoGnG21XKfeYUOw5sZ_HErb-xc9lvs2lvJPa3wXvOFHfEuoi2T-9grm-SdhX8r4ZHWKk9uK2T2nts&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=SljmfIvnRaFxd7vgG7RBbA&_nc_ss=8&oh=00_AfzBGeLGIsU4Q6_SpnxshTBWLfD_n1YLgM36baXmgGCMdA&oe=69B9DF44",
    "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/486104455_1218789126924335_5072669824661294486_n.jpg?stp=c0.70.1836.1836a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=a934a8&_nc_ohc=kWLroFTq-jwQ7kNvwGMuw5m&_nc_oc=Adn9k0QJRw2TWg9Xf9aVvLWeAn6UkMNPhdEIdcD6isvbRUk_rLB7AV3jcxekYJzElC4bq1IjB200DlF1AHbTW3zb&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=vl1qQtRUiPry3ZAfixHC_Q&_nc_ss=8&oh=00_Afx9eXGjJnopVdRGBSILvU1WkOJkFEmbJ9ajD6bwYhlsSQ&oe=69B9EB7F",
    "https://scontent.fhyd14-4.fna.fbcdn.net/v/t39.30808-6/484490020_1212146960921885_507284398246441088_n.jpg?stp=c237.0.1575.1575a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=a934a8&_nc_ohc=jCQZ3xTAji0Q7kNvwFNjk5a&_nc_oc=AdmZOjn5fbuvNXvP-h-QweyDUYlUj1Wa8nv5qm_aYcwpxH3SLG_F3HONLiLxr_gCPz2Tai2FHWL9ypng6zm6NgxR&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&_nc_gid=cBo1y2I2hEAnEVA_Bcy64g&_nc_ss=8&oh=00_Afwl4CMpbTqXgg0C9b3AbS6OUB9pD4YE-Lk3UhgPqMMy6Q&oe=69B9BCC0",
    "https://scontent.fhyd14-4.fna.fbcdn.net/v/t39.30808-6/484793529_1213052004164714_5001283046493830657_n.jpg?stp=c409.0.1230.1230a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=a934a8&_nc_ohc=x3_QjduhCmcQ7kNvwECJDAA&_nc_oc=AdngTi2mFC9cCsghaytTpWyuNJ8Ems_LiYfYeBjHOeDZfLMtfFI-4SXzhu8yFCrgHWCAx9atMGlXYCb8QGIchbTn&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&_nc_gid=TWFxyaXLy0b8vslRE5Av5Q&_nc_ss=8&oh=00_Afy4m9wLush-rdT_MDFHjA0OB1agKPNnmRqKn29tCosm5g&oe=69B9DEC6",
    "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/548272950_1373453878124525_7534904981849831829_n.jpg?stp=c0.89.1080.1080a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=a934a8&_nc_ohc=WWiPRF4ZTkMQ7kNvwFv7zZh&_nc_oc=AdlvPPnkYeRdcHHfGdyI-_nD0_IZW4LT3NIlgxWLlLbWf3Ahfv33mTg_xs0gZNlugSmAM_Wj0suiDCXrCbpRXqjQ&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=X_EPfDSAIU47JkGWx4CeZg&_nc_ss=8&oh=00_AfzUSmQTl7zzVaxihBZEBPNXj6d4YHaDVUL4-HkxE-sB5w&oe=69B9CC9C",
    "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/485301192_1216795243790390_7716158682580551247_n.jpg?stp=c0.31.1954.1954a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=a934a8&_nc_ohc=Bm2NfiqSBnUQ7kNvwEe0TkR&_nc_oc=AdmbEPF_cNoZ5Tf9bIJ1q0VaxNnQgdAsBffYYrkpp_1lcZyosinM46c8GpNOljP9PSBemWUdcuRqJhTke1k4fHbO&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=b-EdxMlhhmw93SqjyL5iyA&_nc_ss=8&oh=00_AfzzBB_bs8i5Z4-nhiagy2AzT27Q_jzvLuMyjY4eg0wmyQ&oe=69B9D49F",
  ],
  "Pottery Classes": [
    "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/495293089_1258981669571747_4693515321883132767_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=a934a8&_nc_ohc=tH51rt-bTb0Q7kNvwEtqoxW&_nc_oc=AdmENbOjg4Bwg0Jf1uF7m9SxLO9KpAjPmR_UX7xqLcYGhkDJPgXL43XgH6flMzlFdOcSRamfMHw8YXZYWD5bgoW1&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=Wf1byRPJgD-5Dg_X_JPQDg&_nc_ss=8&oh=00_AfxpZ--DOFm8Iy3TUqtg1C2wMhDE_-68NooZxjahlYYhCQ&oe=69B9DBAB",
    "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/494175355_1258981552905092_5879755252421470842_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=a934a8&_nc_ohc=GDM-UOoG31UQ7kNvwHOueX1&_nc_oc=AdmLggAZrOJqoRrsFvNmtKsGAPTVGxTYhL3qKE_Uayyy3Qbl5_ZkCGkTjUMfBeUpJAgFRYCR6AQ1-dx1o6_CooNT&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=Wf1byRPJgD-5Dg_X_JPQDg&_nc_ss=8&oh=00_AfwWYP86mzXxz7nsTmtrWMhgTdR9pyDkOhA9sZVnVKcZAw&oe=69B9BAE4",
    "https://scontent.fhyd14-4.fna.fbcdn.net/v/t39.30808-6/494585213_1258981466238434_1827653750028962866_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=a934a8&_nc_ohc=GbUx2zDPQgUQ7kNvwEln_4_&_nc_oc=AdmW_w1DxxbRgykid1ln5JuwBeA4hA1Ek4tsgIGYOOAcA-qhIO5mqwjQMBM7npG02ZEkw3cvBdArT5Lx2orXUF8P&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&_nc_gid=HGnUUyDVQopg_tsPjxtjuw&_nc_ss=8&oh=00_AfwcW72iNrct3UU5NoS6Jggv1pm2xELCVHdfQeYNgsexJA&oe=69B9CB5E",
    "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/494701658_1258981566238424_7561463104744936502_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=a934a8&_nc_ohc=U_LOWBUvEGMQ7kNvwEeb29e&_nc_oc=AdkkAvbi87iEN19HD8HYyjD6ThmXlDn4uM0ZqErqXMUeT7vzQcK2Zqe6rl-7r-H-uRlfcvZwRI0Z0iz4nMXPU6GS&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=Wf1byRPJgD-5Dg_X_JPQDg&_nc_ss=8&oh=00_AfxeU3UidxtRtDQEBfUkj3qw2BVeQ2tCFTEfpel80JN-eA&oe=69B9BA35",
    "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/482066235_1207297698073478_95789864787263281_n.jpg?stp=c0.67.1844.1844a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=a934a8&_nc_ohc=HJjeqlArAyEQ7kNvwFUnOx3&_nc_oc=AdkqK_NhA4IJXdlvQVKmNU3Pb5pHVEvZpeU_B8mLb-vox8YJNSmZK9gtq92o6iP4VsWjy-Xrq_9aheyF-VbfN2p5&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=HKRFXIKIpxhgjDNRIgP4Nw&_nc_ss=8&oh=00_AfwiDpOT2N1glh1JyYEobT1JdTasQ845Rg-mHCeIfSA0pQ&oe=69B9BA7B",
  ],
  "Music Classes": [
    "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/482022170_1208003771336204_7198079011642229750_n.jpg?stp=c401.0.1247.1247a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=a934a8&_nc_ohc=Rok6QRgy374Q7kNvwHqkzuo&_nc_oc=AdkPmO3PlBRsuhOFbojmzi2_C2fZF6N3KG-Hb7Y3__ojLG5cKznIj-BnxDtskb4zrqGXulsS-xyLaEfaBGNkUGqa&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=9bpceRo7VJRZlih-d2mCZg&_nc_ss=8&oh=00_AfyOTHcjsDK-kdhVXxnGng9csXFfqhGNNoLtmtXSkQ11Aw&oe=69B9E7F8",
    "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/482322166_1208004008002847_786403559438770715_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=a934a8&_nc_ohc=lzMscYUH1-0Q7kNvwHInkre&_nc_oc=Adk2qLnDCP2fXtqhNKJ2R1zoHpey1dbBvdkBRNlBDvwO7QHAZnnd8QvTQbAYlcSav6I6Dv42FFpX_m0aUY1TPfOc&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=9bpceRo7VJRZlih-d2mCZg&_nc_ss=8&oh=00_AfyMuFUShNnGrw6lts6pctOs37Ib7X9saRi9fR6xyH4C1Q&oe=69B9EEDD",
    "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/482029369_1207990064670908_6948401154079798218_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=a934a8&_nc_ohc=Af01KAZUEw8Q7kNvwHZhIRo&_nc_oc=Adl0w3_CQ5xZgBw-C_O4uDzU-MOyEZ_tkUlaket7MPFM42Fw554yZpXMDSpmhBFi5lsny1gmD5aGDtnDBu71wvwF&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=HKRFXIKIpxhgjDNRIgP4Nw&_nc_ss=8&oh=00_Afzpz5sYnwxbJGWR3rUdhqa4B7pzAEAA3nNdaEtgUJVkQA&oe=69B9D8A5",
    "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/482193803_1207193894750525_3976838569211490536_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=a934a8&_nc_ohc=zg9qodNuVIIQ7kNvwGOO13Y&_nc_oc=Admf_AZER42-B9THcfWVVfKi4PrI7LRAoAZLw5CK3EPAS2QY8so5gsMBVI7Xsdacf5ZoAuyN5aGWN98cpsQZCn6r&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=rdhFjQSsohmsAFCZ5c8vhQ&_nc_ss=8&oh=00_AfxscNH_zXg7DMqgLH_D2zdAraGwlDAyxeIxZdMZ5fchbA&oe=69B9DE3E",
    "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/482226957_1206823764787538_8488936883565653319_n.jpg?stp=c152.0.1745.1745a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=a934a8&_nc_ohc=5EHmWB-ezz8Q7kNvwEgz8vM&_nc_oc=AdkMghfZaQOA7AuTdl-vWrZONyJYfIUaM3Rcq-s5N2qCWHm161fE2bOElr-NW5xUA5Ek4NXHvbFKNvoD7kE-WQNZ&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=RRu7cRK598NgssnT_3LndQ&_nc_ss=8&oh=00_AfyBIhCdt45BnDrnIGKRzIt-kM8NVfbzA30q9y0jh-PQyQ&oe=69B9EE1B",
    "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/484139813_9343185939107893_5606624695761692677_n.jpg?stp=c0.347.996.996a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=1fujyGvoeQQQ7kNvwHd3MwB&_nc_oc=Adlf04K6BlCYnSEFqOrvifh_J7Lyku9yuesdrouk95xQKUkiRxaWJE-nQynhaO8WD-yl27YloksNY7e3hWE7NMJg&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=rQYQANpefnya4YZjFvHo4g&_nc_ss=8&oh=00_Afzj15A2O3qXtFbwwy0XZjAzo1iy2NKg7Kdeo47SNmRE3A&oe=69B9D751",
    "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/475658921_9107507912675698_1162470538498336107_n.jpg?stp=c120.0.720.720a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=rrNu1uXVncwQ7kNvwHGR0h4&_nc_oc=AdlJhRN4pI10j4UdkIW8SzbddOy6o-cfUT95VqjfcpVNaavyygl42-OuC30gaGCAvvj7gcA1r86p9t7qqMcTJWl5&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=3LRb3Cmkb3iHMmrnpZ3rnw&_nc_ss=8&oh=00_AfzBic5FchXH7Bt3YjtsPSlMhXEfokZr0wuBLQ0bJbMAZQ&oe=69B9EFD9",
  ],
};

const courses = [
  { title: "Painting Classes", desc: "Learn acrylic, watercolor, and oil painting techniques from beginner to advanced levels.", img: paintingImg },
  { title: "Pencil Sketch Classes", desc: "Master pencil drawing, shading, and portrait sketching with professional guidance.", img: sketchCardImg },
  { title: "Pottery Classes", desc: "Shape clay into beautiful pots, vases, and sculptures with hands-on pottery training.", img: potteryImg },
  { title: "Music Classes", desc: "Learn music theory, rhythm, guitar, vocals and various instruments in a fun, supportive environment.", img: musicImg },
];

const CoursesSection = ({ hideHeader }: { hideHeader?: boolean }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <>
      <section id="courses" className="py-16 md:py-24" style={{ background: "#F7F3EB" }} ref={ref}>
        <div className="container">
          
          {/* Section Heading */}
          {!hideHeader && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ textAlign: "center", marginBottom: "clamp(32px,5vh,52px)" }}
            >
<<<<<<< HEAD
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#8B2E2E", lineHeight: 1.2, marginBottom: 12 }}>
                Our Arts &amp; Music
              </h2>
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", maxWidth: 520, margin: "0 auto" }}>
=======
              <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B1E2D", background: "rgba(139,30,45,0.08)", border: "1.5px solid rgba(139,30,45,0.2)", borderRadius: 50, padding: "5px 18px", marginBottom: 14 }}>
                What We Offer
              </span>
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#5C0F1A", lineHeight: 1.2, marginBottom: 12 }}>
                Our Arts &amp; <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Music</span>
              </h2>
              <p style={{ color: "#777", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", maxWidth: 520, margin: "0 auto" }}>
>>>>>>> 574b394 (Preview Added)
                Explore our expertly designed courses for all ages and skill levels — from painting and sketching to pottery and music.
              </p>
            </motion.div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="art-card group"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-heading font-bold text-lg text-white">{course.title}</h3>
<<<<<<< HEAD
                  <p className="mt-2 text-sm text-white/90 font-body">{course.desc}</p>
=======
                  <p className="mt-2 text-sm text-white/80 font-body">{course.desc}</p>
>>>>>>> 574b394 (Preview Added)
                  <button
                    onClick={() => { navigate("/gallery"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="mt-4 text-sm font-button font-medium py-[0.4rem] px-5 rounded-full border-[1.5px] border-[#B7323C] bg-gradient-to-r from-[#B7323C]/20 to-transparent hover:bg-[#B7323C] text-white transition-colors duration-300"
                  >
                    Show Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-card z-10 flex items-center justify-between p-5 border-b border-border">
                <h3 className="font-heading font-bold text-xl text-foreground">{selectedCourse}</h3>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground font-body mb-6">
                  {courses.find((c) => c.title === selectedCourse)?.desc}
                </p>
                <h4 className="font-heading font-semibold text-foreground mb-4">Student Work & Class Gallery</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(courseGalleries[selectedCourse] || []).map((url, idx) => (
                    <div key={idx} className="aspect-square rounded-xl overflow-hidden group">
                      <img
                        src={url}
                        alt={`${selectedCourse} work ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CoursesSection;
