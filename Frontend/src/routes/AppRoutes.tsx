
import { Routes, Route, Navigate } from 'react-router-dom'
import LeadsPage from '../pages/LeadsPage'


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LeadsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}