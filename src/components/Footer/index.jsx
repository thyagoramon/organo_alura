import './Footer.css'
import '@/index.css'

const Footer = (props) => {
	return (
		<footer className='footer'>
			<div className='footer-container container'>
				<div className='footer-redes'>
					<a href="#">
						<img src="./src/assets/fb.png" alt="Facebook" />
					</a>
					<a href="#">
						<img src="./src/assets/tw.png" alt="Twitter" />
					</a>
					<a href="#">
						<img src="./src/assets/ig.png" alt="Instagram" />
					</a>
				</div>
				<a className='footer-logo' href="#">
					<img src="./src/assets/logo.png" alt="Logo Organo" />
				</a>
				<p className='footer-dev'>Desenvolvido por <a href="https://github.com/thyagoramon" target='_blank'>{props.dev}</a></p>
			</div>
		</footer>
	)
}

export default Footer
