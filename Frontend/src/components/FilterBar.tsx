
type Props = {
    filter: string
    setFilter: (f: string) => void
}


export default function FilterBar({ filter, setFilter }: Props) {
    return (
        <div className="flex items-center gap-4">
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border rounded-lg px-4 py-2">
                <option value="all">Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
        </div>
    )
}