import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../../supabase'
import toast from 'react-hot-toast'
import GenerateAvatar from '../../components/GenerateAvatar'

export default function RSVPSection() {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        attendance: 'true',
        guest: '1'
    })
    const [isVisible, setIsVisible] = useState('true')
    const [dataAttendance, setDataAttendance] = useState([])

    async function getAllAttendance() {
        try {
            const { data, error } = await supabase.from('attendance').select('*')
            setDataAttendance(data)
            setFormData({ name: '', message: '', attendance: 'true', guest: '1' })
            setIsVisible('true')

            if (error) throw error
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllAttendance()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))


        if (name === 'attendance') {
            value === 'true' ? setIsVisible('true') : setIsVisible('false')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data, error } = await supabase.from('attendance').insert({ name: formData.name, message: formData.message, attendance: formData.attendance, guest: formData.guest })
            dataAttendance.push(data)
            toast.success('Thank you for your prayers')

            if (error) throw error
        } catch (error) {
            console.log(error)
        }

        getAllAttendance()
    }

    return (
        <section className='h-full p-4'>
            <motion.div
                initial={{ opacity: 0, translateX: 100 }}
                whileInView={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className='p-8 m-4 bg-black/40 rounded-2xl'
            >
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-2">
                        <label htmlFor="name" className="block mb-1 text-sm font-medium text-white">Nama</label>
                        <input type="name" id="name" name='name' value={formData.name} className="border border-gray-300 text-white text-sm rounded-lg block w-full p-2 bg-transparent placeholder:text-white/50" placeholder="Nama ..." onChange={handleChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="message" className="block mb-1 text-sm font-medium text-white">Ucapan:</label>
                        <textarea id="message" name='message' rows="4" value={formData.message} className="border border-gray-300 text-white text-sm rounded-lg block w-full p-2 bg-transparent placeholder:text-white/50" placeholder="Ucapan..." onChange={handleChange}></textarea>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="attendance" className="block mb-1 text-sm font-medium text-white">Konfirmasi kehadiran</label>
                        <select id="attendance" name='attendance' value={formData.attendance} className="border border-gray-300 text-white text-sm rounded-lg block w-full p-2 bg-transparent placeholder:text-white/50" required onChange={handleChange}>
                            <option value='true'>Hadir</option>
                            <option value='false'>Tidak hadir</option>
                        </select>
                    </div>
                    {isVisible === 'true' ? (
                        <div className='mb-2'>
                            <label htmlFor="guest" className="block mb-1 text-sm font-medium text-white">Tamu</label>
                            <select id="guest" name='guest' value={formData.guest} className="border border-gray-300 text-white text-sm rounded-lg block w-full p-2 bg-transparent placeholder:text-white/50" required onChange={handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    ) : null}
                    <button type="submit" className="text-white bg-white/30 my-3 hover:bg-white/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center duration-150 ease-in-out" onClick={handleSubmit}>Submit</button>
                </form>

                {/*========== Chat Section ========== */}
                <div className='my-3 max-w-sm mx-auto bg-white/10 rounded-xl'>
                    <div className='max-h-72 overflow-y-auto overflow-x-auto border border-white/20 rounded-xl'>
                        {dataAttendance?.map(value => (
                            <div key={value.id} className='p-2 flex text-sm text-white'>
                                <div className='w-2/12 flex justify-center items-start'>
                                    <GenerateAvatar name={value.name} />
                                </div>
                                <div className='flex-1 py-2 px-4 bg-white/10 rounded-lg shadow-white/20 shadow-md'>
                                    <p className='font-bold text-sm my-1'>{value.name}</p>
                                    <p className='text-sm break-words'>{value.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*========== Chat Section ========== */}
            </motion.div>
        </section>
    )
}
