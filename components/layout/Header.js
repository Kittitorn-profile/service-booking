import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Text } from "../../components/element";
import { List, Icon, Image } from "semantic-ui-react";
import Hamburger from "hamburger-react";
import { Colors } from "../../helpers";
import { listAdminMenu } from "../../utils/data";

const HeaderPage = () => {
	const router = useRouter();
	const [isOpen, setOpen] = useState(false);
	const [isTab, setTab] = useState("");

	return (
		<>
			<Header>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<div
						onClick={() => {
							handleLogo();
							setOpen(false);
						}}
						style={{ paddingTop: 8 }}
					>
						<Image src="../../vercel.svg" style={{ height: 30 }} />
					</div>
					<Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
				</div>
			</Header>

			{isOpen && (
				<MenuTab>
					<List
						animated
						verticalAlign="middle"
						link
						style={{ paddingLeft: 12, paddingRight: 12 }}
					>
						{listAdminMenu.map((item) => (
							<>
								{item.show && (
									<List.Item
										style={{
											background: isTab === item.path ? "#ffffff" : "",
											borderRadius: isTab === item.path ? 8 : 0,
										}}
									>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												flexDirection: "row",
												height: 46,
												paddingTop: 6,
											}}
											onClick={() => {
												router.push(item.path);
												setOpen(false);
											}}
										>
											<List.Content style={{ paddingLeft: 12 }}>
												<List.Header>
													<Icon
														name={item.icon}
														size={16}
														style={{ marginRight: 8 }}
													/>
													<Text>{item.label_th}</Text>
												</List.Header>
											</List.Content>
										</div>
									</List.Item>
								)}
							</>
						))}
					</List>
				</MenuTab>
			)}
		</>
	);
};

export default HeaderPage;

const Header = styled.div`
	padding: 16px;
	height: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background: #ffc95c;
	position: fixed !important;
	z-index: 999;
	width: 100%;
`;

const MenuTab = styled.div`
	min-height: 100px;
	padding-top: 72px;
	padding-bottom: 16px;
	background-color: ${Colors.secoundnary};
	width: 100%;
	position: fixed;
	z-index: 99;
	cursor: pointer;
	border-radius: 20px;
`;
