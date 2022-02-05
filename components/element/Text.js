import React, { Children } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Colors } from "../../helpers";

const StyleText = styled.span`
	font-family: Prompt;
	color: ${(props) => (props.fontColor ? props.fontColor : `${Colors.black}`)};
	font-size: ${(props) => (props.fontSize ? props.fontSize : 16)}px;
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
	line-height: 1.6;
`;

const Text = ({ style, fontSize, fontWeight, fontColor, children }) => {
	return (
		<StyleText
			style={style}
			fontSize={fontSize}
			fontWeight={fontWeight}
			fontColor={fontColor}
		>
			{children}
		</StyleText>
	);
};

export default Text;
