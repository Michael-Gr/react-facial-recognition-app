import React from 'react';
import  './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f1' >
				{'Face Finder'}
			</p>
			<p className='f3' >
				{'This tool detects faces in photographs by using machine learning. Upload a picture to give it a try!'}
			</p>
			<div className='center' >
				<div className='pa4 br3 shadow-5 center form' >
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit} >{'Detect'}</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;