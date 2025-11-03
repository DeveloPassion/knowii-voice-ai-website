import { cn } from '@/lib/utils'

interface CTAButtonProps {
    href: string
    children: React.ReactNode
    className?: string
    size?: 'small' | 'default' | 'large'
}

const CTAButton: React.FC<CTAButtonProps> = ({ href, children, className, size = 'default' }) => {
    const sizeClasses = {
        small: 'px-4 py-2 text-sm',
        default: 'px-8 py-3 text-base md:px-10 md:py-3.5 lg:text-lg',
        large: 'px-12 py-4 text-lg md:px-14 md:py-5 md:text-xl lg:px-16 lg:py-6 lg:text-2xl'
    }

    return (
        <a
            href={href}
            className={cn(
                'bg-secondary hover:bg-secondary/90 hover:shadow-secondary/30 inline-block rounded-lg font-bold text-white transition-all hover:shadow-xl',
                sizeClasses[size],
                className
            )}
        >
            {children}
        </a>
    )
}

export default CTAButton
