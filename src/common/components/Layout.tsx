import React, { ReactChild, ReactChildren } from 'react';

import Head from 'next/head';

interface Props {
	children: ReactChild | ReactChildren;
}
const Layout = ({ children }: Props) => {
	return (
		<>
			<Head>
				<title>TodoApp</title>
				<link rel="icon" href="/public/favicon.ico" />
			</Head>
			<div
				className={
					'box-border flex w-screen flex-col items-center justify-between bg-white p-16'
				}
			>
				{children}
			</div>
		</>
	);
};

export default Layout;