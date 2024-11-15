import { Box, SxProps, Theme } from '@mui/material';
import { forwardRef } from 'react';

type Ref = SVGSVGElement;

type Props = {
  className?: string;
  sx?: SxProps<Theme>;
};

const SquigglyDividerSvg = forwardRef<Ref, Props>(
  ({ className, sx }, ref): React.ReactElement => {
    return (
      <Box
        ref={ref}
        aria-label="Logo"
        className={className}
        component="svg"
        fill="none"
        role="img"
        sx={[
          {
            // opacity: 0.8,
            color: `primary.main`,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        viewBox="0 0 768 55"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.00007 39.6903C8.80528 39.1559 20.2693 30.1663 23.3375 25.4571C25.2401 22.5369 31.791 20.65 34.7085 19.1752C41.8109 15.5849 38.4904 24.6927 38.6821 29.9227C38.7566 31.9549 40.235 33.8171 40.7203 35.6454C41.3298 37.9418 39.2545 37.4191 42.7344 36.4954C47.9623 35.1078 55.6207 31.6988 59.8227 28.4652C62.6473 26.2916 67.4086 25.7132 70.3579 23.4436C71.8411 22.3023 75.5716 21.4708 77.4186 21.1987C80.4903 20.7461 80.3676 18.5865 82.2584 16.7657C82.6346 16.4035 82.6753 22.3432 82.6545 23.4435C82.6036 26.1427 83.9928 27.088 84.5746 29.28C84.966 30.7548 85.4303 33.9364 87.0963 33.9678C90.1233 34.0249 94.2032 33.3842 96.5955 31.5948C104.107 25.9762 115.055 25.0776 123.422 20.8481C125.749 19.6718 129.561 14.8336 130.01 15.9841C130.654 17.6374 134.906 25.6811 137.762 23.2066C140.565 20.7783 142.997 18.0511 145.68 15.4676C148.269 12.9743 156.241 16.1318 157.907 19.1783C163.402 29.2307 170.678 15.2328 176.162 16.9124C179.593 17.9629 183.22 22.9698 186.511 24.88C188.492 26.0301 190.827 26.7605 192.418 28.4135C194.138 30.1993 195.893 29.1542 197.893 30.3149C205.28 34.6033 211.472 31.275 218.362 27.5687C224.584 24.2216 231.504 22.9102 237.769 19.5823C242.469 17.086 243.27 14.9728 248.274 16.1842C252.034 17.0945 254.706 22.1148 258.072 22.5753C266.695 23.755 273.406 34.3255 278.714 22.9645C281.113 17.8291 283.645 14.6564 289.485 17.7153C294.197 20.1833 301.805 21.7964 306.633 18.8508C309.273 17.2396 312.361 12.987 315.226 12.2265C319.49 11.0946 328.92 18.4662 331.701 21.3536C335.448 25.2453 338.421 25.6609 344.058 27.3869C347.275 28.3722 347.081 30.6475 349.872 26.6265C352.147 23.3494 353.586 19.5598 356.088 16.8832C359.836 12.8734 361.246 14.5226 365.705 17.5286C367.283 18.5926 369.643 21.6064 370.819 23.1353C372.545 25.3779 375.782 20.6004 377.146 19.8324C386.898 14.3408 399.664 18.2469 410.292 21.5016C416.334 23.3516 422.58 25.1516 428.4 27.0633C431.514 28.0862 434.913 28.2163 437.989 29.1582C439.246 29.5432 440.586 26.6005 442.007 25.2318C445.153 22.2025 447.61 20.7805 449.475 16.7882C451.161 13.1804 450.875 13.3346 453.979 14.785C456.836 16.1198 458.404 18.2597 461.254 19.6204C467.271 22.4934 471.273 22.6648 476.881 18.349C478.075 17.4304 477.472 14.3971 478.772 13.3964C480.735 11.8863 484.27 17.9226 485.223 18.9124C488.25 22.0565 492.364 26.2602 497.076 27.0243C500.372 27.5587 504.071 28.5545 507.236 29.594C512.014 31.1631 511.796 28.8857 515.877 26.6248C520.583 24.0177 533.701 9.86356 538.866 13.2536C543.02 15.9798 546.177 19.3996 548.062 23.8676C549.564 27.4245 550.626 31.3495 553.847 33.9532C563.472 41.7356 572.031 29.8204 578.106 23.9701C585.201 17.1381 593.97 22.9892 602.043 24.9435C609.611 26.7757 609.218 22.0394 614.706 17.8159C617.539 15.6359 622.422 12.6328 625.694 16.4571C628.848 20.1429 633.134 23.8314 636.747 27.048C639.329 29.3467 641.77 33.3961 644.6 35.0845C645.594 35.6774 644.752 37.0595 646.302 37.0887C648.044 37.1216 649.962 35.8175 651.446 34.9816C653.311 33.9316 655.057 31.4341 656.531 29.8572C659.395 26.7935 660.291 22.7591 663.218 19.7748C664.824 18.1373 666.221 16.0233 668.013 14.6449C668.738 14.0868 668.261 12.8021 669.268 12.6385C671.991 12.1964 674.154 13.9441 676.656 14.5759C683.224 16.2343 686.191 19.7477 690.511 24.2337C693.535 27.3738 700.062 25.6234 703.388 24.1865C705.525 23.2636 707.597 22.4111 709.367 20.8771C713.266 17.4992 720.306 25.5538 723.507 27.6981C725.195 28.8284 727.161 30.5094 728.536 31.6791C730.955 33.7353 733.76 33.7504 736.53 35.31C743.89 39.4538 762.219 27.536 765.47 21.9351"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="5"
        />
      </Box>
    );
  },
);

SquigglyDividerSvg.displayName = `SquigglyDividerSvg`;

export default SquigglyDividerSvg;