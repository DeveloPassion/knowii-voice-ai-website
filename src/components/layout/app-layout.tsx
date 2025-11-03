import { Outlet } from 'react-router'
import Header from './header'
import Footer from './footer'
import ScrollToTop from '@/components/ui/scroll-to-top'
import ScrollToTopButton from '@/components/ui/scroll-to-top-button'

const AppLayout: React.FC = () => {
	return (
		<>
			<ScrollToTop />
			<Header />
			<main className="flex flex-1 flex-col items-center w-full">
				<Outlet />
			</main>
			<Footer />
			<ScrollToTopButton />
		</>
	)
}

export default AppLayout
