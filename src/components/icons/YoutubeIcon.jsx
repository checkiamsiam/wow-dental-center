const YoutubeIcon = ({ size, width = 20, height = 20, color = "white", className, ...rest }) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      className={className}
      {...rest}
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.83332 8.50033L11.1583 6.00033L6.83332 3.50033V8.50033ZM16.4667 1.97533C16.575 2.36699 16.65 2.89199 16.7 3.55866C16.7583 4.22533 16.7833 4.80033 16.7833 5.30033L16.8333 6.00033C16.8333 7.82533 16.7 9.16699 16.4667 10.0253C16.2583 10.7753 15.775 11.2587 15.025 11.467C14.6333 11.5753 13.9167 11.6503 12.8167 11.7003C11.7333 11.7587 10.7417 11.7837 9.82499 11.7837L8.49999 11.8337C5.00832 11.8337 2.83332 11.7003 1.97499 11.467C1.22499 11.2587 0.741657 10.7753 0.533323 10.0253C0.42499 9.63366 0.34999 9.10866 0.29999 8.44199C0.241657 7.77533 0.216656 7.20033 0.216656 6.70033L0.166656 6.00033C0.166656 4.17533 0.29999 2.83366 0.533323 1.97533C0.741657 1.22533 1.22499 0.741992 1.97499 0.533659C2.36666 0.425326 3.08332 0.350325 4.18332 0.300325C5.26666 0.241992 6.25832 0.216992 7.17499 0.216992L8.49999 0.166992C11.9917 0.166992 14.1667 0.300326 15.025 0.533659C15.775 0.741992 16.2583 1.22533 16.4667 1.97533Z"
        fill={color}
      />
    </svg>
  );
};

export default YoutubeIcon;
