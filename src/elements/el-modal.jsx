import { render, h } from 'preact';
import { useState } from 'preact/hooks';

/** @jsx h */

const Modal = ({text, children}) => {
	const [input, setInput] = useState('');

	return (
		<div>
			<h1 className="text-2xl">{text}</h1>
		</div>
	)
}

export default Modal;