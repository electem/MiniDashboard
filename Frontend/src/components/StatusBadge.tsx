
export default function StatusBadge({ status }: { status: 'Active' | 'Inactive' }) {
    const base = 'px-3 py-1 rounded-full text-sm font-medium'
    return (
        <span className={base + (status === 'Active' ? ' bg-blue-100 text-black-800' : ' bg-blue-100 text-black-800')}>
            {status}
        </span>
    )
}