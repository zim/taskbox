import React from "react";
import PropTypes from "prop-types";
// import "./button.css";
import IconCross from "../stories/assets/IconCross";

/**
 * Primary UI component for user interaction
 */
export const ButtonTailwind = ({
  primary,
  backgroundColor,
  size,
  label,
  icon,
  variant,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  console.log(variant);

  const modeClass = (variant) => {
    console.log("modeClass = (variant) ==== ", variant);
    let btnModeClass;
    // let btnSendSpanClass;
    // let stateLabel;

    switch (variant) {
      case "primary":
        btnModeClass = "storybook-button--primary";
        break;
      case "secondary":
        btnModeClass = "storybook-button--secondary";
        break;

      default:
        btnModeClass = "storybook-button--primary";
        break;
    }

    return { btnModeClass };
  };

  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        modeClass(variant).btnModeClass,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {icon && (
        <div className="flex border-2 rounded-full p-1 mr-2">
          <IconCross />
        </div>
      )}
      {label}
    </button>
  );
};

ButtonTailwind.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonTailwind.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
