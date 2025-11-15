

export default function NewLeadButton({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className="bg-leadblocks-500 text-white px-4 py-2 rounded-lg shadow">
            + New Lead
        </button>
    )
}