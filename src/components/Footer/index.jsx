import fbIcon from '@/assets/fb.png'
import twIcon from '@/assets/tw.png'
import igIcon from '@/assets/ig.png'
import logo from '@/assets/logo.png'
import './Footer.css'

const Footer = ({dev, link}) => {
	return (
		<footer className='footer'>
			<div className='footer-container container'>
				<div className='footer-redes'>
					<a href="#">
						<img src={fbIcon} alt="Facebook" />
					</a>
					<a href="#">
						<img src={twIcon} alt="Twitter" />
					</a>
					<a href="#">
						<img src={igIcon} alt="Instagram" />
					</a>
				</div>
				<a className='footer-logo' href="#">
					<img src={logo} alt="Logo Organo" />
				</a>
				<p className='footer-dev'>Desenvolvido por <a href={link} target='_blank'>{dev}</a></p>
			</div>
		</footer>
	)
}

export default Footer
