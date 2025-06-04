import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { v4 as uuid } from 'uuid';

const Manager = () => {

    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passArray, setPassArray] = useState([]);
    const refInput = useRef("");
    const refImage = useRef("");
    const refImage2 = useRef("");
    const tdref = useRef("");

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        let passArray;
        if (passwords) {
            setPassArray(JSON.parse(passwords));
        }
    }, [])

    const showPass = () => {
        if (refInput.current.type == 'password') {
            refImage.current.src = 'https://cdn.icon-icons.com/icons2/2406/PNG/512/eye_slash_visible_hide_hidden_show_icon_145987.png';
            refInput.current.type = 'text';
        }
        else {
            refImage.current.src = 'https://cdn.icon-icons.com/icons2/2406/PNG/512/eye_visible_hide_hidden_show_icon_145988.png';
            refInput.current.type = 'password';
        }
    }

    const savePassword = () => {
        if (form.site.length > 2 && form.username.length > 2 && form.password.length > 2) {
            setPassArray([...passArray, { ...form, id: uuid() }]);
            localStorage.setItem("passwords", JSON.stringify([...passArray, { ...form, id: uuid() }]));
            // console.log([...passArray, form]);
            setForm({ site: "", username: "", password: "" });
        }
        else
            alert("Enter the details to Save!");
    }

    const editPass = (id) => {
        // console.log("editing pass with id", id);
        setForm(passArray.filter(i => i.id === id)[0]);       //[0] bcz array.filter returns an array, so indexing is there

        //Now, delete the old entry, So as to remove the duplicacy
        setPassArray(passArray.filter(i => i.id !== id));
        // localStorage.setItem('passwords', JSON.stringify(passArray.filter(i=>i.id!== id)));
    }

    const deletePass = (id) => {
        if (confirm("Are you sure to delete the password ?")) {
            // console.log("deleting pass with id", id);
            localStorage.setItem("passwords", JSON.stringify(passArray.filter((item) => item.id !== id)));
            setPassArray(passArray.filter((item) => item.id !== id));
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const showPass2 = () =>{
        console.log("running")
        // tdref.current.element = "{item.password}";
        // tdref.current = <td ref={tdref} className='text-center w-1/4 md:w-1/6 bg-slate-300 p-2'>{item.password}</td>;
    //     console.log(tdref.current);
    }
    return (
        <div className='bg-slate-900'>
            {/* //we have defined a class 'mycontainer' in index.css  */}
            <div className='manager p-5 lg:p-12 lg:px-20 mx-auto min-h-screen  lg:max-w-[80vw] lg:mycontainer bg-slate-200'>
                <h1 className='logo text-4xl font-bold text-center'>
                    <span className='text-red-500'>&lt;</span>Pass
                    <span className='text-red-500'>OP/&gt;</span>
                </h1>

                <p className='text-center text-lg mb-5'>Your own password manager</p>
                <input value={form.site} onChange={handleChange} type='text' placeholder='Enter website name' className='w-full rounded p-2 my-5 border border-black' name='site' id='site' />
                <div className='md:flex md:gap-5 md:justify-center'>
                    <input value={form.username} onChange={handleChange} type='text' placeholder='Enter the Username' className='md:my-5 w-full rounded p-2 border border-black' name='username' id='username' />

                    <div className='relative my-5 md:my-0 md:flex md:items-center w-full'>
                        <input ref={refInput} value={form.password} onChange={handleChange} type='password' placeholder='Enter the password' className='md:my-5 w-full rounded p-2 border border-black' name='password' id='pass' />

                        <img onClick={showPass} ref={refImage} className='absolute right-1 top-2 md:top-7' src='https://cdn.icon-icons.com/icons2/2406/PNG/512/eye_visible_hide_hidden_show_icon_145988.png' alt='show' width={25} height={25}></img>
                    </div>
                    <button onClick={savePassword} className='md:my-5 flex items-center justify-center bg-slate-800 min-w-[10vw] text-white  hover:bg-slate-900 rounded border border-white p-2 mx-auto'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ "width": "25px", "height": "25px" }}>
                        </lord-icon>
                        Save
                    </button>
                </div>

                <div className='my-5'>
                    <h1 className='my-5 text-xl font-bold'>Your Passwords</h1>
                    {passArray.length === 0 && <div>No saved passwords</div>}

                    {passArray.length != 0 && <table className="mb-10 table-auto w-full overflow-hidden rounded-lg">
                        <thead className='bg-slate-800 h-10 text-white'>
                            <tr>
                                <th>Website/App</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Show/Hide</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {passArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='text-center w-1/4 md:w-1/3 bg-slate-300 p-2'>{item.site}</td>
                                    <td className='text-center w-1/4 md:w-1/3 bg-slate-300 p-2'>{item.username}</td>
                                    <td ref={tdref} className='text-center w-1/4 md:w-1/6 bg-slate-300 p-2'>{"*".repeat(item.password.length)}</td>

                                    <td className='w-24 bg-slate-200'>
                                        {/* <img onClick={showPass2} ref={refImage2} className='absolute right-1 top-2 md:top-7' src='https://cdn.icon-icons.com/icons2/2406/PNG/512/eye_slash_visible_hide_hidden_show_icon_145987.png' alt='show' width={25} height={25}></img> */}
                                        <span onClick={() => { showPass2() }} className='cursor-pointer md:mx-1'>
                                            <lord-icon src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "widht": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                    <td className='flex md:w-1/8 justify-center bg-slate-300 p-2'>
                                        <span onClick={() => { editPass(item.id) }} className='cursor-pointer md:mx-1'>
                                            <lord-icon src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "widht": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span onClick={() => { deletePass(item.id) }} className='cursor-pointer md:mx-1'>
                                            <lord-icon src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "widht": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </div >
    )
}

export default Manager
