import React from 'react';
import  './ImageLinkForm.css';

const ImageLinkForm = ({ name, onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f1 white' >
				{`Hello, ${name}!`}
			</p>
			<p className='f3 white' >
				{'This tool detects faces in photographs by using machine learning. Paste in the URL to a picture to give it a try!'}
			</p>
			<div className='center' >
				<div className='pa4 br3 shadow-5 center form' >
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
					<button className='w-30 grow f4 link ph3 pv2 dib white submit-button' onClick={onButtonSubmit} >{'Detect'}</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;