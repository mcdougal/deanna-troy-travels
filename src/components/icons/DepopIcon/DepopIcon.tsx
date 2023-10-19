import { SvgIcon, SvgIconProps } from '@mui/material';

const DepopIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon fill="none" height={96} viewBox="0 0 96 96" width={96} {...props}>
      <path
        d="M14 59.4936C14 44.0773 24.9065 34.6012 42.3461 34.6012H60.4019V12H83V83H42.262C24.9062 83 14 73.8916 14 59.4936ZM37.8415 58.7299C37.8415 64.6418 41.3905 67.7251 48.2083 67.7251H60.2805V49.6215H48.3205C41.5018 49.6215 37.8415 52.7331 37.8415 58.7299Z"
        fill="inherit"
      />
    </SvgIcon>
  );
};

export default DepopIcon;
