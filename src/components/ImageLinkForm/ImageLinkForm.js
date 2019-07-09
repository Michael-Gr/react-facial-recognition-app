import React from 'react';
import  './ImageLinkForm.css';

const ImageLinkForm = () => {
	return (
		<div>
			<p className='f3' >
				{'This tool uses machine learning and AI to detect faces in photos. Upload a picture to give it a try!'}
			</p>
			<div className='center' >
				<div className='pa4 br3 shadow-5 center form' >
					<input className='f4 pa2 w-70 center' type='tex' />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' >{'Detect'}</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;