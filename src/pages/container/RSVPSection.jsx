import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../../supabase'
import toast from 'react-hot-toast'
import GenerateAvatar from '../components/GenerateAvatar'

export default function RSVPSection() {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        attendance: 'true',
        guest: '1',
        church: '',
        reception: ''
    })
    const [isVisible, setIsVisible] = useState('true')
    const [dataAttendance, setDataAttendance] = useState([])

    async function getAllAttendance() {
        try {
            const { data, error } = await supabase.from('attendance').select('*')
            setDataAttendance(data)
            setFormData({ name: '', message: '', attendance: 'true', guest: '1', church: '', reception: '' })
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
            const { data, error } = await supabase.from('attendance').insert({
                name: formData.name,
                message: formData.message,
                attendance: formData.attendance,
                guest: formData.guest,
                church: formData.church,
                reception: formData.reception
            })
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
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='text-2xl text-center my-4 font-parisienne'
            >
                Confirmation of Attendance
            </motion.h1>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='text-xl text-center my-4 font-parisienne'
            >
                See you there
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='p-4 m-4 rounded-2xl'
            >
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1 text-sm font-medium text-black">Full Name</label>
                        <input type="name" id="name" name='name' value={formData.name} className="border-b border-gray-300 text-black text-sm block w-full p-2 bg-transparent placeholder:text-black/50 focus-visible:border-none" placeholder="Name ..." onChange={handleChange} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="message" className="block mb-1 text-sm font-medium text-black">Message:</label>
                        <textarea id="message" name='message' rows="4" value={formData.message} className="border border-gray-300 text-black text-sm rounded-lg block w-full p-2 bg-transparent placeholder:text-black/50" placeholder="Message..." onChange={handleChange}></textarea>
                    </div>
                    <div className='mb-4'>
                        <label className="block mb-1 text-sm font-medium text-black">Confirmation of Attendance</label>
                        <div className="toggle">
                            <input type="radio" name="attendance" value={'true'} id="attedance" onChange={handleChange} checked={formData.attendance === 'true'} />
                            <label htmlFor="attedance">Hadir</label>
                            <input type="radio" name="attendance" value={'false'} id="notattendance" onChange={handleChange} checked={formData.attendance === 'false'} />
                            <label htmlFor="notattendance">Tidak Hadir</label>
                        </div>
                    </div>
                    {isVisible === 'true' ? (
                        <motion.div
                            initial={{ opacity: 0, translateY: -100 }}
                            animate={{ opacity: 1, translateY: 1 }}
                            transition={{ duration: .5 }}
                            viewport={{ once: true }}
                        >
                            <div className='my-8'>
                                <div className='my-4'>
                                    <input type="checkbox" name="church" id="church" className='mr-2' onChange={handleChange} />
                                    <label htmlFor="church" className='text-xl'>Holy Matrimony</label>
                                </div>
                                <div className='my-4'>
                                    <input type="checkbox" name="reception" id="reception" className='mr-2' onChange={handleChange} />
                                    <label htmlFor="reception" className='text-xl'>Wedding Reception</label>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="guest" className="block mb-1 text-sm font-medium text-black">Guests</label>
                                <select id="guest" name='guest' value={formData.guest} className="border border-gray-300 text-black text-sm rounded-lg block w-full p-2 bg-transparent placeholder:text-black/50" required onChange={handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </motion.div>
                    ) : null}
                    <div className='my-8 mx-[20%]'>
                        <button type="submit" className="text-white hover:text-black bg-[#2b2b2b] hover:bg-white border border-black/40 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-12 py-3 text-center duration-150 ease-in-out" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>

                {/*========== Chat Section ========== */}
                <div className='my-3 max-w-sm mx-auto bg-white/40 rounded-xl'>
                    <div className='max-h-72 overflow-y-auto overflow-x-auto border border-black/10 rounded-xl'>
                        {dataAttendance?.map(value => (
                            <div key={value.id} className='p-2 flex text-sm text-black'>
                                <div className='w-2/12 flex justify-center items-start'>
                                    <GenerateAvatar name={value.name} />
                                </div>
                                <div className='flex-1 py-2 px-4 bg-gray-100 rounded-lg shadow-black/20 shadow-md'>
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
