"use client";

interface PagePatternWrapperProps {
    children: React.ReactNode;
}

const PagePatternWrapper = ({ children }: PagePatternWrapperProps) => {
    return (
        <div 
            className="page-pattern-wrapper" 
            style={{ 
                minHeight: '100vh',
                position: 'relative',
                width: '100%'
            }}
        >
            <div 
                className="page-background-pattern"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/assets/img/banner/trama_background_banner_1.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default PagePatternWrapper;

