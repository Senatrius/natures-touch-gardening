export const Logo = ({ color }: { color: string }) => {
  return (
    <svg
      viewBox='0 0 215 39'
      className={`${color} mr-10 max-w-[10rem] md:max-w-[14rem]`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M31.8679 10.635C24.2093 15.1647 24.7578 24.4686 19.3919 28.6668C15.3533 31.8266 9.65506 30.2264 6.36024 28.8671C6.36024 28.8671 4.12735 31.7079 2.52565 35.495C1.9894 36.7657 -0.364797 35.3656 0.0483754 34.2899C5.28423 20.6708 23.0981 13.8763 23.0981 13.8763C23.0981 13.8763 10.5289 13.3393 2.1283 24.403C1.90325 21.8759 1.53052 15.0389 8.03578 10.8459C16.8548 5.15546 33.656 9.5788 31.8679 10.635Z M46.4414 17.5586V19H39.9609V17.5586L42 17.0781V4.11719L39.9609 3.63672V2.32422L45 2.19531L52.9219 15.6133V4.11719L50.8828 3.63672V2.32422L57.1172 2.19531V3.63672L55.0781 4.11719V19H52.0781L44.1562 5.78125V17.0781L46.4414 17.5586Z M59.7656 7C59.8906 6.95312 60.2031 6.85547 60.7031 6.70703C61.2109 6.55078 61.8086 6.40234 62.4961 6.26172C63.1836 6.11328 63.832 6.03906 64.4414 6.03906C65.8945 6.03906 66.9961 6.32812 67.7461 6.90625C68.5039 7.48438 68.8828 8.4375 68.8828 9.76562V17.0781L70.8047 17.5586V18.8828L67.0781 19L66.5742 17.3242C66.0586 17.8398 65.4609 18.2891 64.7812 18.6719C64.1094 19.0469 63.3945 19.2344 62.6367 19.2344C61.5039 19.2344 60.6211 18.9219 59.9883 18.2969C59.3555 17.6641 59.0391 16.7773 59.0391 15.6367C59.0391 14.3086 59.5156 13.3594 60.4688 12.7891C61.4219 12.2109 62.7852 11.9219 64.5586 11.9219H66.4805V10C66.4805 9.29688 66.2852 8.76172 65.8945 8.39453C65.5039 8.02734 64.9375 7.84375 64.1953 7.84375C63.7656 7.84375 63.3711 7.87109 63.0117 7.92578C62.6523 7.98047 62.3672 8.03516 62.1562 8.08984C61.9531 8.14453 61.8281 8.17969 61.7812 8.19531L61.4414 10H59.8828L59.7656 7ZM64.8047 13.4805C63.6172 13.4805 62.7656 13.6406 62.25 13.9609C61.7422 14.2812 61.4883 14.8008 61.4883 15.5195C61.4883 16.0664 61.6445 16.5039 61.957 16.832C62.2695 17.1602 62.6992 17.3242 63.2461 17.3242C63.7773 17.3242 64.2812 17.1797 64.7578 16.8906C65.2344 16.6016 65.6406 16.2891 65.9766 15.9531C66.3125 15.6172 66.4805 15.4336 66.4805 15.4023V13.4805H64.8047Z M80.2969 8.19531H76.8164V15.9062C76.8164 16.8828 77.2148 17.3711 78.0117 17.3711C78.5273 17.3711 79.1523 17.1719 79.8867 16.7734L80.5312 18.0391C79.4453 18.8359 78.3242 19.2344 77.168 19.2344C76.3555 19.2344 75.6914 18.9688 75.1758 18.4375C74.668 17.8984 74.4141 17.0078 74.4141 15.7656V8.19531H72.0117V6.63672L74.4141 6.40234V3.37891L76.8164 2.89844V6.40234H80.2969V8.19531Z M96 18.8828L92.0391 19L91.8047 17.3242C91.3281 17.7539 90.6797 18.1797 89.8594 18.6016C89.0391 19.0234 88.207 19.2344 87.3633 19.2344C86.082 19.2344 85.1211 18.8594 84.4805 18.1094C83.8398 17.3594 83.5195 16.3047 83.5195 14.9453V8.19531L81.4805 7.71484V6.40234L85.9219 6.28516V14.6992C85.9219 15.5508 86.0898 16.1797 86.4258 16.5859C86.7617 16.9922 87.3125 17.1953 88.0781 17.1953C88.6875 17.1953 89.2461 17.0586 89.7539 16.7852C90.2695 16.5039 90.6992 16.1953 91.043 15.8594C91.3867 15.5234 91.5586 15.3398 91.5586 15.3086V8.19531L89.5195 7.71484V6.40234L93.9609 6.28516V17.0781L96 17.5586V18.8828Z M101.742 8.03125C102.195 7.53906 102.73 7.08594 103.348 6.67188C103.973 6.25 104.648 6.03906 105.375 6.03906C105.727 6.03906 106.059 6.06641 106.371 6.12109C106.691 6.17578 106.953 6.23438 107.156 6.29688C107.359 6.35156 107.484 6.38672 107.531 6.40234L107.414 9.88281H105.844L105.492 8.07812C104.695 8.07812 104.008 8.26953 103.43 8.65234C102.852 9.03516 102.379 9.46875 102.012 9.95312V17.0781L104.414 17.6758V19H97.5703V17.6758L99.6094 17.0781V8.19531L97.5703 7.71484V6.40234L101.531 6.28516L101.742 8.03125Z M111.246 13C111.246 14.3125 111.566 15.3633 112.207 16.1523C112.848 16.9336 113.688 17.3242 114.727 17.3242C115.43 17.3242 116.082 17.2266 116.684 17.0312C117.285 16.8359 117.781 16.625 118.172 16.3984C118.562 16.1641 118.758 16.0312 118.758 16L119.602 17.2422C119.602 17.2734 119.34 17.4688 118.816 17.8281C118.301 18.1797 117.66 18.5039 116.895 18.8008C116.137 19.0898 115.332 19.2344 114.48 19.2344C112.59 19.2344 111.156 18.6641 110.18 17.5234C109.211 16.3828 108.727 14.7969 108.727 12.7656C108.727 11.5 108.973 10.3555 109.465 9.33203C109.965 8.30859 110.66 7.50391 111.551 6.91797C112.449 6.33203 113.469 6.03906 114.609 6.03906C117.969 6.03906 119.648 7.91797 119.648 11.6758C119.648 11.9336 119.633 12.1914 119.602 12.4492C119.57 12.707 119.547 12.875 119.531 12.9531L111.246 13ZM117.105 11.1953C117.105 10.2188 116.895 9.42969 116.473 8.82812C116.059 8.21875 115.395 7.91406 114.48 7.91406C113.551 7.91406 112.812 8.22656 112.266 8.85156C111.727 9.47656 111.418 10.2578 111.34 11.1953H117.105Z M122.051 6.17969C122.113 6.10156 122.242 5.91016 122.438 5.60547C122.641 5.30078 122.836 4.96094 123.023 4.58594C123.219 4.21094 123.316 3.89453 123.316 3.63672C123.316 3.48047 123.246 3.27344 123.105 3.01562C122.879 2.60156 122.766 2.22656 122.766 1.89062C122.766 1.42969 122.91 1.04688 123.199 0.742188C123.488 0.4375 123.863 0.285156 124.324 0.285156C124.785 0.285156 125.16 0.425781 125.449 0.707031C125.738 0.980469 125.883 1.42969 125.883 2.05469C125.883 2.71094 125.633 3.48828 125.133 4.38672C124.641 5.27734 123.973 6.17969 123.129 7.09375L122.051 6.17969Z M130.5 17.2188C130.5 17.2344 130.699 17.2773 131.098 17.3477C131.496 17.4102 131.969 17.4414 132.516 17.4414C134.32 17.4414 135.227 16.8086 135.234 15.543C135.234 15.0273 135.012 14.6406 134.566 14.3828C134.129 14.1172 133.445 13.8398 132.516 13.5508C131.664 13.2773 130.973 13.0156 130.441 12.7656C129.918 12.5078 129.469 12.1406 129.094 11.6641C128.719 11.1797 128.531 10.5547 128.531 9.78906C128.531 8.58594 128.938 7.66016 129.75 7.01172C130.57 6.36328 131.629 6.03906 132.926 6.03906C133.488 6.03906 134.07 6.09375 134.672 6.20312C135.281 6.30469 135.797 6.41406 136.219 6.53125C136.648 6.64844 136.918 6.72656 137.027 6.76562L136.957 10H135.398L135.012 8.125C134.965 8.10938 134.859 8.07812 134.695 8.03125C134.539 7.98438 134.316 7.94141 134.027 7.90234C133.738 7.86328 133.418 7.84375 133.066 7.84375C131.645 7.84375 130.934 8.37891 130.934 9.44922C130.934 9.96484 131.16 10.3633 131.613 10.6445C132.074 10.918 132.766 11.207 133.688 11.5117C134.516 11.8008 135.195 12.0703 135.727 12.3203C136.258 12.5625 136.707 12.918 137.074 13.3867C137.441 13.8477 137.625 14.4297 137.625 15.1328C137.625 16.4609 137.125 17.4766 136.125 18.1797C135.125 18.8828 133.867 19.2344 132.352 19.2344C131.695 19.2344 131.086 19.1953 130.523 19.1172C129.961 19.0391 129.512 18.9609 129.176 18.8828C128.84 18.8047 128.633 18.7461 128.555 18.707V15.1562H130.242L130.5 17.2188Z M147.352 17.5586L149.754 17.0781V4.11719H146.637L146.039 6.51953H144.469V2.19531H157.559V6.51953H156L155.391 4.11719H152.273V17.0781L154.676 17.5586V19H147.352V17.5586Z M164.883 6.03906C166.656 6.03906 168.039 6.61328 169.031 7.76172C170.023 8.90234 170.52 10.4492 170.52 12.4023C170.52 13.7461 170.27 14.9375 169.77 15.9766C169.277 17.0156 168.574 17.8203 167.66 18.3906C166.754 18.9531 165.707 19.2344 164.52 19.2344C162.699 19.2344 161.285 18.6875 160.277 17.5938C159.27 16.5 158.766 14.8906 158.766 12.7656C158.766 11.4219 159.023 10.2422 159.539 9.22656C160.062 8.20312 160.785 7.41797 161.707 6.87109C162.629 6.31641 163.688 6.03906 164.883 6.03906ZM164.766 7.96094C163.578 7.96094 162.699 8.35156 162.129 9.13281C161.566 9.90625 161.285 11.0742 161.285 12.6367C161.285 15.7539 162.406 17.3164 164.648 17.3242C165.82 17.3242 166.672 16.9258 167.203 16.1289C167.734 15.3242 168 14.1211 168 12.5195C168 9.48047 166.922 7.96094 164.766 7.96094Z M186.492 18.8828L182.531 19L182.297 17.3242C181.82 17.7539 181.172 18.1797 180.352 18.6016C179.531 19.0234 178.699 19.2344 177.855 19.2344C176.574 19.2344 175.613 18.8594 174.973 18.1094C174.332 17.3594 174.012 16.3047 174.012 14.9453V8.19531L171.973 7.71484V6.40234L176.414 6.28516V14.6992C176.414 15.5508 176.582 16.1797 176.918 16.5859C177.254 16.9922 177.805 17.1953 178.57 17.1953C179.18 17.1953 179.738 17.0586 180.246 16.7852C180.762 16.5039 181.191 16.1953 181.535 15.8594C181.879 15.5234 182.051 15.3398 182.051 15.3086V8.19531L180.012 7.71484V6.40234L184.453 6.28516V17.0781L186.492 17.5586V18.8828Z M196.336 8.19531C196.227 8.16406 195.965 8.11719 195.551 8.05469C195.137 7.99219 194.68 7.96094 194.18 7.96094C193.031 7.96094 192.145 8.33203 191.52 9.07422C190.895 9.81641 190.582 10.9258 190.582 12.4023C190.582 14.0039 190.91 15.2266 191.566 16.0703C192.223 16.9062 193.133 17.3242 194.297 17.3242C194.969 17.3242 195.582 17.2148 196.137 16.9961C196.691 16.7773 197.145 16.5469 197.496 16.3047C197.848 16.0547 198.023 15.9141 198.023 15.8828L198.867 17.3242C198.867 17.3555 198.617 17.5391 198.117 17.875C197.625 18.2109 197.02 18.5234 196.301 18.8125C195.59 19.0938 194.844 19.2344 194.062 19.2344C192.109 19.2344 190.621 18.6562 189.598 17.5C188.574 16.3438 188.062 14.7227 188.062 12.6367C188.062 11.3555 188.316 10.2148 188.824 9.21484C189.34 8.21484 190.066 7.4375 191.004 6.88281C191.941 6.32031 193.039 6.03906 194.297 6.03906C194.938 6.03906 195.562 6.11328 196.172 6.26172C196.781 6.40234 197.277 6.55078 197.66 6.70703C198.043 6.85547 198.285 6.95312 198.387 7L198.258 10.2344H196.699L196.336 8.19531Z M204.375 7.77344C204.891 7.33594 205.523 6.9375 206.273 6.57812C207.023 6.21875 207.789 6.03906 208.57 6.03906C209.852 6.03906 210.812 6.42188 211.453 7.1875C212.094 7.94531 212.414 9.00391 212.414 10.3633V17.0781L214.219 17.6758V19H208.453V17.6758L210.012 17.1016V10.5977C210.012 9.73047 209.852 9.09375 209.531 8.6875C209.211 8.28125 208.676 8.07812 207.926 8.07812C207.316 8.07812 206.746 8.22266 206.215 8.51172C205.691 8.80078 205.254 9.11328 204.902 9.44922C204.551 9.78516 204.375 9.96875 204.375 10V17.0781L205.934 17.6758V19H199.934V17.6758L201.973 17.0781V2.44141L199.934 1.96094V0.636719L204.375 0.519531V7.77344Z'
        fill='currentColor'
      />
      <path
        d='M49.1562 34.2031C49.1562 34.224 48.9557 34.3177 48.5547 34.4844C48.1589 34.6458 47.6562 34.7995 47.0469 34.9453C46.4375 35.0859 45.7812 35.1562 45.0781 35.1562C43.4583 35.1562 42.2005 34.6823 41.3047 33.7344C40.4089 32.7865 39.9609 31.4219 39.9609 29.6406C39.9609 28.4271 40.1797 27.3698 40.6172 26.4688C41.0547 25.5625 41.6745 24.8646 42.4766 24.375C43.2839 23.8854 44.2318 23.6406 45.3203 23.6406C45.8411 23.6406 46.3672 23.7005 46.8984 23.8203C47.4349 23.9349 47.9062 24.0651 48.3125 24.2109C48.7188 24.3516 48.9219 24.4271 48.9219 24.4375L48.8438 27.0781H47.7969L47.3203 25.3203C47.2682 25.2995 47.1432 25.2656 46.9453 25.2188C46.7474 25.1667 46.487 25.1172 46.1641 25.0703C45.8464 25.0234 45.5104 25 45.1562 25C44.0781 25 43.2474 25.3932 42.6641 26.1797C42.0859 26.9609 41.7969 28.0885 41.7969 29.5625C41.7969 30.9583 42.1146 32.013 42.75 32.7266C43.3854 33.4401 44.2422 33.7969 45.3203 33.7969C45.6484 33.7969 45.9766 33.7682 46.3047 33.7109C46.638 33.6536 46.9167 33.5938 47.1406 33.5312C47.3646 33.4635 47.5052 33.4193 47.5625 33.3984V30.7734L46.2031 30.4531V29.5781L50.3594 29.4922V30.4531L49.1562 30.7734V34.2031Z M53.8031 27C53.8865 26.9688 54.0948 26.9036 54.4281 26.8047C54.7667 26.7005 55.1651 26.6016 55.6234 26.5078C56.0818 26.4089 56.5141 26.3594 56.9203 26.3594C57.8891 26.3594 58.6234 26.5521 59.1234 26.9375C59.6286 27.3229 59.8813 27.9583 59.8813 28.8438V33.7188L61.1625 34.0391V34.9219L58.6781 35L58.3422 33.8828C57.9984 34.2266 57.6 34.526 57.1469 34.7812C56.699 35.0312 56.2224 35.1562 55.7172 35.1562C54.962 35.1562 54.3734 34.9479 53.9516 34.5312C53.5297 34.1094 53.3188 33.5182 53.3188 32.7578C53.3188 31.8724 53.6365 31.2396 54.2719 30.8594C54.9073 30.474 55.8161 30.2812 56.9984 30.2812H58.2797V29C58.2797 28.5312 58.1495 28.1745 57.8891 27.9297C57.6286 27.6849 57.251 27.5625 56.7563 27.5625C56.4698 27.5625 56.2068 27.5807 55.9672 27.6172C55.7276 27.6536 55.5375 27.6901 55.3969 27.7266C55.2615 27.763 55.1781 27.7865 55.1469 27.7969L54.9203 29H53.8813L53.8031 27ZM57.1625 31.3203C56.3708 31.3203 55.8031 31.4271 55.4594 31.6406C55.1208 31.8542 54.9516 32.2005 54.9516 32.6797C54.9516 33.0443 55.0557 33.3359 55.2641 33.5547C55.4724 33.7734 55.7589 33.8828 56.1234 33.8828C56.4776 33.8828 56.8135 33.7865 57.1313 33.5938C57.449 33.401 57.7198 33.1927 57.9438 32.9688C58.1677 32.7448 58.2797 32.6224 58.2797 32.6016V31.3203H57.1625Z M66.6688 27.6875C66.9708 27.3594 67.3276 27.0573 67.7391 26.7812C68.1557 26.5 68.6063 26.3594 69.0906 26.3594C69.325 26.3594 69.5464 26.3776 69.7547 26.4141C69.9682 26.4505 70.1427 26.4896 70.2781 26.5312C70.4135 26.5677 70.4969 26.5911 70.5281 26.6016L70.45 28.9219H69.4031L69.1688 27.7188C68.6375 27.7188 68.1792 27.8464 67.7938 28.1016C67.4083 28.3568 67.0932 28.6458 66.8484 28.9688V33.7188L68.45 34.1172V35H63.8875V34.1172L65.2469 33.7188V27.7969L63.8875 27.4766V26.6016L66.5281 26.5234L66.6688 27.6875Z M81.7219 34.9219L79.0031 35L78.8781 34.0859C78.1646 34.7995 77.326 35.1562 76.3625 35.1562C75.2427 35.1562 74.4016 34.7865 73.8391 34.0469C73.2818 33.3073 73.0031 32.2917 73.0031 31C73.0031 29.5833 73.3599 28.4557 74.0734 27.6172C74.7922 26.7786 75.8495 26.3594 77.2453 26.3594C77.7661 26.3594 78.2714 26.4453 78.7609 26.6172V23.9609L77.4016 23.6406V22.7578L80.3625 22.6797V33.7188L81.7219 34.0391V34.9219ZM78.7609 27.9609C78.7297 27.9401 78.649 27.9062 78.5188 27.8594C78.3938 27.8073 78.2063 27.7578 77.9563 27.7109C77.7063 27.6641 77.4146 27.6406 77.0813 27.6406C75.4823 27.6406 74.6828 28.7083 74.6828 30.8438C74.6828 31.7812 74.8443 32.5234 75.1672 33.0703C75.4953 33.612 76.0005 33.8828 76.6828 33.8828C77.0891 33.8828 77.4458 33.7943 77.7531 33.6172C78.0656 33.4401 78.3104 33.2474 78.4875 33.0391C78.6698 32.8307 78.7609 32.7109 78.7609 32.6797V27.9609Z M86.0484 31C86.0484 31.875 86.262 32.5755 86.6891 33.1016C87.1161 33.6224 87.676 33.8828 88.3688 33.8828C88.8375 33.8828 89.2724 33.8177 89.6734 33.6875C90.0745 33.5573 90.4052 33.4167 90.6656 33.2656C90.926 33.1094 91.0563 33.0208 91.0563 33L91.6188 33.8281C91.6188 33.849 91.4443 33.9792 91.0953 34.2188C90.7516 34.4531 90.3245 34.6693 89.8141 34.8672C89.3089 35.0599 88.7724 35.1562 88.2047 35.1562C86.9443 35.1562 85.9885 34.776 85.3375 34.0156C84.6917 33.2552 84.3688 32.1979 84.3688 30.8438C84.3688 30 84.5328 29.237 84.8609 28.5547C85.1943 27.8724 85.6578 27.3359 86.2516 26.9453C86.8505 26.5547 87.5302 26.3594 88.2906 26.3594C90.5302 26.3594 91.65 27.612 91.65 30.1172C91.65 30.2891 91.6396 30.4609 91.6188 30.6328C91.5979 30.8047 91.5823 30.9167 91.5719 30.9688L86.0484 31ZM89.9547 29.7969C89.9547 29.1458 89.8141 28.6198 89.5328 28.2188C89.2568 27.8125 88.8141 27.6094 88.2047 27.6094C87.5849 27.6094 87.0927 27.8177 86.7281 28.2344C86.3688 28.651 86.163 29.1719 86.1109 29.7969H89.9547Z M97.3906 27.6562C97.724 27.3698 98.1589 27.0833 98.6953 26.7969C99.237 26.5052 99.7943 26.3594 100.367 26.3594C101.221 26.3594 101.862 26.6146 102.289 27.125C102.716 27.6302 102.93 28.3359 102.93 29.2422V33.7188L104.125 34.1172V35H100.289V34.1172L101.328 33.7188V29.3984C101.328 28.8203 101.216 28.3958 100.992 28.125C100.768 27.8542 100.401 27.7188 99.8906 27.7188C99.4844 27.7188 99.1094 27.8151 98.7656 28.0078C98.4271 28.2005 98.1432 28.4089 97.9141 28.6328C97.6849 28.8568 97.5703 28.9792 97.5703 29V33.7188L98.6094 34.1172V35H94.6094V34.1172L95.9688 33.7188V27.7969L94.6094 27.4766V26.6016L97.25 26.5234L97.3906 27.6562Z M107.889 23.8828C107.889 23.5286 107.991 23.2526 108.194 23.0547C108.397 22.8568 108.642 22.7578 108.928 22.7578C109.621 22.7578 109.967 23.1328 109.967 23.8828C109.967 24.2266 109.86 24.5 109.647 24.7031C109.433 24.901 109.194 25 108.928 25C108.61 25 108.358 24.901 108.17 24.7031C107.983 24.5052 107.889 24.2318 107.889 23.8828ZM111.006 35H106.85V34.1172L108.209 33.7188V27.7969L106.85 27.4766V26.6016L109.811 26.5234V33.7188L111.006 34.1172V35Z M116.591 27.6562C116.924 27.3698 117.359 27.0833 117.895 26.7969C118.437 26.5052 118.994 26.3594 119.567 26.3594C120.421 26.3594 121.062 26.6146 121.489 27.125C121.916 27.6302 122.13 28.3359 122.13 29.2422V33.7188L123.325 34.1172V35H119.489V34.1172L120.528 33.7188V29.3984C120.528 28.8203 120.416 28.3958 120.192 28.125C119.968 27.8542 119.601 27.7188 119.091 27.7188C118.684 27.7188 118.309 27.8151 117.966 28.0078C117.627 28.2005 117.343 28.4089 117.114 28.6328C116.885 28.8568 116.77 28.9792 116.77 29V33.7188L117.809 34.1172V35H113.809V34.1172L115.169 33.7188V27.7969L113.809 27.4766V26.6016L116.45 26.5234L116.591 27.6562Z M132.816 27.7031C132.836 27.7344 132.881 27.8151 132.948 27.9453C133.021 28.0703 133.089 28.2552 133.152 28.5C133.219 28.7396 133.253 29.013 133.253 29.3203C133.253 30.3672 132.938 31.1484 132.308 31.6641C131.678 32.1797 130.818 32.4375 129.73 32.4375C129.433 32.4375 129.172 32.4193 128.948 32.3828C128.724 32.3464 128.584 32.3177 128.527 32.2969L128.448 33.7969H130.933C131.98 33.7969 132.774 33.9948 133.316 34.3906C133.857 34.7865 134.128 35.362 134.128 36.1172C134.128 37.0234 133.777 37.7292 133.073 38.2344C132.37 38.7448 131.336 39 129.972 39C128.769 39 127.826 38.8203 127.144 38.4609C126.467 38.1068 126.128 37.513 126.128 36.6797C126.128 36.2526 126.253 35.888 126.503 35.5859C126.753 35.2891 127.032 35.0599 127.339 34.8984C127.652 34.7318 127.808 34.6589 127.808 34.6797C127.808 34.6901 127.719 34.6693 127.542 34.6172C127.37 34.5651 127.211 34.4714 127.066 34.3359C126.92 34.2005 126.847 34.0104 126.847 33.7656C126.847 33.6042 126.907 33.3906 127.027 33.125C127.152 32.8594 127.282 32.6146 127.417 32.3906C127.553 32.1667 127.641 32.0234 127.683 31.9609C127.683 31.9922 127.568 31.9115 127.339 31.7188C127.11 31.526 126.904 31.2474 126.722 30.8828C126.54 30.513 126.448 30.0443 126.448 29.4766C126.448 28.4609 126.766 27.6875 127.402 27.1562C128.037 26.625 128.894 26.3594 129.972 26.3594C130.279 26.3594 130.55 26.3802 130.784 26.4219C131.019 26.4635 131.198 26.5104 131.323 26.5625C131.454 26.6094 131.534 26.6432 131.566 26.6641L134.37 26.6016V27.4766L132.816 27.7031ZM129.886 27.4766C129.261 27.4766 128.797 27.6354 128.495 27.9531C128.198 28.2656 128.05 28.7474 128.05 29.3984C128.05 29.987 128.198 30.4557 128.495 30.8047C128.797 31.1484 129.235 31.3203 129.808 31.3203C130.448 31.3203 130.915 31.1693 131.206 30.8672C131.503 30.5599 131.652 30.0703 131.652 29.3984C131.652 28.7786 131.503 28.3047 131.206 27.9766C130.915 27.6432 130.474 27.4766 129.886 27.4766ZM128.769 35C128.769 34.9792 128.672 35.0339 128.48 35.1641C128.287 35.2995 128.113 35.474 127.956 35.6875C127.805 35.901 127.73 36.151 127.73 36.4375C127.73 36.9583 127.935 37.3151 128.347 37.5078C128.758 37.7005 129.378 37.7969 130.206 37.7969C131.019 37.7969 131.623 37.6719 132.019 37.4219C132.415 37.1719 132.613 36.7917 132.613 36.2812C132.613 35.7917 132.438 35.4557 132.089 35.2734C131.74 35.0911 131.219 35 130.527 35H128.769Z M143.688 33.8125C143.688 33.8229 143.82 33.8516 144.086 33.8984C144.352 33.9401 144.667 33.9609 145.031 33.9609C146.234 33.9609 146.839 33.5391 146.844 32.6953C146.844 32.3516 146.695 32.0938 146.398 31.9219C146.107 31.7448 145.651 31.5599 145.031 31.3672C144.464 31.1849 144.003 31.0104 143.648 30.8438C143.299 30.6719 143 30.4271 142.75 30.1094C142.5 29.7865 142.375 29.3698 142.375 28.8594C142.375 28.0573 142.646 27.4401 143.188 27.0078C143.734 26.5755 144.44 26.3594 145.305 26.3594C145.68 26.3594 146.068 26.3958 146.469 26.4688C146.875 26.5365 147.219 26.6094 147.5 26.6875C147.786 26.7656 147.966 26.8177 148.039 26.8438L147.992 29H146.953L146.695 27.75C146.664 27.7396 146.594 27.7188 146.484 27.6875C146.38 27.6562 146.232 27.6276 146.039 27.6016C145.846 27.5755 145.633 27.5625 145.398 27.5625C144.451 27.5625 143.977 27.9193 143.977 28.6328C143.977 28.9766 144.128 29.2422 144.43 29.4297C144.737 29.612 145.198 29.8047 145.812 30.0078C146.365 30.2005 146.818 30.3802 147.172 30.5469C147.526 30.7083 147.826 30.9453 148.07 31.2578C148.315 31.5651 148.438 31.9531 148.438 32.4219C148.438 33.3073 148.104 33.9844 147.438 34.4531C146.771 34.9219 145.932 35.1562 144.922 35.1562C144.484 35.1562 144.078 35.1302 143.703 35.0781C143.328 35.026 143.029 34.974 142.805 34.9219C142.581 34.8698 142.443 34.8307 142.391 34.8047V32.4375H143.516L143.688 33.8125Z M153.077 31C153.077 31.875 153.29 32.5755 153.717 33.1016C154.144 33.6224 154.704 33.8828 155.397 33.8828C155.866 33.8828 156.301 33.8177 156.702 33.6875C157.103 33.5573 157.433 33.4167 157.694 33.2656C157.954 33.1094 158.084 33.0208 158.084 33L158.647 33.8281C158.647 33.849 158.472 33.9792 158.123 34.2188C157.78 34.4531 157.353 34.6693 156.842 34.8672C156.337 35.0599 155.801 35.1562 155.233 35.1562C153.972 35.1562 153.017 34.776 152.366 34.0156C151.72 33.2552 151.397 32.1979 151.397 30.8438C151.397 30 151.561 29.237 151.889 28.5547C152.222 27.8724 152.686 27.3359 153.28 26.9453C153.879 26.5547 154.558 26.3594 155.319 26.3594C157.558 26.3594 158.678 27.612 158.678 30.1172C158.678 30.2891 158.668 30.4609 158.647 30.6328C158.626 30.8047 158.61 30.9167 158.6 30.9688L153.077 31ZM156.983 29.7969C156.983 29.1458 156.842 28.6198 156.561 28.2188C156.285 27.8125 155.842 27.6094 155.233 27.6094C154.613 27.6094 154.121 27.8177 153.756 28.2344C153.397 28.651 153.191 29.1719 153.139 29.7969H156.983Z M164.419 27.6875C164.721 27.3594 165.078 27.0573 165.489 26.7812C165.906 26.5 166.356 26.3594 166.841 26.3594C167.075 26.3594 167.296 26.3776 167.505 26.4141C167.718 26.4505 167.893 26.4896 168.028 26.5312C168.164 26.5677 168.247 26.5911 168.278 26.6016L168.2 28.9219H167.153L166.919 27.7188C166.387 27.7188 165.929 27.8464 165.544 28.1016C165.158 28.3568 164.843 28.6458 164.598 28.9688V33.7188L166.2 34.1172V35H161.637V34.1172L162.997 33.7188V27.7969L161.637 27.4766V26.6016L164.278 26.5234L164.419 27.6875Z M174.495 33.5625L176.417 27.7188L175.316 27.4766V26.6016L178.902 26.5234V27.4766L178.019 27.6406L175.3 35H173.542L170.917 27.7188L170.113 27.4766V26.6016L173.714 26.5234V27.4766L172.597 27.6406L174.495 33.5625Z M182.252 23.8828C182.252 23.5286 182.353 23.2526 182.556 23.0547C182.759 22.8568 183.004 22.7578 183.291 22.7578C183.983 22.7578 184.33 23.1328 184.33 23.8828C184.33 24.2266 184.223 24.5 184.009 24.7031C183.796 24.901 183.556 25 183.291 25C182.973 25 182.72 24.901 182.533 24.7031C182.345 24.5052 182.252 24.2318 182.252 23.8828ZM185.369 35H181.212V34.1172L182.572 33.7188V27.7969L181.212 27.4766V26.6016L184.173 26.5234V33.7188L185.369 34.1172V35Z M193.688 27.7969C193.615 27.776 193.44 27.7448 193.164 27.7031C192.888 27.6615 192.583 27.6406 192.25 27.6406C191.484 27.6406 190.893 27.888 190.477 28.3828C190.06 28.8776 189.852 29.6172 189.852 30.6016C189.852 31.6693 190.07 32.4844 190.508 33.0469C190.945 33.6042 191.552 33.8828 192.328 33.8828C192.776 33.8828 193.185 33.8099 193.555 33.6641C193.924 33.5182 194.227 33.3646 194.461 33.2031C194.695 33.0365 194.812 32.9427 194.812 32.9219L195.375 33.8828C195.375 33.9036 195.208 34.026 194.875 34.25C194.547 34.474 194.143 34.6823 193.664 34.875C193.19 35.0625 192.693 35.1562 192.172 35.1562C190.87 35.1562 189.878 34.7708 189.195 34C188.513 33.2292 188.172 32.1484 188.172 30.7578C188.172 29.9036 188.341 29.1432 188.68 28.4766C189.023 27.8099 189.508 27.2917 190.133 26.9219C190.758 26.5469 191.49 26.3594 192.328 26.3594C192.755 26.3594 193.172 26.4089 193.578 26.5078C193.984 26.6016 194.315 26.7005 194.57 26.8047C194.826 26.9036 194.987 26.9688 195.055 27L194.969 29.1562H193.93L193.688 27.7969Z M199.608 31C199.608 31.875 199.821 32.5755 200.248 33.1016C200.676 33.6224 201.235 33.8828 201.928 33.8828C202.397 33.8828 202.832 33.8177 203.233 33.6875C203.634 33.5573 203.965 33.4167 204.225 33.2656C204.485 33.1094 204.616 33.0208 204.616 33L205.178 33.8281C205.178 33.849 205.004 33.9792 204.655 34.2188C204.311 34.4531 203.884 34.6693 203.373 34.8672C202.868 35.0599 202.332 35.1562 201.764 35.1562C200.504 35.1562 199.548 34.776 198.897 34.0156C198.251 33.2552 197.928 32.1979 197.928 30.8438C197.928 30 198.092 29.237 198.42 28.5547C198.754 27.8724 199.217 27.3359 199.811 26.9453C200.41 26.5547 201.09 26.3594 201.85 26.3594C204.09 26.3594 205.209 27.612 205.209 30.1172C205.209 30.2891 205.199 30.4609 205.178 30.6328C205.157 30.8047 205.142 30.9167 205.131 30.9688L199.608 31ZM203.514 29.7969C203.514 29.1458 203.373 28.6198 203.092 28.2188C202.816 27.8125 202.373 27.6094 201.764 27.6094C201.144 27.6094 200.652 27.8177 200.288 28.2344C199.928 28.651 199.722 29.1719 199.67 29.7969H203.514Z M209.559 33.8125C209.559 33.8229 209.692 33.8516 209.958 33.8984C210.223 33.9401 210.539 33.9609 210.903 33.9609C212.106 33.9609 212.71 33.5391 212.716 32.6953C212.716 32.3516 212.567 32.0938 212.27 31.9219C211.979 31.7448 211.523 31.5599 210.903 31.3672C210.335 31.1849 209.874 31.0104 209.52 30.8438C209.171 30.6719 208.872 30.4271 208.622 30.1094C208.372 29.7865 208.247 29.3698 208.247 28.8594C208.247 28.0573 208.518 27.4401 209.059 27.0078C209.606 26.5755 210.312 26.3594 211.177 26.3594C211.552 26.3594 211.94 26.3958 212.341 26.4688C212.747 26.5365 213.091 26.6094 213.372 26.6875C213.658 26.7656 213.838 26.8177 213.911 26.8438L213.864 29H212.825L212.567 27.75C212.536 27.7396 212.466 27.7188 212.356 27.6875C212.252 27.6562 212.104 27.6276 211.911 27.6016C211.718 27.5755 211.505 27.5625 211.27 27.5625C210.322 27.5625 209.848 27.9193 209.848 28.6328C209.848 28.9766 209.999 29.2422 210.302 29.4297C210.609 29.612 211.07 29.8047 211.684 30.0078C212.236 30.2005 212.69 30.3802 213.044 30.5469C213.398 30.7083 213.697 30.9453 213.942 31.2578C214.187 31.5651 214.309 31.9531 214.309 32.4219C214.309 33.3073 213.976 33.9844 213.309 34.4531C212.643 34.9219 211.804 35.1562 210.794 35.1562C210.356 35.1562 209.95 35.1302 209.575 35.0781C209.2 35.026 208.901 34.974 208.677 34.9219C208.453 34.8698 208.315 34.8307 208.262 34.8047V32.4375H209.387L209.559 33.8125Z'
        fill='#8D4000'
      />
    </svg>
  );
};
