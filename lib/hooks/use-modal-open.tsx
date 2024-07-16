import { useState } from "react";

export default function useModalOpen(): [boolean, (value: boolean) => void] {
	const [open, setOpen] = useState(false);

	const handleOpen = (value: boolean) => setOpen(value);

	return [open, handleOpen];
}
