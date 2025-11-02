import { Outlet } from 'react-router'
import Header from './header'
import Footer from './footer'

const AppLayout: React.FC = () => {
	return (
		<>
			<Header />
			<main className="flex flex-1 flex-col items-center w-full">
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default AppLayout
