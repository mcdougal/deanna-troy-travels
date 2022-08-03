import { SvgIcon, SvgIconProps } from '@mui/material';

const Amazon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon fill="none" height={96} viewBox="0 0 96 96" width={96} {...props}>
      <path
        d="M5.15636 69.8014C5.41694 69.3802 5.83389 69.3538 6.40727 69.7224C19.4375 77.3582 33.6145 81.176 48.9382 81.176C59.1539 81.176 69.2393 79.254 79.1945 75.4097C79.4551 75.3044 79.833 75.1465 80.3282 74.9358C80.8233 74.7251 81.1751 74.5671 81.3836 74.4619C82.1655 74.1459 82.7779 74.3039 83.2209 74.9358C83.6639 75.5677 83.5206 76.147 82.7909 76.6736C81.8527 77.3582 80.6539 78.1481 79.1945 79.0433C74.7121 81.729 69.7084 83.809 64.1836 85.2836C58.6588 86.7581 53.2642 87.4953 48 87.4953C39.8691 87.4953 32.1812 86.0603 24.9364 83.1903C17.6915 80.3203 11.2024 76.2786 5.46909 71.0653C5.15636 70.802 5 70.5386 5 70.2754C5 70.1174 5.05207 69.9594 5.15636 69.8014ZM28.6891 47.2891C28.6891 43.6555 29.5751 40.5486 31.3473 37.9682C33.1193 35.3878 35.543 33.4395 38.6182 32.1229C41.4327 30.9118 44.8988 30.0429 49.0164 29.5162C50.4236 29.3583 52.7169 29.1476 55.8964 28.8843V27.5415C55.8964 24.1712 55.5315 21.9068 54.8018 20.7483C53.7073 19.1685 51.9873 18.3786 49.6418 18.3786H49.0164C47.2964 18.5366 45.8109 19.0895 44.56 20.0374C43.3091 20.9853 42.5012 22.3018 42.1364 23.9869C41.9279 25.0401 41.4066 25.6457 40.5727 25.8037L31.5818 24.6978C30.6957 24.4872 30.2527 24.0132 30.2527 23.276C30.2527 23.118 30.2788 22.9337 30.3309 22.7231C31.2169 18.0363 33.393 14.5607 36.8591 12.2963C40.3251 10.0319 44.3775 8.76804 49.0164 8.50476H50.9709C56.9127 8.50476 61.5515 10.0583 64.8873 13.1652C65.4105 13.6942 65.894 14.2619 66.3336 14.8635C66.7766 15.4691 67.1284 16.0089 67.3891 16.4828C67.6497 16.9567 67.8842 17.6414 68.0927 18.5366C68.3012 19.4318 68.4575 20.0506 68.5618 20.3928C68.666 20.7351 68.7442 21.4724 68.7964 22.6046C68.8484 23.7367 68.8745 24.4082 68.8745 24.6188V43.7345C68.8745 45.1037 69.07 46.3544 69.4609 47.4866C69.8518 48.6188 70.2297 49.435 70.5945 49.9353C70.9593 50.4355 71.5588 51.2386 72.3927 52.3445C72.7055 52.8184 72.8618 53.2397 72.8618 53.6084C72.8618 54.0296 72.6533 54.3983 72.2364 54.7142C67.9103 58.5058 65.5648 60.5595 65.2 60.8755C64.5745 61.3494 63.8188 61.4021 62.9327 61.0335C62.203 60.4015 61.5645 59.7959 61.0173 59.2167C60.47 58.6374 60.0791 58.2161 59.8445 57.9528C59.61 57.6896 59.2321 57.1761 58.7109 56.4125C58.1897 55.6489 57.8248 55.1355 57.6164 54.8722C54.6975 58.0845 51.8309 60.0856 49.0164 60.8755C47.2442 61.4021 45.0551 61.6654 42.4491 61.6654C38.4357 61.6654 35.1391 60.4147 32.5591 57.9133C29.9791 55.4119 28.6891 51.8706 28.6891 47.2891ZM42.1364 45.7093C42.1364 47.7631 42.6445 49.4087 43.6609 50.6462C44.6773 51.8838 46.0455 52.5025 47.7655 52.5025C47.9218 52.5025 48.1433 52.4762 48.43 52.4235C48.7166 52.3708 48.9121 52.3445 49.0164 52.3445C51.2055 51.7653 52.8993 50.3434 54.0982 48.079C54.6715 47.0784 55.1015 45.9858 55.3882 44.8009C55.6748 43.616 55.8312 42.655 55.8573 41.9178C55.8833 41.1805 55.8964 39.9693 55.8964 38.2842V36.3094C52.8733 36.3094 50.58 36.5201 49.0164 36.9414C44.4297 38.2579 42.1364 41.1805 42.1364 45.7093ZM74.9727 71.1442C75.0769 70.9336 75.2333 70.723 75.4418 70.5123C76.7448 69.6171 77.9957 69.0115 79.1945 68.6955C81.1751 68.1689 83.1036 67.8793 84.98 67.8266C85.5012 67.774 85.9964 67.8003 86.4655 67.9056C88.8109 68.1163 90.2182 68.5113 90.6873 69.0905C90.8957 69.4065 91 69.8804 91 70.5123V71.0653C91 72.9083 90.5048 75.0806 89.5145 77.582C88.5242 80.0834 87.143 82.0976 85.3709 83.6248C85.1103 83.8354 84.8757 83.9407 84.6673 83.9407C84.563 83.9407 84.4588 83.9144 84.3545 83.8617C84.0418 83.7037 83.9636 83.4141 84.12 82.9928C86.0484 78.4114 87.0127 75.2255 87.0127 73.435C87.0127 72.8557 86.9084 72.4344 86.7 72.1711C86.1788 71.5392 84.7193 71.2232 82.3218 71.2232C81.4357 71.2232 80.3933 71.2759 79.1945 71.3812C77.8915 71.5392 76.6927 71.6972 75.5982 71.8552C75.2855 71.8552 75.0769 71.8025 74.9727 71.6972C74.8684 71.5919 74.8424 71.4865 74.8945 71.3812C74.8945 71.3285 74.9206 71.2495 74.9727 71.1442Z"
        fill="inherit"
      />
    </SvgIcon>
  );
};

export default Amazon;
