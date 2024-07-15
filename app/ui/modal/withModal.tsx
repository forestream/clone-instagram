"use client";

import React, {
	ComponentType,
	MouseEventHandler,
	PropsWithChildren,
	useRef,
} from "react";
import { createPortal } from "react-dom";

interface ModalProps {
	closeModal: () => void;
	onImageChange: (image: string) => void;
}

export default function withModal(
	Component: ComponentType<PropsWithChildren<ModalProps>>
) {
	return function Modal(props: PropsWithChildren<ModalProps>) {
		const ref = useRef<HTMLDivElement>(null);

		const handleClickOutside: MouseEventHandler = (e) => {
			if (ref.current && (e.target as Node).contains(ref.current))
				props.closeModal();
		};

		return (
			<>
				{createPortal(
					<div
						onClick={handleClickOutside}
						className="z-20 fixed inset-0 bg-modal-black flex justify-center items-center "
						ref={ref}
					>
						<Component {...props} />
					</div>,
					document.body
				)}
			</>
		);
	};
}
