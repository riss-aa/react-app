import Routes, { useEffect, useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
const List = () => {
    const Navigate = useNavigate()
    const [fakultas, setFakultas] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() =>{
        Axios.get("https://apimi5a.vercel.app/fakultas")
        .then((res) => {
            const {data} = res
            setFakultas(data)
            setLoading(true);
            //console.log(res)
        })
        .catch((error) => {
            alert(error)
        })
    
    })
const handleDelete = async (id, nama) => {
    
}
    return(
    <>
        <h2>Halaman List </h2>
        <button className="btn btn-primary" onClick={() => Navigate('/fakultas/create')}>Tambah</button>
        {loading ?
        <table className="table table-stripe">
            <thead>
                <tr>
                    <th>Nama Fakultas</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {fakultas && fakultas.map(
                    (fakultas, index) =>{
                        return(
                            <tr>
                                <td>{fakultas.nama}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger" data-name="{fakultas, nama}" onClick={() => handleDelete(fakultas._id, fakultas._nama)}>Hapus</button>
                                </td>
                            </tr>
                        )
                    }
                )}
            </tbody>
        </table>
         : <div class="spinner-border text-secondary" role="status">
        <span class="sr-only"></span>
      </div>
        }
    </>
    )
}
export default List