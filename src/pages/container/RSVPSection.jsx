import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../../supabase'
import toast from 'react-hot-toast'
import GenerateAvatar from '../components/GenerateAvatar'
import { MotionDiv, MotionH1 } from '../components/ui/MotionOpacity'

export default function RSVPSection() {
    const [isVisible, setIsVisible] = useState('true')
    const [dataAttendance, setDataAttendance] = useState(null)

    const [formData, setFormData] = useState({
        name: '',
        message: '',
        attendance: 'true',
        guest: '1',
        church: 'false',
        reception: 'false'
    })

    const handleReset = () => {
        setFormData({
            name: '',
            message: '',
            attendance: 'true',
            guest: '1',
            church: 'false',
            reception: 'false'
        })
    }

    const getAttendance = async () => {
        try {
            const { data: list, error } = await supabase.from('attendance').select(`*`)
            setDataAttendance(list)
            setIsVisible('true')
            handleReset()

            if (error) throw error
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target

        if (type === 'checkbox' && (name === 'church' || name === 'reception')) {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked ? 'true' : 'false'
            }))
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }))
        }

        if (name === 'attendance') {
            value === 'true' ? setIsVisible('true') : setIsVisible('false')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (formData.name === '' || formData.message === '') {
                toast.error('Please fill the name and message ')
            } else {
                const { data: user, error } = await supabase.from('attendance').insert({
                    name: formData.name,
                    message: formData.message,
                    attendance: formData.attendance,
                    guest: formData.attendance === 'false' ? '0' : formData.guest,
                    church: formData.attendance === 'false' ? 'false' : formData.church,
                    reception: formData.attendance === 'false' ? 'false' : formData.reception,
                    bride_id: 4
                })
                dataAttendance.push(user)
                getAttendance()
                toast.success('Thank you for your prayers')

                if (error) throw error
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAttendance()
    }, [])

    return (
        <section className='h-full py-4 px-6 font-cormorantgaramond'>
            <MotionH1 className='text-2xl text-center my-4'>
                CONFIRMATION OF ATTENDANCE
            </MotionH1>
            <MotionH1 className='text-2xl text-center my-4 tracking-wider font-greatvibes'>
                See you there!
            </MotionH1>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='p-2 mx-1 rounded-2xl'
            >
                <form onSubmit={handleSubmit} className="max-w-sm mb-20 mx-auto">
                    <MotionDiv className="mb-4">
                        <label htmlFor="name" className="block mb-1 text-lg font-medium text-black">FULL NAME</label>
                        <input type="text" id="name" name='name' value={formData.name} className="border-b border-gray-300 text-black text-lg block w-full p-2 bg-transparent placeholder:text-black/50 focus-visible:outline-none" placeholder="Name ..." onChange={handleChange} required />
                    </MotionDiv>
                    <MotionDiv className="mb-4">
                        <label htmlFor="message" className="block mb-1 text-lg font-medium text-black">MESSAGE:</label>
                        <textarea id="message" name='message' rows="4" value={formData.message} className="border border-gray-300 text-black text-lg rounded-lg block w-full p-2 bg-transparent placeholder:text-black/50 focus-visible:outline-none" placeholder="Message..." onChange={handleChange} required></textarea>
                    </MotionDiv>
                    <MotionDiv className="mb-4">
                        <label className="block text-lg font-medium text-black">CONFIRMATION OF ATTENDANCE</label>
                        <div className="toggle">
                            <input type="radio" name="attendance" value={'true'} id="attedance" onChange={handleChange} checked={formData.attendance === 'true'} />
                            <label htmlFor="attedance">ATTEND</label>
                            <input type="radio" name="attendance" value={'false'} id="notattendance" onChange={handleChange} checked={formData.attendance === 'false'} />
                            <label htmlFor="notattendance">CAN'T ATTEND</label>
                        </div>
                    </MotionDiv>

                    {/* IF CHOOSE ATTEDANCE, THIS SECTION WILL BE DISPLAY */}
                    {isVisible === 'true' ? (
                        <motion.div
                            initial={{ opacity: 0, translateY: -50 }}
                            animate={{ opacity: 1, translateY: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className='my-8'>
                                <div className='my-4'>
                                    <input type="checkbox" name="church" id="church" value={formData.church} onChange={handleChange} />
                                    <label htmlFor="church" className={`${formData.church === 'false' ? 'no-after text-xl tracking-wide font-cormorantgaramond' : 'text-xl tracking-wide font-cormorantgaramond'}`}>HOLY MATRIMONY</label>
                                </div>
                                <div className='my-4'>
                                    <input type="checkbox" name="reception" id="reception" value={formData.reception} onChange={handleChange} />
                                    <label htmlFor="reception" className={`${formData.reception === 'false' ? 'no-after text-xl tracking-wide font-cormorantgaramond' : 'text-xl tracking-wide font-cormorantgaramond'}`}>WEDDING RECEPTION</label>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="guest" className="block mb-1 text-lg font-medium text-black">GUEST</label>
                                <select id="guest" name='guest' value={formData.guest} className="border border-gray-300 text-black text-xl rounded-lg block w-full p-2 bg-transparent" onChange={handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </motion.div>
                    ) : null}

                    <MotionDiv className='my-8 mx-[25%]'>
                        <button type="submit" className="text-white hover:text-black bg-[#363636] hover:bg-white border border-black/40 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full px-6 py-2 text-center duration-150 ease-in-out" onClick={handleSubmit}>SUBMIT</button>
                    </MotionDiv>
                </form>

                {/*========== Chat Section ========== */}
                <div className='rounded-xl'>
                    <MotionH1 className='text-4xl text-center my-4 tracking-widest font-cormorantgaramond'>
                        WELL WISHES
                    </MotionH1>
                    <MotionH1 className='text-2xl text-center my-4 tracking-widest font-greatvibes'>
                        for groom and bride
                    </MotionH1>
                    <div className='max-h-80 overflow-y-auto overflow-x-auto my-10 scrollbar-custom'>
                        {dataAttendance?.map(value => (
                            <MotionDiv key={value.id} className='pb-1 flex text-lg text-black'>
                                <div className='w-full py-2 px-2 rounded-2xl border border-black/20 flex'>
                                    <div className='w-2/12 flex justify-center items-start'>
                                        <GenerateAvatar name={value.name} />
                                    </div>
                                    <div className='w-10/12 px-2'>
                                        <p className='font-bold text-lg font-cormorantgaramond'>{value.name}</p>
                                        <p className='text-lg my-1 break-words font-cormorantgaramond'>{value.message}</p>
                                    </div>
                                </div>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
                {/*========== Chat Section ========== */}
            </motion.div>
        </section>
    )
}
