import React from 'react';

import './message.css';

const formatText = text => text.replace(/\.+/gmi, '.\n');

const Message = ({ text, type }) => (
	<article className={'message ' + type}>
		<div className="message__text">
			{formatText(text)}
		</div>
	</article>
);

export default Message;