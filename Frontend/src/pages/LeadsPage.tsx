import { useEffect, useState } from "react";
import { getLeads } from "../api/leadsApi";
import LeadTable from "../components/LeadTable";
import FilterBar from "../components/FilterBar";
import AddLeadModal from "../components/AddLeadModal";
import type { Lead } from "../types/Lead";

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);

  const [statusFilter, setStatusFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadLeads = async () => {
    const data = await getLeads();
    setLeads(data);
    setFilteredLeads(data);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  useEffect(() => {
    if (statusFilter === "all") {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(leads.filter((l) => l.status === statusFilter));
    }
  }, [statusFilter, leads]);

  return (
    <div className="min-h-screen bg-blue-950">
      {/* TOP HEADER */}
      <header className="bg-blue-950 text-white py-4">
        <div className="max-w-6xl mx-auto px-18 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Mini Dashboard met API-Koppeling</h1>
        
        </div>
      </header>

      {/* MAIN CONTENT CARD */}
      <div className="max-w-5xl mx-auto bg-white mt-6 p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-blue-950">Leads</h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-950 text-white px-4 py-2 rounded-lg shadow font-semibold"
          >
            + New Lead
          </button>
        </div>

        <FilterBar filter={statusFilter} setFilter={setStatusFilter} />

        <LeadTable leads={filteredLeads} />
      </div>

      {isModalOpen && (
        <AddLeadModal onClose={() => setIsModalOpen(false)} onCreated={loadLeads} />
      )}
    </div>
  );
}
