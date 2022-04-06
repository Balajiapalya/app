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
    const [selected, setSelected] = useState([]);

    const onSubmit = (video_data) => {
        video_data['tags'] = selected;
        video_data['metadata'] = meta;
        console.log(video_data)
        Api.Meta_tag(video_data).then(res => console.log(res));

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
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.others}>
                    <div className={styles.others_content}>
                        <div className={styles.title_description}>

                            <h2>Title &amp; Description</h2>
                            <div className={styles.title_description_box}>
                                <label className={styles.model_label}>Title</label>
                                <input type="text" className={styles.title_input} name="Title" {...register("title", { required: true })} placeholder="Enter title or video" />
                                <label className={styles.model_label}>Description</label>
                                <input type="text" className={styles.description_input} name="Description" {...register("description", { required: true })} placeholder="Enter your description" />
                                <div className={styles.submit}>
                                    <button className={`${styles.others_submit_btn} btn`} type="submit">Save</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tags_metadata}>
                            <h2>Tags &amp; metadata</h2>
                            <div className={styles.tags_metadata_box}>
                                <label className={styles.model_label}>Tags</label>

                                <div className={styles.tags}>
                                    <TagsInput
                                        value={selected}
                                        onChange={setSelected}
                                        name="tags"
                                        placeHolder="tags"
                                    ></TagsInput>
                                </div>
                                <label className={styles.model_label}>Metadata</label>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                <input className={styles.others_input} type="text" onChange={(e) => handleData(e)} name="key" placeholder="Enter a key" />
                                            </th>
                                            <th>

                                                <input className={styles.others_input} type="text" onChange={(e) => handleData(e)} name="value" placeholder="Enter a value" />
                                                <button onClick={() => handleClick()} type="button" className={`${styles.add_button} btn`}> <img src='/Images/Icon feather-plus-grey.png' /> Add</button>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {meta.map((i, index) =>
                                            <tr key={index}>
                                                <td>{i.key}</td>
                                                <td>{i.value}</td>
                                            </tr>
                                        )}
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
                        <div className={styles.image_poster}>
                            <h2>image poster</h2>
                            <div className={styles.image_poster_box}>
                                <img src="/Images/Image 19.png" className={styles.image_layer} alt="image" />
                                <img src="/Images/Image 18.png" className={styles.image_layer1} alt="image" />
                                <img src="/Images/Image 18.png" className={styles.image_layer2} alt="image" />
                                <div className={styles.upload_image_btn}>
                                    <button className={styles.upload_btn}>Upload Image</button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.quickpreview_poster}>
                            <h2>Quick preview poster</h2>
                            <div className={styles.quickpreview_poster_box}>
                                <img src="/Images/Image 19.png" className={styles.image_layer} alt="image" />
                                <img src="/Images/Image 18.png" className={styles.image_layer1} alt="image" />
                                <img src="/Images/Image 18.png" className={styles.image_layer2} alt="image" />
                                <div className={styles.upload_image_btn}>
                                    <button className={styles.upload_btn}>Create Gif</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.controls}>
                        <h2>Controls</h2>
                        <div className={styles.controls_box}>
                            <div className={styles.seek_bar}>
                                <input type="checkbox" className={styles.input}></input>
                                <h4>Seek bar preview</h4>

                                <p>Enable seek bar preview to generate quick thumbail previews for the entire video duration &#44; which will be shown while using the seek bar on player</p>

                            </div>
                            <div className={styles.seek_bar}>
                                <input type="checkbox" className={styles.input}></input>
                                <h4>Offline Download</h4>
                                <p>Enabling this feature will create a download a &#46; mp4 file of the video which can be used for watching the content offline &#46; </p>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </Fragment >
    )
}
