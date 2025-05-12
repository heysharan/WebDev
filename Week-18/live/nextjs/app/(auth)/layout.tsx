export default function AuthLayout({ children }: any) {
    return (
        <div>
            <div className="border-b p-2 text-center bg-blue-300">
                20% off for the next few days
            </div>
            {children}
        </div>
    )
}