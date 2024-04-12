import React from "react";
import PropTypes from "prop-types";
import IconViewRequest from "../assets/icon/IconViewRequest";

/**
 * Primary UI component for user interaction
 */
export const IconBox = ({
  primary,
  backgroundColor,
  borderColor,
  size,
  tooltipText = "View Request",
  icon,
  ...props
}) => {
  const mode = primary
    ? "storybook-icon--primary"
    : "storybook-icon--secondary";

  const borderColorClass = `border-[#000000]`;

  primary ? "storybook-icon--primary" : "storybook-icon--secondary";

  return (
    <div
      className={["storybook-icon group", `storybook-icon--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <IconViewRequest />
      <span
        className={`absolute hidden group-hover:flex -left-[28px] -top-[10px] -translate-y-full w-max px-2 py-1 bg-gray-700 rounded text-center text-white text-txt10 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700`}
      >
        {tooltipText}
      </span>
    </div>

    // <button
    //   type="button"
    //   className={["storybook-button", `storybook-button--${size}`, mode].join(
    //     " "
    //   )}
    //   style={backgroundColor && { backgroundColor }}
    //   {...props}
    // >
    //   {icon && (
    //     <div className="flex border-2 rounded-full p-1 mr-2">
    //       <IconCross />
    //     </div>
    //   )}
    //   {tooltipText}
    // </button>
  );
};

IconBox.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
  /**
   * What border color to use
   */
  borderColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * IconBox contents
   */
  tooltipText: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

IconBox.defaultProps = {
  backgroundColor: null,
  borderColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
