import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

export default function VisitsChart({ visits }) {

    const [data, setData] = useState([])

    const getData = () => {

        const visitsDates = visits.map(visit => {
            const date = new Date(visit.date)
            const day = date.getDate()
            const month = date.getMonth() + 1
            return `${month}/${day}`
        })

        let index = 0
        const groupedVisits = []
        visitsDates.forEach(date => {
            if (!groupedVisits[0]) {
                groupedVisits[index] = {}
                groupedVisits[index].date = date
                groupedVisits[index].amount = 1
            } else if (groupedVisits[index].date === date) {
                groupedVisits[index].amount++
            } else {
                index++
                groupedVisits[index] = {}
                groupedVisits[index].date = date
                groupedVisits[index].amount = 1
            }
        })

        return groupedVisits.slice(-29, groupedVisits.length)
    }

    useEffect(() => {
        const data = getData()
        setData(data)
    }, [])

    return (
        <ResponsiveContainer width="80%" minHeight="200px">
            <BarChart width={500} height={300} data={data} >
                <Bar dataKey="amount" fill="#aaf" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    )
}