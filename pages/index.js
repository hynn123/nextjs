import Logo from '../pages/header/logo'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div class="container">
			<div class="row">
				<div class="col">
					<Logo />

					<div class="d-flex flex-column justify-content-center">
						<div class="dropdown mb-3">
							<button type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-secondary btn-verde btn-block dropdown-toggle">
								Portfólio
							</button>

							<div aria-labelledby="dropdownMenu2" class="dropdown-menu text-center">
								<button type="button" class="dropdown-item">Layouts</button>
								<button type="button" class="dropdown-item">Banners</button> <button type="button" class="dropdown-item">Logos</button>
							</div>
						</div>

						<a href="#" class="btn btn-secondary btn-verde">Sobre mim</a>
						<a href="#" class="btn btn-secondary btn-verde">Contato</a></div>

					<footer class="mt-3 text-white text-center">Todos os direitos reservados ©</footer>
				</div>
			</div>
		</div>
	);
}