import { cn } from '@/lib/utils'

interface SectionProps {
	children: React.ReactNode
	className?: string
	fullWidth?: boolean
}

const Section: React.FC<SectionProps> = ({
	children,
	className,
	fullWidth = false
}) => {
	return (
		<section
			className={cn(
				'py-12 sm:py-14 md:py-16 lg:py-20 xg:py-24 xl:py-28',
				!fullWidth &&
					'mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 xg:px-24 xl:px-32',
				className
			)}
		>
			{children}
		</section>
	)
}

export default Section
