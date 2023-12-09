import  Axios  from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
const Create = () => {
    const navigate = useNavigate()
    const [fakultas, setFakultas] = useState({
        nama: ""
    })

    const handleChange = (e, name) => {
        const value = e.target.value
        setFakultas({...fakultas,[name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
          await  Axios.post("https://apimi5a.vercel.app/fakultas",fakultas)
            .then((res) => {
                alert('Fakultas berhasil disimpan')
                navigate("/fakultas")
            })
        }
        catch (error) {
            alert(error)
        }
    }
    return(
        <>
            <h2>Halaman Create Fakultas</h2>
            <form>
                <input type="text" value={fakultas.nama} onChange={(e) => handleChange(e, "nama")}
                className="form-control" placeholder="Input Nama Fakultas"/>
                <button onClick={handleSubmit} className="btn btn-ptimary">Simpan</button>
            </form>
        </>
    )
}       
export default Create