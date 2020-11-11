import React,{useContext,useEffect,useState} from "react";
import { EditContext, EditKeyContext } from "../Context/Context";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import firebase from "firebase/app";
import { readAndCompressImage } from "browser-image-resizer";
import {imageConfig} from "../Firebase/imageconfig"
import { toast } from "react-toastify";
import {v4} from "uuid";
import { Redirect } from "react-router-dom";
import {Link, useHistory} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

export const EditItem=()=>{
  const classes = useStyles();
    const {EdiitItem,setEdiitItem}=useContext(EditContext);
    const [EventName,setEventName]=useState();
    const [uploadStatus,setUploadStatus]=useState(true);
    const [Date,setDate]=useState("");
    const [Level,setLevel]=useState("");
    const [yLink,setYLink]=useState("");
    const [status,setStatus]=useState(false);
    const [downloadUrl, setDownloadUrl] = useState(null);
  const history=useHistory();
  const {EdiitKey,setEdiitKey}=useContext(EditKeyContext);

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(uploadStatus){
            firebase.database()
            .ref(`/events/${EdiitKey}`)
            .update({EventName,Date,status,picture:downloadUrl,yLink,Level})
            .then(()=>{toast("Succesfully Edited Event",{type:"success"})})
            .catch((err)=>console.log(err))

            setDate("");
            setLevel("");
            setDownloadUrl("");
            setEventName("");
            setYLink("");
            history.push('/editevent')
        }
        else{
            toast("Image Uploading is in progress,Please wait for 2 sec",{type:"error"})
        }
    }

    const imagePicker = async e => {
      setUploadStatus(false);
        // TODO: upload image and set D-URL to state
        try{
          const file=e.target.files[0];
          var metadata={
            contentType:file.type
          };
          let resizedImage=await readAndCompressImage(file,imageConfig);
          const storageRef=await firebase.storage().ref();
          var uploadTask=storageRef
          .child("events/"+file.name)
          .put(resizedImage,metadata);
    
          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,snapshot=>{
    
            switch(snapshot.state){
                
              case firebase.storage.TaskState.PAUSED:
                console.log("Uplaoding failed");
                break;
              case firebase.storage.TaskState.RUNNING:
                console.log("Uploading is in progress");
                break;  
            }
          },
          error=>{
        toast("Sorry,Image uploading is failed",{type:"error"});
            console.log(error.message);
          },
          ()=>{
            uploadTask.snapshot.ref.getDownloadURL()
              .then(downloadURL=>{
                console.log(downloadURL);
                setDownloadUrl(downloadURL)
                setUploadStatus(true);
              })
              .catch(err=>console.log(err.message));
          }
          );
        }
        catch(error){
          console.log(error.message);
          toast("Something went wrong",{type:"error"})
        }
      };
    useEffect(()=>{
        console.log(1);
        setEventName(EdiitItem.EventName);
        setDate(EdiitItem.Date);
        setLevel(EdiitItem.Level);
        setStatus(EdiitItem.status);
        setYLink(EdiitItem.yLink);
        setDownloadUrl(EdiitItem.picture);
    },[])
    return(
        <form style={{marginLeft:"20px",marginRight:"20px",marginTop:"100px"}} onSubmit={handleSubmit}>
            <div class="form-group" style={{marginTop:"5px"}}>
                <label>Event Name</label>
                <input onChange={(e)=>{ setEventName(e.target.value)}} value={EventName} type="text" placeholder="Enter Event Name"/>
            </div>
            <div class="form-group" style={{marginTop:"5px"}}>
            <TextField
                id="datetime-local"
                label="Event Date & Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                onChange={(e)=>setDate(e.target.value)}
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }} style={{width:"35%"}}
                value={Date}
            />
            <div style={{marginTop:"15px"}}>
            <label for="image" style={{marginRight:"10px"}}>Event Image</label>
            <br/>
                    <input
                    type="file"
                    name="image"
                    id="imagepicker"
                    accept="image/*"
                    multiple={false}
                    onChange={e => imagePicker(e)}
                    className="hidden"
                  />
            </div>
            </div>
            <div>
            <label  style={{marginRight:"10px"}}>Class Link</label>
            <input onChange={(e)=>setYLink(e.target.value)} value={yLink} type="text" class="form-control" placeholder="Enter Event Link"/>

            </div>
            <div class="dropdown">
            <label  style={{marginBottom:"10px",marginTop:"15px"}}>Level</label>
            <br/>
            <select id="lang" onChange={(e)=>setLevel(e.target.value)} value={Level}>
                  <option value="select">Select</option>
                  <option value="Begineer">Begineer</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
               </select>
          </div>
            <div style={{marginTop:"15px"}}>
            <label for="image" style={{marginRight:"10px"}}>Event Completed ?</label>
            <br/>
                {
                    (!status)?(<button class="btn btn-secondary" onClick={(e)=>{e.preventDefault();setStatus(true);}}>Yes</button>):(<button onClick={(e)=>{e.preventDefault();setStatus(false);}} class="btn btn-secondary">No</button>)
                }
            </div>
            <ul/>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

    )
}