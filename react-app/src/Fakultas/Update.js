import Axios  from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
const Update = () => {
    const navigate = useNavigate()
    const {fakultasId} = useParams()
    const [fakultas, setFakultas] = useState({
        nama: ""
    })
    
    useEffect(() => {
        const getFakultas = async () => {
            try {
                await Axios.get (`https://apimi5a.vercel.app/fakultas/${fakultasId}`)
                .then((res) => {
                    const {data} = res
                    setFakultas({
                        nama: data.nama
                    })
                })
            }catch (error) {
                alert(error)
            }
        }
        getFakultas()
    },[fakultasId])

    const handleChange = (e, name) => {
        const value = e.target.value
        setFakultas({...fakultas, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await  Axios.post(`https://apimi5a.vercel.app/fakultas/${fakultasId}`,fakultas)
              .then((res) => {
                  navigate("/fakultas")
              })
          }
          catch (error) {
              alert(error)
          }
        
    }    
    return(
        <>
            <h2>Halaman Update Fakultas</h2>
            <form>
                <input type="text" value={fakultas.nama} onChange={(e) => handleChange(e, "nama")}
                className="form-control" placeholder="Input Nama Fakultas"/>
                <button onClick={handleSubmit} className="btn btn-ptimary">Simpan</button>
                <button className="btn btn-light" onClick={() => navigate("/fakultas")}>kembali</button>
            </form>
        </>
        
    )
}
export default Update