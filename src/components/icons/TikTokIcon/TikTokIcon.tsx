import { SvgIcon, SvgIconProps } from '@mui/material';

const TikTokIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon fill="none" height={96} viewBox="0 0 96 96" width={96} {...props}>
      <path
        clipRule="evenodd"
        d="M62.1249 10.5C63.3178 21.1428 69.0441 27.4881 79 28.1631V40.1335C73.2304 40.7185 68.1765 38.7609 62.2984 35.0708V57.459C62.2984 85.8999 32.409 94.7877 20.3926 74.4021C12.6708 61.2841 17.3993 38.2659 42.1697 37.3434V49.9663C40.2827 50.2813 38.2654 50.7763 36.4218 51.4288C30.9124 53.3639 27.789 56.9865 28.6566 63.3767C30.3268 75.6171 51.9738 79.2397 50.1735 55.3215V10.5225H62.1249V10.5Z"
        fill="inherit"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};

export default TikTokIcon;
