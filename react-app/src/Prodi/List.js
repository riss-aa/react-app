import Routes, { useEffect, useState } from "react"
import Axios from "axios"
const List = () => {
    const [prodi, setProdi] = useState([])
    useEffect(() =>{
        Axios.get("https://apimi5a.vercel.app/prodi")
        .then((res) => {
            const {data} = res
            setProdi(data)
            //console.log(res)
        })
        .catch((error) => {
            alert(error)
        })
    })
    return(
    <>
        <h2>Halaman List </h2>
        <table className="table table-stripe">
            <thead>
                <tr>
                    <th>Nama Program Studi</th>
                    <th>Nama Fakultas</th>
                 </tr>
                
            </thead>
            <tbody>
                {prodi && prodi.map(
                    (prodi, index) =>{
                        return(
                            <tr>
                                <td>
                                    {prodi.nama}
                                </td>
                                <td>
                                    {prodi.fakultas.nama}
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