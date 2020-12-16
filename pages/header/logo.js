import react from 'react';
import Head from 'next/head';

class Logo extends Component 
{
	render()
	{
		return (
			<div class="mb-3">
				<Head>
					<title>Lobato Developer</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<h1 class="logo">&lt;IL.<span class="verdinho">DEV</span>/&gt;</h1>
				<h2 class="sublogo">WEBDEVELOPER</h2>
			</div>
		);
	}
}

export default Logo;