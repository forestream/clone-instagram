"use client";

import React, { ComponentType, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
	closeModal: () => void;
}

export default function withModal(
	Component: ComponentType<PropsWithChildren<ModalProps>>
) {
	return function Modal(props: PropsWithChildren<ModalProps>) {
		const handleClick = () => {
			props.closeModal();
		};

		return (
			<>
				{createPortal(
					<div
						onClick={handleClick}
						className="z-20 fixed inset-0 bg-modal-black flex justify-center items-center "
					>
						<Component {...props} />
					</div>,
					document.body
				)}
			</>
		);
	};
}
