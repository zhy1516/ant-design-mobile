import variables from '../../style/themes/default.native';

export default {
  container: {
    flexDirection: 'row',
  },
  defaultHighlight: {
    backgroundColor: variables.fill_tap,
    borderColor: variables.border_color_base,
  },
  primaryHighlight: {
    backgroundColor: variables.primary_button_fill_tap,
    borderColor: variables.primary_button_fill,
  },
  ghostHighlight: {
    backgroundColor: variables.ghost_button_fill_tap,
    borderColor: variables.ghost_button_color,
  },
  warningHighlight: {
    backgroundColor: variables.warning_button_fill_tap,
    borderColor: variables.warning_button_fill,
  },
  wrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: variables.radius_md,
    borderWidth: 1,
  },
  largeRaw: {
    height: variables.button_height,
    paddingLeft: variables.h_spacing_lg,
    paddingRight: variables.h_spacing_lg,
  },
  smallRaw: {
    height: variables.button_height_sm,
    paddingLeft: variables.h_spacing_sm,
    paddingRight: variables.h_spacing_sm,
  },
  defaultRaw: {
    backgroundColor: variables.fill_base,
    borderColor: variables.border_color_base,
  },
  primaryRaw: {
    backgroundColor: variables.primary_button_fill,
    borderColor: variables.primary_button_fill,
  },
  ghostRaw: {
    backgroundColor: 'transparent',
    borderColor: variables.ghost_button_color,
  },
  warningRaw: {
    backgroundColor: variables.warning_button_fill,
    borderColor: variables.warning_button_fill,
  },
  defaultDisabledRaw: {
    backgroundColor: variables.fill_disabled,
    borderColor: variables.fill_disabled,
  },
  primaryDisabledRaw: {
    opacity: 0.4,
  },
  ghostDisabledRaw: {
    borderColor: `${variables.ghost_button_color}66`, // alpha 40%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  warningDisabledRaw: {
    opacity: 0.4,
  },
  defaultHighlightText: {
    color: variables.color_text_base,
  },
  primaryHighlightText: {
    color: variables.color_text_base_inverse,
  },
  ghostHighlightText: {
    color: variables.color_text_base_inverse,
  },
  warningHighlightText: {
    color: variables.color_text_base_inverse,
  },
  largeRawText: {
    fontSize: variables.button_font_size,
  },
  smallRawText: {
    fontSize: variables.button_font_size_sm,
  },
  defaultRawText: {
    color: variables.color_text_base,
  },
  primaryRawText: {
    color: variables.color_text_base_inverse,
  },
  ghostRawText: {
    color: variables.ghost_button_color,
  },
  warningRawText: {
    color: variables.color_text_base_inverse,
  },
  defaultDisabledRawText: {
    color: `${variables.color_text_base}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  primaryDisabledRawText: {
    color: `${variables.color_text_base_inverse}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  ghostDisabledRawText: {
    color: `${variables.ghost_button_color}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  warningDisabledRawText: {
    color: `${variables.color_text_base_inverse}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  indicator: {
    marginRight: variables.h_spacing_md,
  },
};
