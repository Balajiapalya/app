import { Fragment, useEffect } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import { useState } from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { TagsInput } from "react-tag-input-component";
import Api from '../api/api'

export default function Others() {
    const [keys, setKey] = useState({ key: '', value: '' })
    const [meta, setMeta] = useState([])
    const [tags, setTags] = useState([])
    // const [selected, setSelected] = useState([]);
    const [dataVideo, setDataVideo] = useState([])
    const [inputTitle,setInputTitle]=useState()


    const onSubmit = (video_data) => {
        let doc=document.querySelector('.child')
        doc.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('header')[0].textContent=inputTitle
        doc.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('mainTitle')[0].textContent=inputTitle
        video_data['tags'] = tags;
        video_data['metadata'] = meta;
        if(inputTitle){
            video_data['title']=inputTitle
        }else{
            video_data['title']=localStorage.getItem('asset_title')
        }
            Api.Meta_tag(video_data).then(res => {
            })
                .catch(error => {
                    console.log(error)
                })
    
        
        
    }
    // set in object
    const handleData = (e) => {
        const fieldName = e.target.getAttribute('name')
        const formValue = { ...keys }
        formValue[fieldName] = e.target.value
        setKey(formValue)

    }

    // set in state to add
    const handleClick = () => {
        const newObj = {
            key: keys.key,
            value: keys.value
        }
        setMeta([...meta, newObj])
        setKey({ key: '', value: '' })
    }

    useEffect(() => {
        Api.Get_Env_item().then(res => {
            setDataVideo(res.data.data)
            setTags(res.data.data.tags)
            setMeta(res.data.data.metadata)
            // setSelected(res.data.data.tags)
        })
        return()=>{
            setDataVideo([])
            setTags([])
            setMeta([])
        }
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleKeyDown=(e)=>{
       
        let inputValue=e.target.value;
        if(e.keyCode==13){
            if(e.target.value.length>0){
                setTags([...tags,inputValue])
                e.target.value="" 
                e.preventDefault();
            }
        }
    }

    const handleRemoveTag = (i, index) => {
        tags.splice(index, 1)
        setTags([...tags])
        return tags
    }
    const handleInput=(e)=>{
        setInputTitle(e.target.value)
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.others}>
                    <div className={styles.others_content}>
                        <div className={styles.title_description}>

                            <h2>Title &amp; Description</h2>
                            <div className={styles.title_description_box}>
                                <label className={styles.model_label}>Title</label>
                                {/* <input type="text" className={styles.title_input} defaultValue={dataVideo.title} name="Title" {...register("title", { required: true })} placeholder="Enter title or video" /> */}
                                <input type="text" className={`${styles.title_input} child`} defaultValue={dataVideo.title} name="Title" placeholder="Enter title or video" onChange={(e)=>handleInput(e)}/>
                                <label className={styles.model_label}>Description</label>
                                <input type="text" className={styles.description_input} defaultValue={dataVideo.description} name="Description" {...register("description",{required:true})} placeholder="Enter your description" />
                                <div className={styles.submit}>
                                    <button className={`${styles.others_submit_btn} btn`} type="submit">Save</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tags_metadata}>
                            <h2>Tags &amp; Metadata</h2>
                            <div className={styles.tags_metadata_box}>
                                <label className={styles.model_label}>Tags</label>

                                <div className={styles.tags}>
                                    {/* {tags.map(i=><>
                                    <span  className="rti--tag go1186250972" name="tags"><span>{i}</span><button type="button" >✕</button></span>
                                </>)} */}

                                    {/* <TagsInput
                                        value={selected}
                                        onChange={setSelected}
                                        name="tags"
                                        placeHolder="tags"
                                    ></TagsInput> */}
                                    {/* {tags.map(i=>i)} */}
                                    {tags?tags.map((tag, ind) => (
                                        <div key={ind}>
                                            <div className={styles.tagItem}>
                                                <span className={styles.text}>{tag}</span>
                                                <span onClick={() => handleRemoveTag(tag, ind)} className={styles.close}>&times;</span>
                                            </div>
                                        </div>
                                    )):null}
                                    
                                    <input {...register("tags", { required: false })} onKeyDown={(e) => handleKeyDown(e)} className={styles.tags_input} type="text" />
                                </div>
                                <label className={styles.model_label}>Metadata</label>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                <input className={styles.others_input} type="text" value={keys.key} onChange={(e) => handleData(e)} name="key" placeholder="Enter a key" />
                                            </th>
                                            <th>

                                                <input className={styles.others_input} type="text" value={keys.value} onChange={(e) => handleData(e)} name="value" placeholder="Enter a value" />
                                                <button onClick={() => handleClick()} type="button" className={`${styles.add_button} btn`}> <img src='/images/iconfeather-plus-grey.svg' /> Add</button>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {meta?meta.map((i, index) =>
                                            <tr key={index}>
                                                <td className={styles.metadata_key}>{i.key}</td>
                                                <td className={styles.metadata_value}>{i.value}</td>
                                            </tr>
                                        ):''}
                                        {/* <tr>
                                            <td>Frame Rate</td>
                                            <td className={styles.table_body}>25 fps</td>
                                        </tr>
                                        <tr>
                                            <td>Resoultion</td>
                                            <td className={styles.table_body}>1080 p</td>

                                        </tr> */}
                                    </tbody>
                                </table>
                                <div className={styles.submit}>
                                    <button className={`${styles.others_submit_btn} btn`} type="submit">Save</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.image_guickpreview_poster}>
                        {/* <div className={styles.image_poster}>
                            <h2>Image Poster</h2>
                            <div className={styles.image_poster_box}>
                                <img src="/images/Image 19.png" className={styles.image_layer} alt="image" />
                                <img src="/images/Image 18.png" className={styles.image_layer1} alt="image" />
                                <img src="/images/Image 18.png" className={styles.image_layer2} alt="image" />
                                <div className={styles.upload_image_btn}>
                                    <button className={styles.upload_btn}>Upload Image</button>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className={styles.quickpreview_poster}>
                            <h2>Quick Preview Poster</h2>
                            <div className={styles.quickpreview_poster_box}>
                                <img src="/images/Image 19.png" className={styles.image_layer} alt="image" />
                                <img src="/images/Image 18.png" className={styles.image_layer1} alt="image" />
                                <img src="/images/Image 18.png" className={styles.image_layer2} alt="image" />
                                <div className={styles.upload_image_btn}>
                                    <button className={styles.upload_btn}>Create Gif</button>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className={styles.controls}>
                        <h2>Controls</h2>
                        <div className={styles.controls_box}>
                            <div className={styles.seek_bar}>
                                <input type="checkbox" className={styles.input}></input>
                                <h4>Seek bar preview</h4>

                                <p>Enable seek bar preview to generate quick thumbail previews for the entire video duration &#44; which will be shown while using the seek bar on player</p>

                            </div>
                            <div className={styles.offline_download}>
                                <input type="checkbox" className={styles.input}></input>
                                <h4>Offline Download</h4>
                                <p>Enabling this feature will create a download a &#46; mp4 file of the video which can be used for watching the content offline &#46; </p>
                            </div>

                        </div>
                    </div> */}
                </div>
            </form>
        </Fragment >
    )
}
