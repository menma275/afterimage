export default function Wrapper({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="w-full my-3 border-b-2 border-neutral-800">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            {children}
        </div>
    )
}