import Routes, { useEffect, useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
const List = () => {
    const Navigate = useNavigate()
    const [fakultas, setFakultas] = useState([])
    useEffect(() =>{
        Axios.get("https://apimi5a.vercel.app/fakultas")
        .then((res) => {
            const {data} = res
            setFakultas(data)
            //console.log(res)
        })
        .catch((error) => {
            alert(error)
        })
    })
    return(
    <>
        <h2>Halaman List </h2>
        <button className="btn btn-primary" onClick={() => Navigate('/fakultas/create')}>Tambah</button>
        <table className="table table-stripe">
            <thead>
                <tr><th>Nama Fakultas</th></tr>
            </thead>
            <tbody>
                {fakultas && fakultas.map(
                    (fakultas, index) =>{
                        return(
                            <tr>
                                <td>
                                    {fakultas.nama}
                                </td>
                            </tr>
                        )
                    }
                )}
            </tbody>
        </table>
    </>
    )
}
export default List