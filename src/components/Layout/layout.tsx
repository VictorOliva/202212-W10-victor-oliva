export function Main({ children }: { children: JSX.Element }) {
    return (
        <>
            <div className="container">
                <main className="main">{children}</main>
            </div>
        </>
    );
}
