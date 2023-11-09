import { useCallback, useState } from "react";
import useRegisterModal from "@/hooks/useRegisterModal";
import Input from "../Input";
import Modal from "../Modal";

const RegisterModal = () => {
	const registerModal = useRegisterModal();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);

			// TODO & LOG IN

			registerModal.onClose();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [registerModal]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				placeholder="Email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				disabled={isLoading}
			/>
			<Input
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				disabled={isLoading}
			/>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Login"
			actionLabel="Sign In"
			onClose={registerModal.onClose}
			onSubmit={onSubmit}
			body={bodyContent}
		/>
	);
};

export default RegisterModal;
