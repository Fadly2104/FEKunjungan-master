import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useThemeProvider } from '../utils/ThemeContext';
import { Button } from "@material-tailwind/react";

export default function TableReview() {

const [isi, setIsi] = useState([]);

useEffect(() => {
    const fetchData = () =>{
        axios.get('https://localhost:7286/api/Peminjaman').then(postData => {

        // reshaping the array
        const customHeadings = postData.data.map(item=>({
           "idPeminjaman": item.idPeminjaman,
           "idRuangan": item.idRuangan,
           "namaPIC": item.namaPIC,
           "email": item.email,
           "noHp": item.noHp,
           "jumlahTamu": item.jumlahTamu,
           "startTime": item.startTime,
           "endTime": item.endTime,
           "keperluan": item.keperluan,
           "status": item.status,
        }))
        setIsi(customHeadings)
         // console.log(customHeadings);
        })
       }
       fetchData()
     }, [])

const wee = isi.map((png) => png.idPeminjaman);
// console.log(wee);

const navigate = useNavigate();
const [status, setStatus] = useState('On Request')

function handleNavigate(e) {
    e.preventDefault()
    navigate('/detailreview',
    {
        state:{
          status: status
        }
    })
}

const columns = [
    {
        name: 'Nama',
        selector: row => row.nama,
    },
    {
        name: 'Ruangan',
        selector: row => row.ruang,
    },
    {
        name: 'Aksi',
        selector: row => row.aksi,
    },
];

// const [approve, setApprove] = useState(0);
// const [canceled, setCanceled] = useState(0);

// const handleClick = () => {
//     setApprove(1)
//     setCanceled(2)
//     setStatus('Approved')
// }

// const handleCancel = () => {
//     setCanceled(1)
//     setApprove(2)
//     setStatus('Cancelled')
// }

// function approval() {
//     if (approve == 0) {
//         return <Button color="green" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" onClick={handleClick}>Approve</Button>
//     } 
//     if (approve == 2) {
//         return <Button color="grey" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" disabled={true}>-</Button>
//     }else {
//         return <Button color="green" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" disabled={true}>Approved</Button>
//     }
// }

// function cancel() {
//     if (canceled == 0) {
//         return <Button color="red" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" onClick={handleCancel}>Cancel</Button>
//     } 
//     if (canceled == 2) {
//         return <Button color="grey" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" disabled={true}>-</Button>
//     }else {
//         return <Button color="red" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" disabled={true}>Cancelled</Button>
//     }
// }

const detail = () => {
    return <Button color="amber" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" onClick={handleNavigate}>Detail</Button>
}

const data = [
    {
        nama: 'Anton Szandor LaVey',
        ruang: 'Collaboration',
        aksi: [detail()],
    }
]

const { currentTheme } = useThemeProvider();

    return (
        <DataTable 
            pagination
            fixedHeader
            fixedHeaderScrollHeight="300px"
            responsive
            columns={columns}
            data={data}
            theme={currentTheme}
        />
    );
}