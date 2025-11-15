
import type { Lead } from '../types/Lead'
import StatusBadge from './StatusBadge'


type Props = {
    leads: Lead[]
}


export default function LeadTable({ leads }: Props) {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <table className="w-full table-auto">
                <thead className="bg-blue-50">
                    <tr className="text-left text-sm text-gray-500">
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Company</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map(l => (
                        <tr key={l.id} className="border-t">
                            <td className="py-4 px-4">{l.name}</td>
                            <td className="py-4 px-4">{l.company}</td>
                            <td className="py-4 px-4">{l.email}</td>
                            <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                    <StatusBadge status={l.status} />
                                    
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}