import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const wpx = (px: number) => wp(`${(px / 375) * 100}`);
const Sizes = {
  device_width: wp("100%"),
  device_height: hp("100%"),
  headerHeight: wpx(50),
  width: (per: string | number) => wp(`${per}`),
  height: (per: string | number) => hp(per),

  medium: wpx(14),
  default: wpx(16),
  big: wpx(18),
  large: wpx(24),
  larger: wpx(28),
  huge: wpx(32),
  gigantic: wpx(48),

  border_radius: wpx(4),
  oval_radius: wpx(32),
  elevation: wpx(2),
  input_height: wpx(40),
  border: wpx(1),

  //font text ,icon
  tiny: wpx(8),
  little: wpx(10),
  smaller: wpx(12),
  small: wpx(14),
  normal: wpx(16),
  heading2: wpx(24),
  heading1: wpx(32),
  wpx: wpx,
};

export { Sizes };
