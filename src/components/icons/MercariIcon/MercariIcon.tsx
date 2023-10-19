import { SvgIcon, SvgIconProps } from '@mui/material';

const MercariIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon fill="none" height={96} viewBox="0 0 96 96" width={96} {...props}>
      <path
        d="M63.875 9.40993e-06L58.4491 12.8402L71.3064 18.2589L76.7323 5.41866L63.875 9.40993e-06Z"
        fill="inherit"
      />
      <path
        d="M47.669 52.69L62.8841 24H75V77H63.0435V46.7368H62.9032L51.3803 67.1954H43.6452L32.1159 46.7682H31.9693V76.9748H20V24H32.1159L47.4203 52.69H47.669Z"
        fill="inherit"
      />
    </SvgIcon>
  );
};

export default MercariIcon;
