import React, { useState } from 'react'
import { createLead } from '../api/leadsApi'
import type { Lead } from '../types/Lead'


export default function AddLeadModal({ onClose, onCreated }: { onClose: () => void, onCreated: (l: Lead) => void }) {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'Active' | 'Inactive'>('Active')
    const [loading, setLoading] = useState(false)


    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const newLead = await createLead({ name, company, email, status })
            onCreated(newLead)
            onClose()
        } catch (e) {
            console.error(e)
        } finally { setLoading(false) }
    }


    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-[480px]">
                <h3 className="text-xl font-semibold mb-4">Add New Lead</h3>
                <form onSubmit={submit} className="space-y-3">
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="w-full border rounded px-3 py-2" required />
                    <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" className="w-full border rounded px-3 py-2" required />
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" className="w-full border rounded px-3 py-2" required />
                    <select value={status} onChange={e => setStatus(e.target.value as 'Active' | 'Inactive')} className="w-full border rounded px-3 py-2">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
                        <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-leadblocks-500 text-white">{loading ? 'Saving...' : 'Save'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}