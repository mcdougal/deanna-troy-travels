import { SvgIcon, SvgIconProps } from '@mui/material';

const Poshmark = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon fill="none" height={96} viewBox="0 0 96 96" width={96} {...props}>
      <path
        d="M59.53 11.7109C48.0821 11.7318 38.8112 21.013 38.806 32.4661V65.0651H46.4727V32.4661C46.4779 25.2578 52.3321 19.4193 59.5352 19.4297C66.7435 19.4349 72.5821 25.2839 72.5717 32.4922C72.5664 39.3984 67.181 45.0964 60.2904 45.5078V53.1901C71.7383 52.6432 80.5717 42.9141 80.0196 31.4714C79.4935 20.4974 70.5144 11.8359 59.53 11.7109Z"
        fill="inherit"
      />
      <path
        d="M36.6342 84.2786C48.0717 84.2578 57.3321 74.9818 57.3477 63.5443V30.9401H49.6811V63.5443C49.6654 70.7526 43.8061 76.5807 36.5977 76.5703C29.3946 76.5495 23.5613 70.6901 23.5821 63.487C23.5977 56.5807 28.9831 50.8828 35.879 50.487V42.8047C24.4259 43.263 15.5144 52.9141 15.9727 64.3672C16.4154 75.4714 25.5248 84.2526 36.6394 84.2891L36.6342 84.2786Z"
        fill="inherit"
      />
    </SvgIcon>
  );
};

export default Poshmark;