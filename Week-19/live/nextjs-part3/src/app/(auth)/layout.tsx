import { ReactNode } from "react";

export default function Layout ({ children }: { children: ReactNode}) {
    return(
        <div>
            <header className="font-bold text-3xl text-white m-3">Header</header>
            {children}
            <footer className="font-bold text-3xl text-white m-3">Footer</footer>
            
        </div>
    )
}