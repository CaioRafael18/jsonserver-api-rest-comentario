// Importando um icone, componente e css.
import { LogoIcon } from "./assets/icons"
import CrudUser from "./components/CrudUser"
import "./styles/App.css"

function App() { // componente principal.
	return (
		<> //Definindo elemento de cabeçalho.
			<header> 
				<div className='header__content'>
					<div className='logo'>
						<LogoIcon />
						<strong>JSON SERVER API</strong>
					</div>
				</div>
			</header>
			// Definindo elemento principal da pagina.
			<main>
				<CrudUser />
			</main>
		</>
	)
}

export default App /// Exporta o componente.
